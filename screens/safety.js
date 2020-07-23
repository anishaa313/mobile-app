import React from 'react';
import {StyleSheet,View,Text,Button,ScrollView} from 'react-native';
import {globalStyles} from '../styles/global';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Safety extends React.Component
{
    render()
    {
    return(
        <View style={globalStyles.container}>
            <ScrollView style={globalStyles.scroll}>
        <View style={styles.dangerquote}>
        <FontAwesome5 style={styles.dangersign} name="exclamation-triangle" size={50} />
        <Text style={styles.dangertext}>SAFETY FIRST IS SAFETY ALWAYS</Text>
        </View>
                <Text></Text>
        <View style={styles.bgdesign1}>
        <FontAwesome5 style={styles.arrow} name="arrow-right" size={20} />
        <Text style={styles.textdesign}>Be sure you understand how to perform all your tasks and how to use tools and equipment safely.</Text>
        </View>
        <Text></Text>
        <View style={styles.bgdesign2}>
        <FontAwesome5 style={styles.arrow} name="arrow-right" size={20} />
        <Text style={styles.textdesign}>Wear appropriate personal protective equipment to avoid being injured by flying or falling objects.</Text>
        </View>
        <Text></Text>
        <View style={styles.bgdesign1}>
        <FontAwesome5 style={styles.arrow} name="arrow-right" size={20} />
        <Text style={styles.textdesign}>Be sure that trucks and other vehicles are in good working order, including audible back-up warning signals, before operating them.</Text>
        </View>
        <Text></Text>
        <View style={styles.bgdesign2}>
        <FontAwesome5 style={styles.arrow} name="arrow-right" size={20} />
        <Text style={styles.textdesign}>Avoid overloading hoists, cranes and forklifts.</Text>
        </View>
        <Text></Text>
        <View style={styles.bgdesign1}>
        <FontAwesome5 style={styles.arrow} name="arrow-right" size={20} />
        <Text style={styles.textdesign}>Do not walk or work under overhead loads.</Text>
        </View>
        <Text></Text>
        <View style={styles.bgdesign2}>
        <FontAwesome5 style={styles.arrow} name="arrow-right" size={20} />
        <Text style={styles.textdesign}>Make certain that rigging is in place to protect against falling objects and materials during hoisting and stacking procedures.</Text>
        </View>
        </ScrollView>
        </View>
    );
    }
}
const styles=StyleSheet.create({
    bgdesign1:{
        backgroundColor:'#933A16',
        borderRadius:10,
        flexDirection:'row',
        padding:10
    },
    bgdesign2:{
        backgroundColor:'#cc7722',
        borderRadius:10,
        flexDirection:'row',
        padding:10
    },
    textdesign:{
        padding:10,
        color:'white',
        fontSize:18,
        
    },
    arrow:{
        color:'white',
    },
    dangersign:{
        color:'yellow',
    },
    dangerquote:{
        flexDirection:"row",
    },
    dangertext:{
        paddingHorizontal:20,
        fontSize:25,
        color:'white'
    }
})
