import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PRState } from "./payroll.reducer";

export const FeatureKey = 'payrollVariable';

export const selectFeature = createFeatureSelector<PRState>(FeatureKey);

export const selectSalary = createSelector(
    selectFeature,
    (state: PRState) => state.salary
);