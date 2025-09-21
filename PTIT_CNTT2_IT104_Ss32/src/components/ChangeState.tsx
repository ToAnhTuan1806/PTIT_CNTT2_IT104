import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/reducers";
import { setCompany } from "../store/reducers/companyReducer";

export default function ChangeState() {
  const company = useSelector((s: RootState) => s.company.name);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Change State</h2>
      <h3>{company}</h3>
      <button onClick={() => dispatch(setCompany())}>Change state</button>
    </div>
  );
}
