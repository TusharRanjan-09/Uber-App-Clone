import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const DestinationSearch = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>

            <View style={{ backgroundColor: '#fff', elevation: 10 }}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name={'arrow-back-outline'} size={28} color={'#535353'} style={{ marginTop: 20 }} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'darkgrey', marginTop: 26, width: 8, height: 8, marginLeft: 5, marginBottom: 5, borderRadius: 4 }}></View>
                        <View style={{ backgroundColor: 'lightgrey', width: 1, height: 40, marginLeft: 5, }}></View>
                        <View style={{ backgroundColor: 'black', width: 8, height: 8, marginLeft: 5, marginTop: 5 }}></View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <TextInput placeholder="From" style={styles.textInput} />
                        <TextInput placeholder="Where to ?" style={styles.textInput} />
                    </View>
<TouchableOpacity onPress={()=> navigation.navigate('SearchResult')}>
<Ionicons name={'arrow-forward-circle'} size={34} color={'#535353'} style={{ marginTop: 65,marginLeft:10 }} />
</TouchableOpacity>
                   
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;

const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'row',
    },
    textInput: {
        padding: 10,
        backgroundColor: 'lightgrey',
        marginVertical: 5,
        marginLeft: 20,
        width: 290
    },

    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },
    listView: {
        position: 'absolute',
        top: 105,
    },
    autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {

    },

    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 20,
        left: 15,
        borderRadius: 5,
    },
    line: {
        width: 1,
        height: 50,
        backgroundColor: '#c4c4c4',
        position: 'absolute',
        top: 28,
        left: 17,
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 15,
    },
});