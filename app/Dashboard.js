import { View, Text, ImageBackground, TouchableOpacity } from '@gluestack-ui/themed';

import { Button, ButtonText, Box, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';


const Dashboard = () => {
    return (
        <ImageBackground
            source={require('../assets/Dashboard.png')}
            style={{
                flex: 1,
                resizeMode: 'cover',
            }} >
            <View style={{
                marginVertical: 24,
                marginTop: 650,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            </View>
            

        </ImageBackground>
         
    )
}

export default Dashboard