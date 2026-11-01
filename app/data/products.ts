export type Product = {
  id: string;
  name: string;
  category: string;
  form: string;
  strength: string;
  description: string;
  image: string;
  prescription: boolean;
};

// Sample data only. Product names are generic and do not represent real listings.
export const products: Product[] = [
  {
    id: "analgesic-500",
    name: "Paracetamol 500 mg",
    category: "Pain Relief",
    form: "Tablet",
    strength: "500 mg",
    description:
      "Everyday analgesic and antipyretic, supplied in blister packs of 20.",
    image: "/images/blister-blue.jpg",
    prescription: false,
  },
  {
    id: "antibiotic-250",
    name: "Amoxicillin 250 mg",
    category: "Antibiotics",
    form: "Capsule",
    strength: "250 mg",
    description:
      "Broad-spectrum penicillin antibiotic for bacterial infections.",
    image: "/images/orange-capsules.jpg",
    prescription: true,
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D3 1000 IU",
    category: "Vitamins",
    form: "Softgel",
    strength: "1000 IU",
    description: "Daily supplement supporting bone and immune health.",
    image: "/images/mixed-pills.jpg",
    prescription: false,
  },
  {
    id: "antihypertensive-5",
    name: "Amlodipine 5 mg",
    category: "Cardiovascular",
    form: "Tablet",
    strength: "5 mg",
    description: "Calcium channel blocker used for blood pressure management.",
    image: "/images/hero.jpg",
    prescription: true,
  },
  {
    id: "antacid-20",
    name: "Omeprazole 20 mg",
    category: "Digestive Health",
    form: "Capsule",
    strength: "20 mg",
    description: "Proton pump inhibitor for acid reflux and heartburn.",
    image: "/images/orange-capsules.jpg",
    prescription: false,
  },
  {
    id: "antidiabetic-500",
    name: "Metformin 500 mg",
    category: "Diabetes Care",
    form: "Tablet",
    strength: "500 mg",
    description: "First-line oral therapy for type 2 diabetes.",
    image: "/images/blister-blue.jpg",
    prescription: true,
  },
  {
    id: "antihistamine-10",
    name: "Cetirizine 10 mg",
    category: "Allergy",
    form: "Tablet",
    strength: "10 mg",
    description: "Non-drowsy antihistamine for seasonal allergy relief.",
    image: "/images/hero.jpg",
    prescription: false,
  },
  {
    id: "multivitamin",
    name: "Daily Multivitamin",
    category: "Vitamins",
    form: "Tablet",
    strength: "Multi",
    description: "Balanced blend of essential vitamins and minerals.",
    image: "/images/mixed-pills.jpg",
    prescription: false,
  },
];

export const categories = Array.from(
  new Set(products.map((p) => p.category)),
).sort();
