
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Login from './screen/Login';
import Register from './screen/Register';
import ForgotPassword from './screen/ForgotPassword/ForgotPassword';
import ForgotPassword2 from './screen/ForgotPassword/ForgotPassword2';
import GotoHomePage from './screen/ForgotPassword/GotoHomePage';
import ResetPassword from './screen/ForgotPassword/ResetPassword';
import OTP from './screen/ForgotPassword/OTP';

const UserNavigation = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='ForgotPassword2' component={ForgotPassword2} />
            <Stack.Screen name='GotoHomePage' component={GotoHomePage} />
            <Stack.Screen name='ResetPassword' component={ResetPassword} />
            <Stack.Screen name='OTP' component={OTP} />
        </Stack.Navigator>
    )
}

export default UserNavigation

