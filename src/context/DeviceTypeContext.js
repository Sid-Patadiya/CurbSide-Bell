import React, { createContext, useState, useEffect } from 'react';
import { DeviceType, getDeviceTypeAsync, } from "expo-device";


export const DeviceTypeContext = createContext();

const DeviceTypeState = (props) => {


    const deviceTypeMap = {
        [DeviceType.PHONE]: "phone",
        [DeviceType.TABLET]: "tablet",
    };

    const [deviceType, setDeviceType] = useState(null)

    useEffect(() => {
        async function f() {
            try {
                const device = await getDeviceTypeAsync();
                const deviceTypeName = deviceTypeMap[device] || "unknown";
                setDeviceType(deviceTypeName)
            } catch (error) {
                console.error("Error getting device type:", error);
                return "unknown";
            }
        }
        f()
    }, [])

    return (
        <DeviceTypeContext.Provider
            value={{
                deviceType,
                setDeviceType
            }}>
            {props.children}
        </DeviceTypeContext.Provider>
    )

}

export default DeviceTypeState;