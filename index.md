---
layout: home
author_profile: true
header:
  overlay_image: /assets/images/home/header.jpg
  caption: "Photo credit: [**Q**]"
# excerpt: "Software Engineer | AI Enthusiast | Hiking Photographer"
intro: 
  - excerpt: 'To share something here.'
feature_row:
  - image_path: https://xqblogimages.blob.core.windows.net/blog-images/gcp/DSC00047.webp
    alt: "Photos"
    title: "Gold Creek Pond"
    excerpt: "202412"
    url: "/202412_gcp/"
    btn_label: "Album"
    btn_class: "btn--primary"
  - image_path: https://xqblog-images.azureedge.net/blog-images/bay/sunrise/DSC09940.webp
    alt: "Photos"
    title: "Bay area"
    excerpt: "202411"
    url: "/202411_bay/"
    btn_label: "Album"
    btn_class: "btn--primary"
  - image_path: https://xqblog-images.azureedge.net/blog-images/ect/DSC09869-2.webp
    alt: "Photos"
    title: "Enchantment"
    excerpt: "202410"
    url: "/202410_ect/"
    btn_label: "Album"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

<div class="latest-posts">
  <h2>Latest posts</h2>
  {% for post in site.categories.hiking limit:3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>