import { useState } from 'react';
import { cloudName, uploadPreset } from '../utils/constants';

interface CloudinaryWindow extends Window {
  cloudinary: {
    createUploadWidget: (
      options: CloudinaryWidgetOptions,
      callback: CloudinaryWidgetCallback
    ) => CloudinaryWidget;
  };
}

interface CloudinaryWidgetOptions {
  cloudName: string;
  uploadPreset: string;
  folder?: string;
  sources?: string[];
  multiple?: boolean;
  showCompletedButton: boolean;
}

type CloudinaryWidgetCallback = (error: Error | null, result: CloudinaryResult) => void;

interface CloudinaryResult {
  event: string;
  info?: {
    public_id: string;
    url: string;
  };
}

interface CloudinaryWidget {
  open: () => void;
}

/*

new CloudinaryImage('me/gen-bgr-fashion-2')
  .effect(generativeBackgroundReplace().prompt(prompts[0]));

const promts = [
  "Transform the background into a dark and eerie abandoned cemetery at dusk  Include cracked and weathered tombstones twisted leafless trees and a dense fog creeping along the ground The light of a full moon with a bluish and spectral hue illuminates the scene casting long and menacing shadows In the distance an old Gothic mansion looms with dark windows that seem to watch Add crows perched on the tombstones and cobwebs in the trees to enhance the feeling of abandonment and terror",
  "creepy yard with realistic skulls and lightnings",
  "Change the background to an abandoned cemetery at dusk",
  "Include cracked tombstones and twisted trees",
  "Add fog on the ground",
  "Use moonlight to create shadows",
  "Show a Gothic mansion in the distance",
  "Add crows on tombstones and cobwebs in trees",
]
import { generativeBackgroundReplace } from "@cloudinary/url-gen/actions/effect";


result.info:{
  "id": "uw-file3",
  "batchId": "uw-batch2",
  "asset_id": "6ba15e66eb0fa98347083db95d21b14a",
  "public_id": "hackaton-cloudinary/31775995_d19f5f",
  "version": 1728589044,
  "version_id": "f62e8a7e696f9bf9d4028eb43c96018e",
  "signature": "b2e366c27fd855df1b3ac098a713145ce906b7d6",
  "width": 278,
  "height": 400,
  "format": "jpg",
  "resource_type": "image",
  "created_at": "2024-10-10T19:37:24Z",
  "tags": [],
  "bytes": 100416,
  "type": "upload",
  "etag": "45c7bef10fbd22c83b209705489c1647",
  "placeholder": false,
  "url": "http://res.cloudinary.com/ddkurzft6/image/upload/v1728589044/hackaton-cloudinary/31775995_d19f5f.jpg",
  "secure_url": "https://res.cloudinary.com/ddkurzft6/image/upload/v1728589044/hackaton-cloudinary/31775995_d19f5f.jpg",
  "folder": "hackaton-cloudinary",
  "access_mode": "public",
  "existing": false,
  "original_filename": "31775995",
  "path": "v1728589044/hackaton-cloudinary/31775995_d19f5f.jpg",
  "thumbnail_url": "https://res.cloudinary.com/ddkurzft6/image/upload/c_limit,h_60,w_90/v1728589044/hackaton-cloudinary/31775995_d19f5f.jpg"
}

*/


const ImageUploader: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const uploadWidget = () => {
    const myWidget = ((window as unknown) as CloudinaryWindow).cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        folder: uploadPreset,
        sources: ['local', 'url', 'camera'],
        multiple: false,
        showCompletedButton: true

      },
      (error: Error | null, result: CloudinaryResult) => {
        if (!error && result && result.event === "success") {
          console.log("result:::::", result)
          setIsLoading(false)
          console.log('Done! Here is the image info: ', result.info);
          const transformedUrl = `https://res.cloudinary.com/${cloudName}/image/upload/e_vignette,c_scale,w_300/${result.info?.public_id}.jpg`;
          console.log('Transformed Image URL:', transformedUrl);
        }
      }
    );
    myWidget.open();
  };

  return (
    <div>
      {
        isLoading ? <p className='animate-pulse bg-blue-300 text-white'>Loading...</p> :
          <button onClick={uploadWidget} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload Image
          </button>
      }
    </div>
  );
};

export default ImageUploader;