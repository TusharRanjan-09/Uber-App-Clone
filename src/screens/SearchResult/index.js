import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView,FlatList } from "react-native";
import HomeMap from '../../components/HomeMap/index';
import Ionicons from "react-native-vector-icons/Ionicons";
import Cars from '../../assets/data/cars';
import UberTypes from '../../components/UberTypes/index';
const SearchResult = () => {
    return (
       
            <View style={styles.container}>
             <View style={{flex:.4, backgroundColor: 'red'}}>
<HomeMap/>
             </View>
             <View style={{flex:.55, backgroundColor: 'blue'}}>
<UberTypes/>
</View>
            </View>
       

    );
};

export default SearchResult;

const styles = StyleSheet.create({
    container: {
  flex:1,
  backgroundColor: 'white'
    },
  });