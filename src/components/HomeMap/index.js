import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
export default function HomeMap() {
  return (
    <View style={styles.container}>
    <MapView
    style={{width:'100%',height:'100%'}}
    initialRegion={{
      latitude: 28.446142,
      longitude: 77.032103,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    <Marker
  coordinate={{ latitude : 28.446142 , longitude : 77.032103 }}
>
<Image source={require('../../assets/images/top-UberXL.png')} style={{width:20, height:20}}/>
</Marker>
<Marker
  coordinate={{ latitude : 28.446342 , longitude : 77.035103 }}
>
<Image source={require('../../assets/images/top-UberX.png')} style={{width:22, height:25}}/>
</Marker>
<Marker
  coordinate={{ latitude : 28.442595 , longitude : 77.032153 }}
>
<Image source={require('../../assets/images/top-UberXL.png')} style={{width:20, height:20}}/>
</Marker>
  </MapView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {   
    backgroundColor: 'white',   
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'100%'
  },
});
