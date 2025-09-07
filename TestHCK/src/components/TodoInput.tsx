import React, { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  const submit = () => {
    const t = text.trim();
    if (!t) return;
    onAdd(t);
    setText("");
  };

  return (
    <div className="inputRow">
      <input
        aria-label="Thêm công việc"
        placeholder="Add to the todo list..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button className="addBtn" onClick={submit}>
        ADD ITEM
      </button>
    </div>
  );
}
