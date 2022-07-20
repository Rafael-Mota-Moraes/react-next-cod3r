import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function useAppData() {
  const context = useContext(AppContext);
  return context;
}
