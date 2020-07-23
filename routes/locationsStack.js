import {createStackNavigator} from 'react-navigation-stack';
import Locations from '../screens/locations';
import Header from '../shared/header';
import React from 'react';
const screens={
    Locations:{
        screen:Locations,
        navigationOptions:({navigation}) => {
            return{
                headerTitle:() =><Header navigation={navigation} title='Locations'/>,
            }
        }
    },
    
}
const LocationsStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'#800000',
            height:70
        }
    }
});
export default LocationsStack;