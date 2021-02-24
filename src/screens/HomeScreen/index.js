import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage/index';
import HomeSearch from '../../components/HomeSearch/index';
export default function Index({navigation}) {
    return (
        <View style={{height: Dimensions.get('window').height - 400}}>
            <HomeMap />
            <CovidMessage />
            <HomeSearch />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
