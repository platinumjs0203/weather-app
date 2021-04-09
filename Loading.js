import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>날씨를 가져오는 중 입니다.</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        fontSize: 22
    }
  });