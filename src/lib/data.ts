export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  region: string;
  artisan: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  isExportReady: boolean;
  stock: number;
  materials: string[];
}

export interface Artisan {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  specialty: string;
  rating: number;
  sales: number;
  joined: string;
  story: string;
  regionId: string;
  portfolio: string[];
  philosophy: string;
  amharicName: string;
}

export interface Region {
  id: string;
  name: string;
  amharicName: string;
  image: string;
  specialty: string;
  description: string;
  history: string;
  featuredArtisans: string[];
}

export const culturalTerms = {
  welcome: 'እንኳን ደህና መጡ (Enkuan Dehna Metu)',
  shop: 'ገበያ (Gebeya)',
  artisan: 'ባለሙያ (Balemuya)',
  quality: 'ጥራት (Tirat)',
  handcrafted: 'በእጅ የተሰራ (Be’eje Yetesera)',
  region: 'ክልል (Kilil)',
  community: 'ማህበረሰብ (Mahibereseb)',
  export: 'ወደ ውጭ መላክ (Export)',
  wisdom: 'ጥበብ (Tibeb)',
  explore: 'ያስሱ (Yasisu)',
  tradition: 'ባህል (Bahil)',
  heritage: 'ቅርስ (Kirs)',
  artistry: 'ኪነ-ጥበብ (Kine-Tibeb)',
  masterpiece: 'ግሩም ስራ (Girum Sira)',
  ethiopia: 'ኢትዮጵያ (Ethiopia)',
  marketplace: 'የገበያ ቦታ (Ye-Gebeya Bota)',
  shipping: 'ጭነት (Chinet)',
  checkout: 'ክፍያ (Kifiya)',
  success: 'ተሳክቷል (Tesaktoal)',
};

export const regions: Region[] = [
  { 
    id: 'amhara', 
    name: 'Amhara', 
    amharicName: 'አማራ',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/lalibela-region-db3eb5a5-1774945161736.webp', 
    specialty: 'Cotton weaving and embroidery (ሽመና)',
    description: 'Home to the Simien Mountains and ancient weaving traditions of Gonder.',
    history: 'The Amhara region is legendary for its fine cotton weaving (Shemena), used for centuries to create the iconic Habesha Kemis.',
    featuredArtisans: ['v1']
  },
  { 
    id: 'oromia', 
    name: 'Oromia', 
    amharicName: 'ኦሮሚያ',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/simien-mountains-region-2d3cec8b-1774945161958.webp', 
    specialty: 'Leather crafts and basketry (ቆዳ እና ቅርጫት)',
    description: 'The heart of Ethiopia, known for exceptional leather and coffee culture.',
    history: "Oromia artisans are masters of leatherwork and complex basketry, reflecting the region's deep connection to the land.",
    featuredArtisans: ['v2', 'v3']
  },
  { 
    id: 'tigray', 
    name: 'Tigray', 
    amharicName: 'ትግራይ',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/ethiopian-jewelry-7f1e0d8d-1774945169698.webp', 
    specialty: 'Silver jewelry and stone carving (ብር እና ድንጋይ)',
    description: 'Ancient Axumite heritage reflected in intricate silver and stonework.',
    history: 'Axumite silverwork is world-renowned for its filigree techniques, passed down through generations of goldsmiths.',
    featuredArtisans: []
  },
  { 
    id: 'sidama', 
    name: 'Sidama', 
    amharicName: 'ሲዳማ',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/coffee-ceremony-d5e947f4-1774945167273.webp', 
    specialty: 'Bamboo crafts and coffee (ቀርከሃ እና ቡና)',
    description: 'Lush greenery and unique bamboo architecture from the Sidama highlands.',
    history: 'Sidama culture is famous for its sustainable bamboo structures and being the ancestral home of coffee.',
    featuredArtisans: []
  }
];

export const categories = [
  { id: 'clothing', name: 'Clothing (ልብስ)', icon: 'Shirt' },
  { id: 'leather', name: 'Leather (ቆዳ)', icon: 'Briefcase' },
  { id: 'jewelry', name: 'Jewelry (ጌጣጌጥ)', icon: 'Sparkles' },
  { id: 'homeware', name: 'Home (የቤት እቃ)', icon: 'Home' },
  { id: 'art', name: 'Art (ጥበብ)', icon: 'Palette' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Habesha Kemis',
    price: 450,
    category: 'clothing',
    region: 'amhara',
    artisan: 'Abebech Desta',
    rating: 4.9,
    reviews: 124,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/artisan-weaving-d6812e75-1774945167724.webp',
    description: 'A masterpiece of handwoven Ethiopian cotton with gold silk embroidery.',
    isExportReady: true,
    stock: 12,
    materials: ['Hand-spun Cotton', 'Silk Thread', 'Gold Embroidery']
  },
  {
    id: '2',
    name: 'Entoto Leather Tote',
    price: 120,
    category: 'leather',
    region: 'oromia',
    artisan: 'Mulugeta Tilahun',
    rating: 4.7,
    reviews: 89,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/leather-craftsmanship-3b1a22fd-1774945164798.webp',
    description: 'Supple full-grain leather ethically sourced and handcrafted in Addis Ababa.',
    isExportReady: true,
    stock: 25,
    materials: ['Full-grain Cowhide', 'Hand-stitched Thread']
  },
  {
    id: '3',
    name: 'Axumite Silver Cross',
    price: 85,
    category: 'jewelry',
    region: 'tigray',
    artisan: 'Solomon Gebre',
    rating: 4.8,
    reviews: 56,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/ethiopian-jewelry-7f1e0d8d-1774945169698.webp',
    description: 'Intricate filigree silver cross inspired by 4th-century Axumite designs.',
    isExportReady: true,
    stock: 40,
    materials: ['925 Silver', 'Filigree Wire']
  },
  {
    id: '4',
    name: 'Jimma Coffee Table',
    price: 320,
    category: 'homeware',
    region: 'oromia',
    artisan: 'Dawit Mekonnen',
    rating: 5.0,
    reviews: 12,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/cultural-decor-33b8dafc-1774945162125.webp',
    description: 'Hand-carved from a single piece of hardwood, featuring traditional Oromo motifs.',
    isExportReady: false,
    stock: 3,
    materials: ['Indigenous Hardwood', 'Natural Beeswax Polish']
  },
  {
    id: '5',
    name: 'Traditional Tibeb Scarf',
    price: 65,
    category: 'clothing',
    region: 'amhara',
    artisan: 'Abebech Desta',
    rating: 4.9,
    reviews: 45,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/tibeb-texture-7b0e96b6-1774945162987.webp',
    description: 'A colorful hand-woven scarf showcasing the beautiful Tibeb patterns of Gonder.',
    isExportReady: true,
    stock: 50,
    materials: ['Hand-spun Cotton', 'Silk Thread']
  }
];

export const artisans: Artisan[] = [
  {
    id: 'v1',
    name: 'Abebech Desta',
    amharicName: 'አበበች ደስታ',
    role: 'Master Weaver',
    bio: 'Abebech has been weaving for over 30 years, preserving the ancient techniques of the Gonder region.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/artisan-portrait-9b91d44f-1774945170374.webp',
    location: 'Gonder, Amhara',
    specialty: 'Cotton Handloom',
    rating: 4.9,
    sales: 1240,
    joined: '2021',
    regionId: 'amhara',
    story: 'Her journey began as a small girl watching her grandmother transform raw cotton into works of art. Today, she employs 15 other women in her community, ensuring that "Tibeb" (wisdom) is passed down.',
    portfolio: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/artisan-weaving-d6812e75-1774945167724.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/tibeb-texture-7b0e96b6-1774945162987.webp'
    ],
    philosophy: 'Weaving is not just making clothes; it is storytelling with thread.'
  },
  {
    id: 'v2',
    name: 'Mulugeta Tilahun',
    amharicName: 'ሙሉጌታ ጥላሁን',
    role: 'Leather Craftsman',
    bio: 'Mulugeta specializes in combining traditional Ethiopian motifs with modern functional leather design.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/leather-craftsmanship-3b1a22fd-1774945164798.webp',
    location: 'Addis Ababa',
    specialty: 'Full-grain Leather',
    rating: 4.8,
    sales: 850,
    joined: '2022',
    regionId: 'oromia',
    story: 'Mulugeta believes that Ethiopian leather is the best in the world. His goal is to bring "Tibeb" leather to global runways, combining heritage with high fashion.',
    portfolio: [],
    philosophy: 'The quality of the hide is the foundation of the craft.'
  },
  {
    id: 'v3',
    name: 'Dawit Mekonnen',
    amharicName: 'ዳዊት መኮንን',
    role: 'Wood Sculptor',
    bio: 'Dawit is a master of Jimma wood carving, creating furniture that doubles as sculptural art.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/cultural-decor-33b8dafc-1774945162125.webp',
    location: 'Jimma, Oromia',
    specialty: 'Hardwood Carving',
    rating: 5.0,
    sales: 45,
    joined: '2023',
    regionId: 'oromia',
    story: 'Born into a family of woodworkers, Dawit uses ancestral patterns to create modern functional art. Every piece he carves carries the weight of history.',
    portfolio: [],
    philosophy: 'Wood has its own spirit; my job is to release it.'
  },
];