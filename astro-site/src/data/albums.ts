export interface AlbumImage {
  image_path: string;
  url?: string;
  alt?: string;
}

export interface Album {
  slug: string;
  title: string;
  date: string;
  cover: string;
  coverPosition?: string;
}

export const albums: Album[] = [
  {
    slug: '202512_landsend',
    title: 'Lands End',
    date: '2025.12',
    cover: '/gallery/202512_landsend/DSC00369.webp',
    coverPosition: 'center 65%',
  },
  {
    slug: '202510_heron',
    title: '鸟与滩涂',
    date: '2025.10',
    cover: '/gallery/202510_heron/DSC00161.webp',
  },
  {
    slug: '202509_rainier',
    title: 'Mount Rainier',
    date: '2025.09',
    cover: '/gallery/202509_rainier/DSC00083.webp',
  },
  {
    slug: '202508_sunrise',
    title: 'Sunrise',
    date: '2025.08',
    cover: '/gallery/202508_sunrise/DSC09957.webp',
  },
  {
    slug: '202507_dickerman',
    title: 'Mount Dickerman',
    date: '2025.07',
    cover: '/gallery/202507_dickerman/DSC00280.webp',
  },
  {
    slug: '202505_downton',
    title: 'Bloedel Reserve',
    date: '2025.05',
    cover: '/gallery/202505_downton/DSC00005.webp',
  },
  {
    slug: '202501_np',
    title: "2025 New Year's Trip",
    date: '2025.01',
    cover: '/gallery/DSC04131.webp',
  },
  {
    slug: '202412_gcp',
    title: 'Gold Creek Pond',
    date: '2024.12',
    cover: '/gallery/DSC00047.webp',
  },
  {
    slug: '202411_bay',
    title: 'Bay Area',
    date: '2024.11',
    cover: '/gallery/DSC09937-Enhanced-NR.webp',
  },
  {
    slug: '202410_ect',
    title: 'Enchantment Traverse',
    date: '2024.10',
    cover: '/gallery/DSC09843-2.webp',
  },
  {
    slug: '202409_pana',
    title: 'Panorama Ridge',
    date: '2024.09',
    cover: '/gallery/DSC09473.webp',
  },
  {
    slug: 'others',
    title: 'Others',
    date: '',
    cover: '/gallery/DSC09012-Enhanced-NR.webp',
  },
];
