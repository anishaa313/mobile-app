import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Header from '../shared/header';
import React from 'react';
const screens={
    Home:{
        screen:Home,
        navigationOptions:({navigation}) => {
            return{
                headerTitle:() =><Header navigation={navigation} title='About Us'/>,
            }
        }
    }
}
const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'#800000',
            height:70
        }
    }
});
export default HomeStack;