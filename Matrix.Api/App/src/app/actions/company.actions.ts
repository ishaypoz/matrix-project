import { createAction, props } from "@ngrx/store";
import { CompanyData } from  '../models/models';

export const AddCompanyData = createAction(
  '[Company] Add Company Data',
  props<{payload: CompanyData}>()
);
export const ResetCompanyData = createAction(
    '[Company] Reset Company Data',
    props<{payload: null}>()
  );