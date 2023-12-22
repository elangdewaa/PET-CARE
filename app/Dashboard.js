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
                marginTop: 'auto',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Link href={{ pathname: "/Login" }} >
                <TouchableOpacity >
               
                <Box w={100} h="$20" bg= "$white" borderRadius="$3xl" borderWidth={2} justifyContent="center" alignItems="center" softShadow="" >
<VStack ><Text color="floralwhite" fontWeight="bold">Login</Text></VStack>
  </Box>
                </TouchableOpacity>
                </Link>
            </View>
            

        </ImageBackground>
         
    )
}

export default Dashboard