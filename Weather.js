import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#616161", "#9bc5c3"],
        title: "흐림",
        subtitle: "날씨가 흐리다... 내 마음도 흐리다...★"
    },
    Thunderstorm: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Drizzle: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Rain: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Snow: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Clear: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Mist: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Smoke: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Haze: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Dust: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Fog: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Sand: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Dust: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Ash: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Squall: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    },
    Tornado: {
        iconName: "",
        gradient: "",
        title: "",
        subtitle: ""
    }
}

export default function Weather({temp, name, condition}){
    return (
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
          <StatusBar barStyle="light-content"/>
          <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                name={weatherOptions[condition].iconName}
                size={100} 
                color="white" 
            />
            <Text style={styles.temp}>{temp}℃</Text>
            <Text style={styles.temp}>{name}</Text>
          </View>
          <View style={styles.halfContainer}>
                <Text style={styles.title}>
                  {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}                  
                </Text>
          </View>
      </LinearGradient>
    )
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    halfContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    title: {
        fontSize: 32,
        color: "white",
        marginBottom: 8
    },
    subtitle: {
        fontSize: 20,
        color: "white"
    }
  });