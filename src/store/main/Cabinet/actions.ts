import { CabinetActionsTypes } from "./types";
import { CabinetActions } from "../../../constants/ActionNames";

export const UpdateCabinet = (name: string): CabinetActionsTypes => {
  return {
    type: CabinetActions.UPDATE,
    payload: name
  };
};

export type UpdateCabinetType = typeof UpdateCabinet;
