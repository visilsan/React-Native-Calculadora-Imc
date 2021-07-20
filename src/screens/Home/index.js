import React from "react";
import { View } from 'react-native';
import {StyleSheet} from 'react-native';
import {getStatusBarHeight } from 'react-native-iphone-x-helper'

 export function Home (){
     return(
         <View>
             <View style={styles.header}>

             </View>


         </View>

     );
 }

 export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        width: '100%',
        paddingHorizontal:24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //altura da barra, aplica o espaçamento da barra + 26(isso para IOS)
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    }
})