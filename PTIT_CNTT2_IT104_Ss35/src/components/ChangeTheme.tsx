import React from "react";
import { useAppSelector, useAppDisPatch } from "../hooks/useCustomeRedux";
import { toggleTheme } from "../slice/themeSlice";

export default function ChangeTheme() {
  const dispatch = useAppDisPatch();
  const mode = useAppSelector((s) => s.theme.mode);
  const isLight = mode === "light";

  return (
    <div
      style={{
        width: 200,
        height: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: isLight ? "#fff" : "#111",
        color: isLight ? "#000" : "#fff",
        border: "1px solid #94a3b8",
      }}
    >
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          border: "1px solid #94a3b8",
          cursor: "pointer",
          background: isLight ? "#fff" : "000",
          color: isLight ? "#000" : "#fff",
        }}
      >
        <p>
        {isLight ? "Light" : "Dark"}
      </p>
      </button>
    </div>
  );
}
