import { View, Text, ImageBackground } from 'react-native'
import { Pressable, Button, ButtonText } from '@gluestack-ui/themed'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';


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

                <TouchableOpacity>
                    <Button style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        paddingVertical: 5,
                        paddingHorizontal: 130,
                        borderWidth: 1,
                        backgroundColor: '#FFFFFF',
                        borderColor: '#FFFFFF',
                    }}>
                        <Link
                            href={{
                                pathname: "/Login"
                            }}
                        >
                            <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600' }}> login</Text>
                        </Link>
                    </Button>

                </TouchableOpacity>

            </View>

        </ImageBackground>
    )
}

export default Dashboard