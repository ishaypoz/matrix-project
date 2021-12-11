import { Action, createReducer, on } from '@ngrx/store'
import * as CompanyActions from './../actions/company.actions'
import { CompanyData } from '../models/models'

const initialState: CompanyData[] = [];

const reducer = createReducer(initialState,
    on(CompanyActions.AddCompanyData, (state, action) => {
        return [...state, action.payload];
    }),
    on(CompanyActions.ResetCompanyData, (state, action) => {
        state = [];
        return state;
    })
);

export function CompanyReducer(state: CompanyData[] | undefined | [], action: Action) {
  return reducer(state, action);
}