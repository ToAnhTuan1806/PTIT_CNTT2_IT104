// Custom hoook thay vi dung useDispatch va useSelecter

import { useDispatch } from "react-redux";
import type { AppDipatch, RootState } from "../stores";
import { useSelector } from "react-redux";

export const useAppDisPatch= useDispatch.withTypes<AppDipatch>()
export const useAppSelector= useSelector.withTypes<RootState>()