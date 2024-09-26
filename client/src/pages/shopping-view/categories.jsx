// categories.js
import { Baby, Bitcoin, Boxes, Codepen, Flower, Footprints, Framer, HeartHandshake, MemoryStick, MessageCircleHeart, Shirt, ShoppingCartIcon, Watch } from 'lucide-react';

const categories = [
  {
    name: 'Men',
    icon: <Shirt></Shirt>,
  },
  {
    name: 'Women',
    icon: <MessageCircleHeart></MessageCircleHeart>,
  },
  {
    name: 'Kids',
    icon:<Baby></Baby>,
  },
  {
    name: 'Accessories',
    icon: <Watch></Watch>,
  },
  {
    name: 'Footwear',
    icon: <Footprints></Footprints>,
  },
];
const brands = [
  { id: "nike", label: "Nike", icon:<Boxes></Boxes> },
  { id: "adidas", label: "Adidas", icon: <ShoppingCartIcon></ShoppingCartIcon> },
  { id: "puma", label: "Puma", icon: <Bitcoin></Bitcoin> },
  { id: "levi", label: "Levi's", icon: <Flower></Flower>},
  { id: "zara", label: "Zara", icon:<HeartHandshake></HeartHandshake> },
  { id: "h&m", label: "H&M", icon: <MemoryStick></MemoryStick> },
];

export { categories, brands };