import React from 'react';
import {createStackNaviagtor} from 'react-nabigation-stack';
import BookDonate from '../screens/BookDonate';
import RecieverDetails from '../screens/RecieverDetails';

export const AppStackNavigator = createStackNaviagtor({
    BookDonateList: {
        screen: BookDonate,
        navigationOptions: {
        headerShown: false
     }
    },
    RecieverDetails: {
        screen: RecieverDetails,
        navigationOptions: {
            headerShown: false
        }
    },
    {initialRouteName: BookDonateList}
})