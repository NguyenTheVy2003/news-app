

import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToken = async (key,token) => {
    try {
        await AsyncStorage.setItem(key,token)
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getToken = async (key) => {
    try {
        const token = await AsyncStorage.getItem(key) 
        return token
    } catch (error) {
        console.log(error)
        throw error
    }
}