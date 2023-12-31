import { Button, Heading, Image, ScrollView } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { router } from "expo-router";
import { registerUser } from "../actions/AuthAction";

const Register = ({ navigation }) => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onRegister = async () => {
        if (nama && email && password) {
            const data = {
                nama: nama,
                email: email,
                password: password,
                status: "user",
            };

console.log(data)

            try {
                await registerUser(data, password);
                router.push("/(tabs)/home");
            } catch (error) {
                console.log("Error", error.message);
            }
        } else {
            console.log("Error", "Data tidak lengkap");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EDE4D3' }}>
            <ScrollView>
                <View style={{ paddingHorizontal: 24 }}>
                    <Image
                        alt=""
                        resizeMode="contain"
                        style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 0 }}
                        source={require('../assets/register.png')}
                    />
                    <Heading style={{ fontSize: 32, fontWeight: 'bold', color: '#1d1d1d', marginBottom: 6, textAlign: 'center' }}>
                        Register
                    </Heading>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#1d1d1d', textAlign: 'center' }}>
                        Pet Care
                    </Text>

                    {/* Input Fields */}
                    <TextInput
                        onChangeText={setNama}
                        placeholder="Nama Lengkap"
                        style={{ /* styling for the input */ }}
                        value={nama}
                    />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        placeholder="Alamat Email"
                        style={{ /* styling for the input */ }}
                        value={email}
                    />
                    <TextInput
                        autoCorrect={false}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry={true}
                        style={{ /* styling for the input */ }}
                        value={password}
                    />
                    <TextInput
                        autoCorrect={false}
                        onChangeText={setConfirmPassword}
                        placeholder="Konfirmasi Password"
                        secureTextEntry={true}
                        style={{ /* styling for the input */ }}
                        value={confirmPassword}
                    />

                    <Button onPress={onRegister} style={{ /* styling for the button */ }}>
                        <Text>Sign up</Text>
                    </Button>

                    <TouchableOpacity>
                        <Link href="/Login">
                            <Text style={{ textAlign: 'center', color: '#222', fontWeight: '500' }}>
                                Already have an account? Login
                            </Text>
                        </Link>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;
