import { CompanyData } from "./models/models";

export interface AppState {
  readonly company: CompanyData[];
}