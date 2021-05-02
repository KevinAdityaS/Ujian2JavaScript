import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonThumbUp from '../Component/ButtonThumbUp';

export class ButtonLoop extends Component {

    render() {
      var button = [];
      let order = 0;
         for (let i = 1; i <= 20; i++) {
           button.push(<ButtonThumbUp></ButtonThumbUp>);
           order++;
         }
    
      return (
          <View>
            <View style = {styles.buttonList}>{button}</View> 
         </View>
       );
     }
     }
    
    export default ButtonLoop
    
    const styles = StyleSheet.create({
      buttonList: {
        padding : 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    });