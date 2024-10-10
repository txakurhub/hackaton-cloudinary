import React, { useEffect } from 'react';
import { CloudinaryImage, getAllImages } from '../services/gallery';
import { useImageStore } from '../services/imageStore';

const ImageGallery: React.FC = () => {
    const images = useImageStore((state) => state.images);

    useEffect(() => {
        getAllImages();
    }, []);

    return (
        <div>
            {images.map((image: CloudinaryImage) => (
                <img key={image.public_id} src={image.url} alt={image.public_id} />
            ))}
        </div>
    );
};

export default ImageGallery;