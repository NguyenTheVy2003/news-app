import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useContext, createContext } from 'react'

// khai báo context dành cho app
const AppContext = createContext();
// khai báo context provider dành cho app
const AppProvider = (props) => {
    const { children } = props;
    const [count, setCount] = useState(10);
    return (
        <AppContext.Provider value={{ count, setCount }}>
            {children}
        </AppContext.Provider>
    )
}
// khai báo context consumer dành cho app
const ManHinh7_1 = (props) => {
    const { count } = useContext(AppContext);
    return (
        <View>
            <Text style={{ fontSize: 40 }}>{count}</Text>
        </View>
    )
}
// khai báo context consumer dành cho app
const ManHinh7_2 = (props) => {
    const { count, setCount } = useContext(AppContext);
    return (
        <View>
            <Button title="Tăng"
                onPress={() => setCount(count + 1)} />
        </View>
    )
}

const ManHinh7 = () => {
    return (
        <AppProvider>
            <ManHinh7_1 />
            <ManHinh7_2 />
        </AppProvider>
    )
}

export default ManHinh7

const styles = StyleSheet.create({})