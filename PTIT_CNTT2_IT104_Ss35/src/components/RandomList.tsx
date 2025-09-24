import React from "react";
import { useAppDisPatch, useAppSelector } from "../hooks/useCustomeRedux";
import { generate } from "../slice/randomListSlice";

const RandomList: React.FC = () => {
  const dispatch = useAppDisPatch();
  const items = useAppSelector((s) => s.random.items);

  return (
    <div>
      <h2>List number: {JSON.stringify(items)}</h2>

      <button onClick={() => dispatch(generate())}>Random number</button>
    </div>
  );
};

export default RandomList;
