import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectOrgin } from '@/features/navSlice';
import Map from '@/components/Map';


const MapScreen: React.FC = () => {

    const orgin=useSelector(selectOrgin)
    return (
        <View>
           <View className='h-1/2'>
            <Map/>
           </View>
           <View className='h-1/2'/>
        </View>

    )
}

export default MapScreen


