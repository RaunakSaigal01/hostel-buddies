const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function main() {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    console.log("✅ Connected to MySQL!");

    const imagesDir = path.join(__dirname, "images");
    const files = fs.readdirSync(imagesDir);

    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      const ext = path.extname(file).toLowerCase();

      if (![".jpg", ".jpeg", ".png", ".webp", ".mp4"].includes(ext)) {
        console.log(`⏭️ Skipping unsupported file: ${file}`);
        continue;
      }

      // ✅ THIS IS WHAT YOU WANT
      const baseName = path.parse(file).name; // GINFO
      const block_name = baseName[0] + " Block";
      const isVideo = ext === ".mp4";

      console.log(`📤 Uploading: ${file} → saved as: ${baseName}`);

      const result = await cloudinary.uploader.upload(filePath, {
        folder: "hostel_media",
        public_id: baseName,     // ✅ NO extension
        resource_type: isVideo ? "video" : "image",
        overwrite: true,
      });

      await db.execute(
        "INSERT INTO images (block_name, file_name, image_url) VALUES (?, ?, ?) \
         ON DUPLICATE KEY UPDATE image_url = VALUES(image_url)",
        [block_name, baseName, result.secure_url]
      );

      console.log(`✅ Stored as ${baseName}`);
    }

    console.log("🎉 Done! Files saved without extensions.");
    await db.end();
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

main();
