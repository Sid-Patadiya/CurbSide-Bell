import React, { createContext, useState, useEffect, useMemo } from 'react';
import Toast from 'react-native-toast-message';
import { io } from "socket.io-client";

import api from '../utils/api';
import secureStore from '../utils/secureStore';
import { BASE_URI } from '../../appConfig';

export const UserContext = createContext();

export default function UserState(props) {

    const controller = new AbortController();

    const [user, _setUser] = useState({});
    const [isLoggedIn, _setIsLoggedIn] = useState(undefined);
    const [isLoading, _setIsLoading] = useState(false);
    const [isUserInfoLoading, _setIsUserInfoLoading] = useState(false);

    const setUser = (fn) => {
        _setUser(fn);
    }

    const login = async (payload) => {
        /* must be called from a try-catch */
        const { data, status } = await api.post("account/login", payload);

        console.log('data', data)
        if (status === 200) {
            setUser(data);
            _setIsLoggedIn(true)
            secureStore.setUserData(data)
        } else {
            return data;
        }
    }


    const connectSocket = () => {
        if (!isLoggedIn) return;
        return io(`${BASE_URI}store`, {
            jsonp: false,
            transports: ["polling"],
            withCredentials: true,
        });
    };

    const socket = useMemo(() => {
        return connectSocket();
    }, [isLoggedIn]);

    useEffect(() => {
        if (!isLoggedIn) return;
        if (!socket) return;
        socket.on("disconnect", connectSocket);
        return () => {
            socket.off("disconnect", connectSocket);
        };
    }, [isLoggedIn, socket]);



    const logout = async () => {
        /* must be called from a try-catch */
        _setIsLoading(true);
        await api.post("account/logout");
        setUser(undefined);
        _setIsLoggedIn(false)
        secureStore.deleteCustomerToken()
        _setIsLoading(false);
    }

    const getUserInfo = async () => {

        const userData = await secureStore.getUserData();

        console.log('userData',userData)
        if (userData) {
            setUser(JSON.parse(userData));
            _setIsLoggedIn(true)
        }


    }



    useEffect(() => {
        async function f() {
        }
        f()
        return () => controller.abort();
    }, [])

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLoggedIn,
                login,
                isLoading,
                isUserInfoLoading,
                logout,
                socket,
                connectSocket,
                getUserInfo
            }}>
            {props.children}
        </UserContext.Provider>
    )
}
