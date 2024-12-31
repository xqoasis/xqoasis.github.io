import azure.functions as func
import logging
from PIL import Image
import io
from azure.storage.blob import BlobServiceClient
import os

def create_image_variants(image_data, filename):
    """创建不同尺寸的图片版本"""
    sizes = {
        'thumbnail': 300,
        'preview': 800,
        'full': None
    }
    
    image = Image.open(io.BytesIO(image_data))
    output_images = {}
    
    for size_name, max_size in sizes.items():
        # 调整大小
        if max_size:
            ratio = min(max_size / float(image.size[0]), 
                       max_size / float(image.size[1]))
            new_size = tuple(int(dim * ratio) for dim in image.size)
            resized = image.resize(new_size, Image.LANCZOS)
        else:
            resized = image
            
        # 转换为 WebP
        output_buffer = io.BytesIO()
        resized.save(output_buffer, format='WEBP', quality=85, optimize=True)
        output_buffer.seek(0)
        output_images[f"{size_name}/webp/{filename}.webp"] = output_buffer.getvalue()
        
        # 为缩略图保存 JPEG 版本
        if size_name == 'thumbnail':
            jpeg_buffer = io.BytesIO()
            resized.save(jpeg_buffer, format='JPEG', quality=85, optimize=True)
            jpeg_buffer.seek(0)
            output_images[f"{size_name}/jpeg/{filename}.jpg"] = jpeg_buffer.getvalue()
    
    return output_images

def main(myblob: func.InputStream, context: func.Context):
    logging.info(f"Python blob trigger function processed blob \n"
                f"Name: {context.params['filename']}\n"
                f"Size: {myblob.length} bytes")

    # 获取 blob 存储连接
    connect_str = os.environ["AzureWebJobsStorage"]
    blob_service_client = BlobServiceClient.from_connection_string(connect_str)
    container_client = blob_service_client.get_container_client("images")
    
    # 处理图片
    try:
        filename = context.params['filename']
        variants = create_image_variants(myblob.read(), filename)
        
        # 上传所有版本
        for path, image_data in variants.items():
            blob_client = container_client.get_blob_client(path)
            blob_client.upload_blob(image_data, overwrite=True)
            
        logging.info(f"Successfully processed {filename}")
        
    except Exception as e:
        logging.error(f"Error processing {filename}: {str(e)}")
        raise