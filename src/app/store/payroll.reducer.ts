import { createReducer, on } from "@ngrx/store";
import { PayrollAction } from "./payroll.action";
import { Salary } from "../models/salary";
import { Bonus } from "../bonus-salary";
import { CalculateHighIndexTax } from "../calculate-high-index-tax";

export interface PRState {
    salary: Salary;
};

export const initialState : Salary = {
    base: 0,
    bonus: 0,
    gross: 0,
    tax: 0,
    highTax: 0,
    totalTax: 0,
    net: 0
};

export const initalPRState: PRState = {
    salary: initialState
};

export const PayrollReducer = createReducer(
    initalPRState,
    on(PayrollAction, (state, { person, Config }) => {
        const base = Config.baseSalary[person.job];
        const bonus = base * Bonus(person.years);
        const gross = base + bonus;
        const tax = (gross > 36000) ? 36000 * Config.taxRate[person.year][person.city] : gross * Config.taxRate[person.year][person.city]
        const highTax = CalculateHighIndexTax(gross);
        const totalTax = tax + highTax;
        const net = gross - totalTax;
        return {
            ...state,
        salary: {
            base,
            bonus,
            gross,
            tax,
            highTax,
            totalTax,
            net
        }
        }
        
    })
)