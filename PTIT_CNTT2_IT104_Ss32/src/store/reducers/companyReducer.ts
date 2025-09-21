export interface CompanyState {
  name: string;
}
const initialState: CompanyState = {
  name: "Rikkei Academy",
};
export const SET_COMPANY = "SET_COMPANY";
export const setCompany = () => ({ type: SET_COMPANY });
type CompanyAction = ReturnType<typeof setCompany>;

export const companyReducer = (
  state = initialState,
  action: CompanyAction
): CompanyState => {
  switch (action.type) {
    case SET_COMPANY:
      return {
        name:
          state.name === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy",
      };
    default:
      return state;
  }
};
