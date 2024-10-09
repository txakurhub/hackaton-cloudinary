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
}

type CloudinaryWidgetCallback = (error: Error | null, result: CloudinaryResult) => void;

interface CloudinaryResult {
  event: string;
  info?: {
    public_id: string;
    url: string;
    // Añade aquí otras propiedades que pueda tener info
  };
}

interface CloudinaryWidget {
  open: () => void;
}

/* promts exitosos

import { generativeBackgroundReplace } from "@cloudinary/url-gen/actions/effect";

new CloudinaryImage('me/gen-bgr-fashion-2')
	.effect(generativeBackgroundReplace().prompt("creepy yard with realistic skulls and lightnings
"));

"Transform the background into a dark and eerie abandoned cemetery at dusk  Include cracked and weathered tombstones twisted leafless trees and a dense fog creeping along the ground The light of a full moon with a bluish and spectral hue illuminates the scene casting long and menacing shadows In the distance an old Gothic mansion looms with dark windows that seem to watch Add crows perched on the tombstones and cobwebs in the trees to enhance the feeling of abandonment and terror"

const prompt1 = "Change the background to an abandoned cemetery at dusk"
const prompt2 = "Include cracked tombstones and twisted trees"
const prompt3 = "Add fog on the ground"
const prompt4 = "Use moonlight to create shadows"
const prompt5 = "Show a Gothic mansion in the distance"
const prompt6 = "Add crows on tombstones and cobwebs in trees"

*/


const ImageUploader: React.FC = () => {
  const uploadWidget = () => {
    const myWidget = ((window as unknown) as CloudinaryWindow).cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error: Error | null, result: CloudinaryResult) => {
        console.log(typeof result)
        console.log(typeof error)
        if (!error && result && result.event === "success") {
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
      <button onClick={uploadWidget} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploader;