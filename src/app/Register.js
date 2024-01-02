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

                    {<Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                                Nama Lengkap
                            </Text>}
                    <TextInput
                        onChangeText={setNama}
                        placeholder="Nama Lengkap"
                        style={{ height: 44, backgroundColor: "#f1f5f9", paddingHorizontal: 16, borderRadius: 12, fontSize: 15, fontWeight: "500", color: "#222" }}
                        value={nama}
                    />
                    <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                                Alamat Email
                            </Text>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        placeholder="Alamat Email"
                        style={{ height: 44, backgroundColor: "#f1f5f9", paddingHorizontal: 16, borderRadius: 12, fontSize: 15, fontWeight: "500", color: "#222" }}
                        value={email}
                    />
                       <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                                Password
                            </Text>
                    <TextInput
                        autoCorrect={false}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry={true}
                        style={{ height: 44, backgroundColor: "#f1f5f9", paddingHorizontal: 16, borderRadius: 12, fontSize: 15, fontWeight: "500", color: "#222" }}
                        value={password}
                    />
                       <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                                 Konfirmasi Password
                            </Text>
                    <TextInput
                        autoCorrect={false}
                        onChangeText={setConfirmPassword}
                        placeholder="Konfirmasi Password"
                        secureTextEntry={true}
                        style={{
                            height: 44,
                            backgroundColor: '#f1f5f9',
                            paddingHorizontal: 16,
                            borderRadius: 12,
                            fontSize: 15,
                            fontWeight: '500',
                            color: '#222',
                        }}
                        value={confirmPassword}
                    />

                    <Button onPress={onRegister} style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  paddingVertical: 5,
                  paddingHorizontal: 130,
                  borderWidth: 1,
                  backgroundColor: "#FF7F50",
                  borderColor: "#FF7F50",
                }}>
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