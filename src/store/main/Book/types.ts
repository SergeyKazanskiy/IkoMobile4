import { CabinetActionEnum } from "../../actionEnums";

export interface IBook {
  id: number;
  name: string;
  title: string;
}

interface UpdateCabinetAction {
  type: CabinetActionEnum.UPDATE_CABINET;
  payload: string;
}

interface DeleteCabinetAction {
  type: CabinetActionEnum.UPDATE_CABINET;
  payload: string;
}

export type CabinetActions = UpdateCabinetAction | DeleteCabinetAction;
