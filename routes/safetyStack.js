import {createStackNavigator} from 'react-navigation-stack';
import Safety from '../screens/safety';
import Header from '../shared/header';
import React from 'react';
const screens={
    Safety:{
        screen:Safety,
        navigationOptions:({navigation}) => {
            return{
                headerTitle:() =><Header navigation={navigation} title='Safety Instructions'/>,
            }
        }
    },
    
}
const SafetyStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'#800000',
            height:70
        }
    }
});
export default SafetyStack;