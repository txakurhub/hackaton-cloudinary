import { URL_BACK } from "../utils/constants";
import { useImageStore } from "./imageStore";

export interface CloudinaryImage {
  public_id: string;
  url: string;
}

export const getAllImages = async () => {
  const setImages = useImageStore.getState().setImages;

  try {
    const response = await fetch(`${URL_BACK}/images`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setImages(data as CloudinaryImage[]);
    return data as CloudinaryImage[];
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
