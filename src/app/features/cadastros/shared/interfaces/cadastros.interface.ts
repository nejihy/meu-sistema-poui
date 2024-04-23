import { Cadastro } from "./cadastro.interface";

export interface Cadastros {
  items: Array<Cadastro>;
  hasNext: boolean;
  remainingRecords: number;
}
