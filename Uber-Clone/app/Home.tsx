import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'
import NavOption from '@/components/NavOption'

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
               <NavOption/>
            </View>
        </SafeAreaView>

    )
}

export default Home