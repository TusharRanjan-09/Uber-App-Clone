import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView,FlatList,TouchableOpacity, Image, ScrollView } from "react-native";
import HomeMap from '../../components/HomeMap/index';
import cars from '../../assets/data/cars';
import Ionicons from "react-native-vector-icons/Ionicons";
const UberTypes = (props) => {
    // console.warn(props.car.type)
    return (     
     
<ScrollView style={{backgroundColor: 'white',position:'absolute', flex:1,  width: '100%'}}>
                 {cars.map((item, index) => {
                return (
                    <TouchableOpacity>
                    <View key={index}>
                         <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,borderBottomWidth:.5}}>
                        <Image source={{uri : item.uri}} style={{ width: 80, height: 80 }} />
                      
                            <View style={{marginHorizontal:10, }} key={index}>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={{color: 'black', fontSize:18, marginRight:120,fontSize:20, fontWeight:'bold'}}>{item.type}</Text>
                                <Text style={{color: 'black', fontSize:18}}>{item.price}</Text>
                                </View>
                             
                                <View style={{flexDirection: 'column'}}>
                                <Text style={{color: 'black', fontSize:18}}>{item.time}</Text>
                                </View>
                                {/* <Text style={{color: 'grey', fontSize:16}}>{item.note}</Text> */}
                            </View>                   
                        </View>
                    </View>
                    </TouchableOpacity>
                )
            })}
           <View style={{flexDirection:'row', alignItems:'center', height:80, marginHorizontal:10}}>
           <Ionicons name={'cash-outline'} size={28} color={'green'} style={{ marginTop: 20 }} />
           <Text style={{color: 'black', paddingLeft: 11, marginTop:15, fontSize:20, fontWeight: 'bold'}}>Cash</Text>
           <Ionicons name={'chevron-forward'} size={22} color={'black'} style={{ marginTop: 20, marginLeft:273 }} />
           </View>
            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', backgroundColor: 'black', width:'95%', height: 50, marginHorizontal:10}}>
                <Text style={{color: 'white', fontSize:25, fontWeight:'bold'}}>Confirm Booking</Text>
            </TouchableOpacity>
            </ScrollView>
      
    );
};

export default UberTypes;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'red'
    },
  });