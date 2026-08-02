import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

/**
 * Uploads a base64 data URI (or remote URL) to Cloudinary and returns
 * the secure URL, resource type, bytes, and an auto-generated thumbnail.
 */
export async function uploadToCloudinary(fileDataUri: string, folder = "myhub") {
  const result = await cloudinary.uploader.upload(fileDataUri, {
    folder,
    resource_type: "auto",
    max_bytes: 500 * 1024 * 1024, // 500MB cap per spec
  });

  return {
    url: result.secure_url,
    thumbnailUrl:
      result.resource_type === "image" || result.resource_type === "video"
        ? cloudinary.url(result.public_id, {
            resource_type: result.resource_type,
            width: 300,
            height: 300,
            crop: "fill",
            format: result.resource_type === "video" ? "jpg" : undefined,
          })
        : undefined,
    sizeBytes: result.bytes as number,
    publicId: result.public_id as string,
    resourceType: result.resource_type as string,
    format: result.format as string,
  };
}
