// Dummy gallery data matching the FestMedia schema
// Replace with real API calls when backend is ready

export interface FestMedia {
    id: string;
    url: string;
    caption?: string;
    mimeType?: string;
    sizeBytes?: number;
    imageRank: number;
    isVisible: boolean;
    thumbnailUrl?: string;
}

const DUMMY_GALLERY: FestMedia[] = [
    {
        id: "1",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/sample.jpg",
        caption: "Opening Ceremony – The Night Begins",
        mimeType: "image/jpeg",
        imageRank: 1,
        isVisible: true,
    },
    {
        id: "2",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample-5.jpg",
        caption: "Cultural Stage Performances",
        mimeType: "image/jpeg",
        imageRank: 2,
        isVisible: true,
    },
    {
        id: "3",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample-4.jpg",
        caption: undefined,
        mimeType: "image/jpeg",
        imageRank: 3,
        isVisible: true,
    },
    {
        id: "4",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample-3.jpg",
        caption: "Robotics Workshop in Action",
        mimeType: "image/jpeg",
        imageRank: 4,
        isVisible: true,
    },
    {
        id: "5",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample-2.jpg",
        caption: undefined,
        mimeType: "image/jpeg",
        imageRank: 5,
        isVisible: true,
    },
    {
        id: "6",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/cld-sample.jpg",
        caption: "Hackathon – Building Tomorrow",
        mimeType: "image/jpeg",
        imageRank: 6,
        isVisible: true,
    },
    {
        id: "7",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/landscapes/nature-mountains.jpg",
        caption: "Fashion Show – Veloura Night",
        mimeType: "image/jpeg",
        imageRank: 7,
        isVisible: true,
    },
    {
        id: "8",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/landscapes/beach-boat.jpg",
        caption: undefined,
        mimeType: "image/jpeg",
        imageRank: 8,
        isVisible: true,
    },
    {
        id: "9",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/animals/three-dogs.jpg",
        caption: "Team Sathwa Behind the Scenes",
        mimeType: "image/jpeg",
        imageRank: 9,
        isVisible: true,
    },
    {
        id: "10",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/food/dessert.jpg",
        caption: "Cultural Fusion Dinner",
        mimeType: "image/jpeg",
        imageRank: 10,
        isVisible: true,
    },
    {
        id: "11",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/people/saxophone-player.jpg",
        caption: "ProShow Live Performance",
        mimeType: "image/jpeg",
        imageRank: 11,
        isVisible: true,
    },
    {
        id: "12",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/people/guy-snow.jpg",
        caption: undefined,
        mimeType: "image/jpeg",
        imageRank: 12,
        isVisible: true,
    },
    {
        id: "13",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/people/jazz.jpg",
        caption: "Jazz Night at Sathwa '26",
        mimeType: "image/jpeg",
        imageRank: 13,
        isVisible: true,
    },
    {
        id: "14",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/landscapes/girl-urban-view.jpg",
        caption: "Urban Photography Contest Winner",
        mimeType: "image/jpeg",
        imageRank: 14,
        isVisible: true,
    },
    {
        id: "15",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/landscapes/architecture-signs.jpg",
        caption: "Festival Architecture & Decor",
        mimeType: "image/jpeg",
        imageRank: 15,
        isVisible: true,
    },
    {
        id: "16",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/food/spices.jpg",
        caption: undefined,
        mimeType: "image/jpeg",
        imageRank: 16,
        isVisible: true,
    },
    {
        id: "17",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/ecommerce/accessories-bag.jpg",
        caption: "Fashion Show Accessories",
        mimeType: "image/jpeg",
        imageRank: 17,
        isVisible: true,
    },
    {
        id: "18",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/ecommerce/leather-bag-gray.jpg",
        caption: undefined,
        mimeType: "image/jpeg",
        imageRank: 18,
        isVisible: true,
    },
    {
        id: "19",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/cloudinary-group.jpg",
        caption: "The Sathwa Team — Grateful for Every Moment",
        mimeType: "image/jpeg",
        imageRank: 19,
        isVisible: true,
    },
    {
        id: "20",
        url: "https://res.cloudinary.com/demo/image/upload/w_800,h_600,c_fill/samples/bike.jpg",
        caption: "Auto Show Highlights",
        mimeType: "image/jpeg",
        imageRank: 20,
        isVisible: true,
    },
];

// Sort by imageRank ascending, filter visible only
export const galleryData = DUMMY_GALLERY
    .filter((m) => m.isVisible)
    .sort((a, b) => a.imageRank - b.imageRank);
