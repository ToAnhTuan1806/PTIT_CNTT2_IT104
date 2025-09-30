import axios from "axios";
import React, { useState } from "react";

export default function UploadFileMultiple() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    const previewsArr = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewsArr);
  };

  const handleUpload = async () => {
    if (!files || files.length === 0) {
      alert("Vui lòng chọn file");
      return;
    }

    setIsLoading(true);
    const uploaded: string[] = [];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "upLoadData");
        formData.append("cloud_name", "drnolvz6g");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/drnolvz6g/image/upload",
          formData
        );

        if (res.status === 200) {
          uploaded.push(res.data.secure_url);
        }
      }
      setImageUrls(uploaded);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      {isLoading && <div className="loader">Đang tải ảnh...</div>}
      <input type="file" multiple onChange={handleChangeFile} />
      <button onClick={handleUpload}>Upload</button>
      <br /><br />

      <div style={{ display: "flex", gap: 10 }}>
        {previews.map((src, idx) => (
          <img key={idx} src={src} alt="preview" width={120} height={120} />
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        {imageUrls.map((url, idx) => (
          <img key={idx} src={url} alt="uploaded" width={150} />
        ))}
      </div>
    </div>
  );
}
