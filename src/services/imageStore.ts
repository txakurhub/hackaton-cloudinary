import { create } from "zustand";
import { CloudinaryImage } from "./gallery";

interface ImageStore {
  images: CloudinaryImage[];
  setImages: (images: CloudinaryImage[]) => void;
  addImage: (image: CloudinaryImage) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
  addImage: (image) => set((state) => ({ images: [...state.images, image] })),
}));
