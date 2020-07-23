import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create(
    {
        container:{
            backgroundColor:"black",
            flex:1,
            padding:20
        },
        titletext:{
            fontSize:45,
            color:"white",
            textAlign:"center",
            fontFamily:'sans-serif-light',
            paddingBottom: 15,
            
        },
        jktext:{
            backgroundColor:'white',
            color:'black',
            fontSize:35,
            fontFamily:'sans-serif-light',
            textAlign:'center',
            fontWeight:"bold"
        },
        abouttext:{
            color:'white',
            paddingTop:20,
            fontSize:15,
            fontFamily:'sans-serif-light',
        },
        visiontext:{
            color:'white',
            textAlign:"center",
            fontSize:19,
            paddingBottom:10,
            fontFamily:'sans-serif-light',
        },
        scroll:{
            flex:1,
        },
        ownertext:{
            color:'white',
            paddingLeft:5,
            fontSize:15,
            paddingRight:10,
            flex: 1,
            flexWrap: 'wrap'

        }
    }
);