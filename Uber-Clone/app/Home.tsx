import { View, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import NavOption from '@/components/NavOption'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux'
import { setOrgin, setdestination } from '@/features/navSlice';


const Home: React.FC = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className='h-full'>
            <View className='p-5'>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/gzs',

                    }} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                <GooglePlacesAutocomplete
                    placeholder='from'
                    styles={{
                        container: {
                            flex: 0,
                            width:350,
                        },
                        textInput: {
                            fontSize: 18,
                            fontWeight:800,
                        }
                    }}
                    onPress={(data,detils)=>{
                        dispatch(setOrgin({
                            location:{
                                lat:detils?.geometry.location.lat,
                                lng:detils?.geometry.location.lng
                            
                            },
                            description:data.description
                        }))
                        dispatch(setdestination(null))
                    }}
                    fetchDetails={true}
                    // returnKeyType={'search'}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    minLength={2}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}


                />
                <NavOption />
            </View>
        </SafeAreaView>

    )
}

export default Home