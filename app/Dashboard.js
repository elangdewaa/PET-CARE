import { View, Text, ImageBackground } from 'react-native'
import { Pressable, Button, ButtonText } from '@gluestack-ui/themed'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground
            source={require('../assets/Dashboard.png')}
            style={{
                flex: 1,
                resizeMode: 'cover',
            }} >
            <View style={{
                marginVertical: 24,
                marginTop: 350,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    borderColor: '#FFFFFF'
                }}
                    title="login"
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#000000' }}>
                        Login</Text>
                </Button>

            </View>

        </ImageBackground>
    )
}

export default Dashboard