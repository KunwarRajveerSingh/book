import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BookDonate  from  '../screens/BookDonate';
import BookRequest from  '../screens/BookRequest';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks: {
        screen: BookDonate,
        navigationOptions: {
            tabBarIcon: <Image src={require("../assets/request-list.png")} style = {{width: 20, height: 20}}/>,
            tabBarLabel: "Donate Books",
        }
    },

    RequestBooks: {
        screen: BookRequest,
        navigationOptions: {
            tabBarIcon: <Image src={require("../assets/request-book.png")} style = {{width: 20, height: 20}}/>,
            tabBarLabel: "Book Requests",
        }
    },
});
 
