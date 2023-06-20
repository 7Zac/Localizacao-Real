import { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {  requestForegroundPermissionsAsync, 
          getCurrentPositionAsync,
          LocationObject,
          watchPositionAsync, 
          LocationAccuracy
           } from 'expo-location';
        
import Search from './src/components/Search';

import { styles } from './styles';

export default function App() {
  const [location, setLocation] = useState < LocationObject | null > (null);

  const mapRef = useRef<MapView>(null);
  
  async function requestLocationPermissions(){
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted){
      const CurrentPosition = await getCurrentPositionAsync();
      setLocation (CurrentPosition);
    } 
  }

  useEffect(() =>{ 
    requestLocationPermissions();
  }, []);

  useEffect(() =>{
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,
    }, (response) =>{
      setLocation(response);
      mapRef.current?.animateCamera({
      pitch: 0,
      center: response.coords
      })
    });
  },[]);
  
  return (
    <View style={styles.container}>
    
    {
      location &&
      <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.latitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.134
      }}
      showsUserLocation
      loadingEnabled
      >
      <Marker
        coordinate={{
          latitude: -7.224691,
          longitude: -39.311353,
        }}
        
      />
      </MapView>
      
    }
      <Search/>
    </View>
    
  );
}


