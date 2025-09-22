import { createStore } from "redux";
import { rootReducer } from "./reducers";

const STORAGE_KEY = "ShoppingCart";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;

    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return { cart: parsed };
    }
    if (parsed && Array.isArray(parsed.cart)) {
      return parsed;
    }
    return undefined;
  } catch {
    return undefined;
  }
}

function saveState(state: any) {
  try {
    const toSave = { cart: state.cart };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {}
}

const preload = loadState();
export const store = createStore(rootReducer, preload);
store.subscribe(() => saveState(store.getState()));
