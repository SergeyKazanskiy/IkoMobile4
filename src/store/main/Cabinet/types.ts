import { CabinetActionEnum } from "../../actionEnums";
import { ICabinet } from "../../models/ICabinet";
import { ISection } from "../../models/ISection";

export interface CabinetStateType {
  sections: ISection[];
  name: string;
}

interface UpdateCabinetAction {
  type: CabinetActionEnum.UPDATE_CABINET;
  payload: string;
}

interface DeleteCabinetAction {
  type: CabinetActionEnum.UPDATE_CABINET;
  payload: string;
}

export type CabinetActionsTypes = UpdateCabinetAction | DeleteCabinetAction;
