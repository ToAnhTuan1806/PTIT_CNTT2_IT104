import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../stores";

export const useAppDisPatch= useDispatch.withTypes<AppDispatch>()
export const useAppSelector= useSelector.withTypes<RootState>()