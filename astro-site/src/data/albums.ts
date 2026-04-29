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
}

export const albums: Album[] = [
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
