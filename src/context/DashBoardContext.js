import React, { createContext, useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';

import api from '../utils/api';

export const DashBoardContext = createContext();

export default function DashBoardState(props) {


    const [dashBoardData, _setDashBoardData] = useState({});

    const [chatHistory, setChatHistory] = useState(null)


    const getDashBoardData = async (payload) => {
        /* must be called from a try-catch */
        const { data, status } = await api.get("store")
        if (status === 200) {
            _setDashBoardData(data);
        } else {
            return data;
        }
    }

    const getChatHistory = async (pingId) => {
        /* must be called from a try-catch */
        const { data, status } = await api.get(`store/chats/${pingId}`)
        if (status === 200) {
            setChatHistory(data);
        } else {
            return data;
        }
    }





    return (
        <DashBoardContext.Provider
            value={{
                dashBoardData,
                getDashBoardData,
                chatHistory,
                setChatHistory,
                getChatHistory,

            }}>
            {props.children}
        </DashBoardContext.Provider>
    )
}
