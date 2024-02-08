import React from "react";
import { AppContext } from "./AppContext";
import UserState from "./UserContext";

import LocalizationState from "./LocalizationContext";
import DeviceTypeState from "./DeviceTypeContext";
import DashBoardState from "./DashBoardContext";


const AppProvider = (props) => (
  <AppContext.Provider value={{}}>
    <LocalizationState>
      <UserState>
        <DeviceTypeState>
          <DashBoardState>
            {props.children}
          </DashBoardState>
        </DeviceTypeState>
      </UserState>
    </LocalizationState>
  </AppContext.Provider>
);

export default AppProvider;
