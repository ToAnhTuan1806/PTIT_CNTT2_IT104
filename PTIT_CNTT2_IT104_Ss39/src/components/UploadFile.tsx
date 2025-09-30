import axios from 'axios';
import React, { useState } from 'react'

export default function UploadFile() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = e.target.files?.[0];
    if (fileObj) {
      setFile(fileObj);
      setPreview(URL.createObjectURL(fileObj));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Vui lòng chọn file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upLoadData");
    formData.append("cloud_name", "drnolvz6g");

    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/drnolvz6g/image/upload",
        formData
      );

      if (res.status === 200) {
        setImageUrl(res.data.secure_url);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      {isLoading && <div className="loader">Đang tải ảnh...</div>}

      <input type="file" onChange={handleChangeFile} />
      <button onClick={handleUpload}>Upload</button>

      <br /><br />

      {preview && (
        <div>
          <p>Preview:</p>
          <img src={preview} alt="preview" width={200} height={200} />
        </div>
      )}

      {imageUrl && (
        <div>
          <p>Uploaded:</p>
          <img src={imageUrl} alt="uploaded" width={200} height={200} />
        </div>
      )}
    </div>
  );
}
