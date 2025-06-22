// ItemSlice.js
import { createSlice } from '@reduxjs/toolkit';

const defaultItems = [
    {
        id: 'item-1',
        name: 'Apple Watch',
        type: 'Electronics',
        description: 'The Apple Watch is a versatile smartwatch that helps you stay connected, active, and healthy. It features fitness tracking, heart rate monitoring, notifications, and customizable watch faces, all in a sleek and stylish design.',
        coverImage: '/products/apple watch.jpg',
        images: ['/products/apple watch2.jpg', '/products/apple watch3.jpg','/products/apple watch4.jpg','/products/apple watch5.jpg']
    },
    {
        id: 'item-2',
        name: 'Play Station 5',
        type: 'Electronics',
        description: 'The PlayStation 5 is a next-generation gaming console offering lightning-fast load times, stunning graphics, and immersive gameplay experiences. It features a custom SSD, advanced haptics, and a wide library of exclusive games.',
        coverImage: '/products/play station.jpg',
        images: ['/products/play station2.jpg', '/products/play station3.jpg', '/products/play station4.jpg','/products/play station5.jpg']
    },
    {
        id: 'item-3',
        name: 'Gym Bottle',
        type: 'Fitness',
        description: 'The Gym Bottle is a durable and lightweight water bottle designed for active lifestyles. It features a leak-proof lid, easy-grip design, and is perfect for staying hydrated during workouts, sports, or daily activities.',
        coverImage: '/products/bottle.jpg',
        images: ['/products/bottle2.jpg', '/products/bottle3.jpg', '/products/bottle4.jpg']
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