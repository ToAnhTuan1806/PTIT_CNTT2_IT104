// src/components/RandomNumber.tsx
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/reducers";
import { addRandom } from "../store/reducers/randomReducer";

export default function RandomNumber() {
  const numbers = useSelector((s: RootState) => s.random.numbers);
  const dispatch = useDispatch();

  const handleGenerate = () => {
    const value = Math.floor(Math.random() * 100);
    dispatch(addRandom(value));
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <p>{JSON.stringify(numbers)}</p>
      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
}
