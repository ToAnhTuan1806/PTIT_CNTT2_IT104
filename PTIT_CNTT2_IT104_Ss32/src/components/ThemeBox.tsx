import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/reducers";
import { toggleTheme } from "../store/reducers/themeReducer";

export default function ThemeBox() {
  const dark = useSelector((s: RootState) => s.theme.dark);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: 250,
        height: 150,
        marginTop: 10,
        border: "1px solid #000",
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",

      }}>
      <label>
        <input
          type="checkbox"
          checked={dark}
          onChange={() => dispatch(toggleTheme())}
        />
        {dark ? "Tối" : "Sáng"}
      </label>
    </div>
  );
}
