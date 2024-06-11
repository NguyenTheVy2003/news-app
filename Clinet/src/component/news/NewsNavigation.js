import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewDetail from '../../Demo/NewDetail';
import Detail from './Screen/Detail';
import EditProfile from './Screen/EditProfile';
import Explore from './Screen/Explore';
import Home from './Screen/Home';
import Insert from './Screen/Insert';
import Notification from './Screen/Notification';
import Trending from './Screen/Trending';
const Stack = createNativeStackNavigator();
const Bottom = createMaterialBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      z
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="NewDetail" component={NewDetail}></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
      <Stack.Screen name="Trending" component={Trending}></Stack.Screen>
      <Stack.Screen name="Insert" component={Insert}></Stack.Screen>
      <Stack.Screen name="Notification" component={Notification}></Stack.Screen>
    </Stack.Navigator>
  );
};
const NewsNavigation = () => {
  return (
    <Bottom.Navigator
      inactiveColor="#4E4B66"
      activeColor="#1877F2"
      screenOptions={{headerShown: false}}>
      <Bottom.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={!focused ? '#4E4B66' : '#1877F2'}
              size={26}
            />
          ),
        }}></Bottom.Screen>
      <Bottom.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'compass' : 'compass-outline'}
              color={!focused ? '#4E4B66' : '#1877F2'}
              size={26}
            />
          ),
        }}></Bottom.Screen>
      <Bottom.Screen
        name="BookMark"
        component={Insert}
        options={{
          tabBarLabel: 'BookMark',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'bookmark' : 'bookmark-outline'}
              color={!focused ? '#4E4B66' : '#1877F2'}
              size={26}
            />
          ),
        }}></Bottom.Screen>

      <Bottom.Screen
        name="Profile"
        component={EditProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'account-circle' : 'account-circle-outline'}
              color={!focused ? '#4E4B66' : '#1877F2'}
              size={26}
            />
          ),
        }}></Bottom.Screen>
    </Bottom.Navigator>
  );
};

export default NewsNavigation;
const styles = StyleSheet.create({});
