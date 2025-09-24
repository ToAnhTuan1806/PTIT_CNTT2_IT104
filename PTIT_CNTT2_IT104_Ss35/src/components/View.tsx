import React from "react";
import { useAppDisPatch, useAppSelector } from "../hooks/useCustomeRedux";
import { toggleMode } from "../slice/viewSlice";

export default function View() {
  const dispatch = useAppDisPatch();
  const mode = useAppSelector((s) => s.view.mode);
  const isList = mode === "list";

  const items = [1, 2, 3, 4];

  return (
     <div style={{ maxWidth: 640, margin: "28px",}}>
      <button
        onClick={() => dispatch(toggleMode())}
        style={{
          padding: "6px 14px",
          border: "1px solid #d1d5db",
          borderRadius: 8,
          background: "#fff",
          marginBottom: 16,
        }}
      >
        {isList ? "List mode" : "Grid mode"}
      </button>

      <div
        style={
          isList
            ? { display: "flex", flexDirection: "column", gap: 16 }
            : {
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "center",
              }
        }
      >
        {items.map((n) => (
          <div
            key={n}
            style={{
              background: "#ef4444",
              color: "#fff",
              textAlign: "center",
              padding: "12px 0",
              width: isList ? "100%" : 100,
            }}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
