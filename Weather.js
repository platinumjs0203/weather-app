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
        subtitle: "날씨가 흐리다... 내 마음도 흐리다...⭐"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#4b6cb7", "#182848"],
        title: "천둥",
        subtitle: "번쩍!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#457fca", "#5691c8"],
        title: "진눈깨비",
        subtitle: "ㅇㅅㅇ"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#43C6AC", "#191654"],
        title: "비",
        subtitle: "비가내린다 주륵주륵주륵 🌂챙겨"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#4CA1AF", "#C4E0E5"],
        title: "눈",
        subtitle: "부산은 눈이 안와요 ㅎㅎ;"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA"],
        title: "맑음",
        subtitle: "🌞 쾌청 🌞"
    },
    Mist: {
        iconName: "weather-hazy",
        gradient: ["#a8c0ff", "#3f2b96"],
        title: "엷은 안개",
        subtitle: "Fog boost...?"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#659999", "#f4791f"],
        title: "Smoke?",
        subtitle: "Fog boost...?"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#06beb6", "#48b1bf"],
        title: "연무",
        subtitle: "Fog boost...?"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#659999", "#f4791f"],
        title: "먼지",
        subtitle: "중국 미세먼지 싫어요"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#a8c0ff", "#3f2b96"],
        title: "안개",
        subtitle: "Fog boost...?"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#FDC830", "#F37335"],
        title: "모래바람",
        subtitle: "Fog boost...?"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#659999", "#f4791f"],
        title: "모래먼지",
        subtitle: "Fog boost...?"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "재...?",
        subtitle: "Fog boost...?"
    },
    Squall: { 
        // 돌풍
        iconName: "weather-windy",
        gradient: ["#667db6", "#0082c8", "#0082c8", "#667db6"],
        title: "돌풍",
        subtitle: "돌풍샤코"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#06beb6", "#48b1bf"],
        title: "토네이도",
        subtitle: "토네이도 ㅎㅎ;; 절대볼일없을듯ㅎ;"
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