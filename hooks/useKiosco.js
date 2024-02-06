import { useContext } from "react";
import KioscoContext from "../context/KioscoProvider";

export default function useKiosco() {
    return useContext(KioscoContext)
}