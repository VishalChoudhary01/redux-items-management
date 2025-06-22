// ItemSlice.js
import { createSlice } from '@reduxjs/toolkit';

const defaultItems = [
  {
    id: 'item-1',
    name: 'Classic T-Shirt',
    type: 'Shirt',
    description: 'A comfortable cotton t-shirt for everyday wear. Made from high-quality materials that ensure durability and softness.',
    coverImage: '/products/apple watch.jpg',
    images: ['/products/apple watch.jpg', '/products/Avita bag.jpg']
  },
  {
    id: 'item-2',
    name: 'Running Shoes',
    type: 'Shoes',
    description: 'Lightweight running shoes for optimal performance. Features cushioning technology for impact protection.',
    coverImage: '/products/Avita bag.jpg',
    images: ['/products/apple watch.jpg', '/products/Avita bag.jpg', '/products/apple watch.jpg']
  },
  
];

const initialState = {
  items: defaultItems, 
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = {
        ...action.payload,
        coverImage: action.payload.coverImage ? URL.createObjectURL(action.payload.coverImage) : '',
        images: action.payload.images.map(file => URL.createObjectURL(file))
      };
      state.items.push(item);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, setItems } = itemSlice.actions;
export default itemSlice.reducer;