import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'
import NavOption from '@/components/NavOption'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
const Home: React.FC = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    }, [])

    return (
        <SafeAreaView className='h-full'>
            <View className='p-5'>
               <Image
               source={{
                uri: 'https://links.papareact.com/gzs',
                
               }}style={{width:100,height:100,resizeMode:'contain'}} />
               <GooglePlacesAutocomplete
                placeholder='Where From'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                minLength={2}
                enablePoweredByContainer={false}
                onPress={(data, details = null)=>{
                    console.log(data);
                    console.log(details);
                    
                }}
                query={{
                    key:GOOGLE_MAPS_APIKEY,
                    language:'en',
                }}
                styles={{
                    container:{
                        flex:0
                    },
                    textInput:{
                        fontSize:18
                    }
                }}
               
                />
               <NavOption/>
            </View>
        </SafeAreaView>

    )
}

export default Home