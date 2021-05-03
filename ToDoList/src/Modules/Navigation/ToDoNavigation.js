import React from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import SettingsScreen from "./Screens/SettingsScreen";
import ToDoScreen from './Screens/ToDoScreen';
import AddNewNote from './Screens/AddNewNote';
import SettingsIcon from './SettingsIcon';

const ToDoStack = createStackNavigator();

const ToDoNavigation = () => {
    console.log('todoNavigation');
    return (
        <ToDoStack.Navigator>
            <ToDoStack.Screen
                name="todo-screen"
                component={ToDoScreen}
                options={{
                    title: "ToDo List",
                    headerStyle: {
                        backgroundColor: '#189ad3',
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerRight: SettingsIcon,
                }}
            />
            <ToDoStack.Screen
                name="settings-screen"
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    headerStyle: {
                        backgroundColor: '#189ad3',
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                    }
                }}
            />
            <ToDoStack.Screen 
                name="addnote-screen"
                component={AddNewNote}
            />
        </ToDoStack.Navigator>
    );
};

export default ToDoNavigation;
