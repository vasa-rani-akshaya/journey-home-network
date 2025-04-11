
export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  country: string;
  price: number;
  rating: number;
  beds: number;
  baths: number;
  guests: number;
  host: {
    name: string;
    image: string;
    isSuperhost: boolean;
  };
  amenities: string[];
  images: string[];
  category: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxurious Beachfront Villa",
    description: "Wake up to breathtaking ocean views in this modern beachfront villa. Perfect for families or groups looking for a relaxing getaway with private beach access.",
    location: "Malibu, California",
    country: "United States",
    price: 450,
    rating: 4.97,
    beds: 4,
    baths: 3,
    guests: 8,
    host: {
      name: "Sarah",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
      isSuperhost: true
    },
    amenities: ["Beachfront", "Kitchen", "Wifi", "Free parking", "Pool", "Air conditioning", "Pets allowed"],
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBraXRjaGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1569597970494-29fe7874add3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZSUyMGJlZHJvb218ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
    ],
    category: "beachfront"
  },
  {
    id: "2",
    title: "Mountain Retreat with Hot Tub",
    description: "Escape to this stunning cabin nestled in the mountains. Features a private hot tub, wood-burning fireplace, and panoramic mountain views. Perfect for a romantic getaway or small family vacation.",
    location: "Aspen, Colorado",
    country: "United States",
    price: 290,
    rating: 4.92,
    beds: 2,
    baths: 2,
    guests: 4,
    host: {
      name: "Michael",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      isSuperhost: true
    },
    amenities: ["Mountain view", "Hot tub", "Kitchen", "Wifi", "Free parking", "Fireplace", "Washer/Dryer"],
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW58ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhYmluJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwdHVifGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiaW4lMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D"
    ],
    category: "cabins"
  },
  {
    id: "3",
    title: "Lakefront Cabin with Private Dock",
    description: "Enjoy this beautiful lakefront property with private dock. Canoe, kayak, or swim in the crystal-clear lake. Cozy interior with modern amenities.",
    location: "Lake Tahoe, Nevada",
    country: "United States",
    price: 320,
    rating: 4.85,
    beds: 3,
    baths: 2,
    guests: 6,
    host: {
      name: "Jessica",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      isSuperhost: false
    },
    amenities: ["Lakefront", "Kitchen", "Wifi", "Free parking", "Fireplace", "Dock", "BBQ grill"],
    images: [
      "https://images.unsplash.com/photo-1464982326199-86f32f81b211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2UlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1605538285650-55780df611c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW4lMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D",
      "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jayUyMGxha2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1597356515743-9cf3e5f8f10f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW4lMjBiZWRyb29tfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1583608564770-3126aebf8b8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D"
    ],
    category: "lakefront"
  },
  {
    id: "4",
    title: "Luxury Penthouse with City Views",
    description: "Experience luxury living in this stunning penthouse apartment with panoramic city views. Features include a gourmet kitchen, spacious living areas, and a private terrace.",
    location: "New York City, New York",
    country: "United States",
    price: 550,
    rating: 4.95,
    beds: 2,
    baths: 2,
    guests: 4,
    host: {
      name: "David",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
      isSuperhost: true
    },
    amenities: ["City view", "Kitchen", "Wifi", "Doorman", "Gym", "Air conditioning", "Washer/Dryer"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwYXBhcnRtZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D",
      "https://images.unsplash.com/photo-1603825491103-bd638b1873b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHZpZXd8ZW58MHx8MHx8fDA%3D"
    ],
    category: "amazing-views"
  },
  {
    id: "5",
    title: "Tropical Villa with Private Pool",
    description: "Escape to paradise in this stunning tropical villa. Features include a private infinity pool, lush gardens, and beautiful indoor-outdoor living spaces.",
    location: "Kauai, Hawaii",
    country: "United States",
    price: 400,
    rating: 4.98,
    beds: 3,
    baths: 2,
    guests: 6,
    host: {
      name: "Elena",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
      isSuperhost: true
    },
    amenities: ["Pool", "Kitchen", "Wifi", "Free parking", "Air conditioning", "BBQ grill", "Garden"],
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyb3BpY2FsJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb24lMjBob21lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByaXZhdGUlMjBwb29sfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMGJlZHJvb218ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1449247613801-ab06418e2861?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVzaCUyMHRyb3BpY2FsJTIwZ2FyZGVufGVufDB8fDB8fHww"
    ],
    category: "tropical"
  },
  {
    id: "6",
    title: "Ski-in/Ski-out Chalet",
    description: "Hit the slopes right from your doorstep in this luxurious ski chalet. Features include a hot tub, fireplace, and stunning mountain views.",
    location: "Park City, Utah",
    country: "United States",
    price: 380,
    rating: 4.9,
    beds: 4,
    baths: 3,
    guests: 8,
    host: {
      name: "Robert",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
      isSuperhost: false
    },
    amenities: ["Ski-in/Ski-out", "Hot tub", "Kitchen", "Wifi", "Fireplace", "Free parking", "Boot dryer"],
    images: [
      "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpJTIwY2hhbGV0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2tpfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613727798321-65e549a16852?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwY2FiaW58ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1608302881198-b8bf47f0d479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpJTIwY2hhbGV0JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2tpJTIwcmVzb3J0JTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D"
    ],
    category: "skiing"
  },
  {
    id: "7",
    title: "Historic Castle in Countryside",
    description: "Live like royalty in this beautifully restored castle. Features include period furnishings, spacious grounds, and modern amenities.",
    location: "Edinburgh",
    country: "Scotland",
    price: 650,
    rating: 4.96,
    beds: 6,
    baths: 4,
    guests: 12,
    host: {
      name: "William",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      isSuperhost: true
    },
    amenities: ["Historic building", "Kitchen", "Wifi", "Fireplace", "Garden", "Free parking", "Washer/Dryer"],
    images: [
      "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1624807434052-bb4774fdb81a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzdGxlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhc3RsZSUyMGludGVyaW9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1588806528565-3cfb65b1ac8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FzdGxlJTIwZ2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1575517111817-3f3f92EB5309?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhc3RsZSUyMGludGVyaW9yfGVufDB8fDB8fHww"
    ],
    category: "mansions"
  },
  {
    id: "8",
    title: "Private Island Retreat",
    description: "Your own private island paradise. Features include a beautiful beach, boat dock, and complete privacy.",
    location: "Florida Keys, Florida",
    country: "United States",
    price: 1200,
    rating: 4.99,
    beds: 5,
    baths: 4,
    guests: 10,
    host: {
      name: "Amanda",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      isSuperhost: true
    },
    amenities: ["Private island", "Beach", "Kitchen", "Wifi", "Boat dock", "Air conditioning", "Kayaks"],
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1552686268-62bceb5e65d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlzbGFuZCUyMGhvdXNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJpdmF0ZSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D",
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D",
      "https://images.unsplash.com/photo-1551524357-f087c2abad6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9hdCUyMGRvY2t8ZW58MHx8MHx8fDA%3D"
    ],
    category: "islands"
  }
];
