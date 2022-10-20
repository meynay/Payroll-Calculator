import { createAction, props} from "@ngrx/store";
import { Person } from "../models/person";

export const PayrollAction = createAction(
    '[Service] Handle Calculation',
    props<{ person:Person; Config: any }>()
)