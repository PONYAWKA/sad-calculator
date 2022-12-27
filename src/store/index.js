import { createStore } from "redux";
import { CalculatorReduser } from "@/store/reducers/calculatorReduser";

export const store = createStore(CalculatorReduser);
