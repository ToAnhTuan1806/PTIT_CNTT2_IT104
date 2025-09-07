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
    <div className="grid grid-cols-[1fr_140px] gap-3">
      <input
        placeholder="Add to the todo list..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        className="w-full rounded-[4px] border-2 border-[#f6c2c8] bg-[#ffeef0] px-4 py-3 text-[#d34b5d] placeholder-[#d77a86] outline-none"
      />
      <button
        onClick={submit}
        className="rounded-[4px] border-2 border-[#f6c2c8] text-white font-semibold text-xs tracking-wide hover:bg-white hover:text-[#d34b5d] transition-colors"
      >
        ADD ITEM
      </button>
    </div>
  );
}
