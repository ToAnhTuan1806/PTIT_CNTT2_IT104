import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../stores";
import { setLanguage } from "../slice/languageSlice";



export default function ChangeLanguage() {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "20px" }}>
      <select
        value={language}
        onChange={(e) => dispatch(setLanguage(e.target.value as "en" | "vi"))}
        style={{ padding: "5px"}}
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <p>
        {language === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}
      </p>
    </div>
  );
}