import { Cloudinary } from "@cloudinary/url-gen";
import { apiKey, apiSecret, cloudName } from "./utils/constants";

const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName,
    apiKey: apiKey,
    apiSecret: apiSecret,
  },
});

export default cld;
