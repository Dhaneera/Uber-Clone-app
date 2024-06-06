import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Home: React.FC = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    }, [])

    return (
        <SafeAreaView className=' w-full  h-full items-center justify-center'>
            <View className=' justify-center items-center'>
                <Text>Home</Text>
            </View>
        </SafeAreaView>

    )
}

export default Home