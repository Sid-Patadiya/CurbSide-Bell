import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { LocalizationContext } from "./LocalizationContext";
import { DeviceTypeContext } from "./DeviceTypeContext";
import { DashBoardContext } from "./DashBoardContext";




export const AppContext = createContext();

const useAppState = () => ({
  App: useContext(AppContext),
  User: useContext(UserContext),
  Localization: useContext(LocalizationContext),
  DeviceType: useContext(DeviceTypeContext),
  DashBoard: useContext(DashBoardContext)
});
export default useAppState;
