import { Button, ButtonText, Heading, Image, ScrollView } from '@gluestack-ui/themed';
import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

const Register = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EDE4D3' }}>
            <View
                style={{
                    paddingVertical: 24,
                    paddingHorizontal: 0,
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                }}
            >

                <View style={{ marginVertical: 24, paddingHorizontal: 24 }}>
                    <Image
                        alt=""
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                            alignSelf: 'center',
                            marginBottom: 0,
                        }}
                        source={require('../assets/register.png')}>

                    </Image>
                    <Heading style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#1d1d1d',
                        marginBottom: 6,
                        textAlign: 'center'
                    }}>Register</Heading>

                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#1d1d1d', textAlign: 'center' }}>
                        Pet Care
                    </Text>
                </View>

                <ScrollView>
                    <View style={{ paddingHorizontal: 24 }}>
                        <View style={{ marginBottom: 16 }}>
                            <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                                Nama Lengkap
                            </Text>

                            <TextInput
                                onChangeText={(fullname) => setForm({ ...form, fullname })}
                                placeholder="Isi nama anda"
                                placeholderTextColor="#6b7280"
                                style={{
                                    height: 44,
                                    backgroundColor: '#f1f5f9',
                                    paddingHorizontal: 16,
                                    borderRadius: 12,
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: '#222',
                                }}
                                value={form.fullname}
                            />
                        </View>

                        <View style={{ marginBottom: 16 }}>
                            <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                                Alamat Email
                            </Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardT   ype="email-address"
                                onChangeText={(email) => setForm({ ...form, email })}
                                placeholder="isi alamat email"
                                placeholderTextColor="#6b7280"
                                style={{
                                    height: 44,
                                    backgroundColor: '#f1f5f9',
                                    paddingHorizontal: 16,
                                    borderRadius: 12,
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: '#222',
                                }}
                                value={form.email}
                            />
                        </View>

                        <View style={{ marginBottom: 16 }}>
                            <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                                Password
                            </Text>

                            <TextInput
                                autoCorrect={false}
                                onChangeText={(password) => setForm({ ...form, password })}
                                placeholder="isi password"
                                placeholderTextColor="#6b7280"
                                style={{
                                    height: 44,
                                    backgroundColor: '#f1f5f9',
                                    paddingHorizontal: 16,
                                    borderRadius: 12,
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: '#222',
                                }}
                                secureTextEntry={true}
                                value={form.password}
                            />
                        </View>

                        <View style={{ marginBottom: 16 }}>
                            <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                                Konfirmasi Password
                            </Text>

                            <TextInput
                                autoCorrect={false}
                                onChangeText={(confirmPassword) => setForm({ ...form, confirmPassword })}
                                placeholder="ulangi password"
                                placeholderTextColor="#6b7280"
                                style={{
                                    height: 44,
                                    backgroundColor: '#f1f5f9',
                                    paddingHorizontal: 16,
                                    borderRadius: 12,
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: '#222',
                                }}
                                secureTextEntry={true}
                                value={form.confirmPassword}
                            />
                        </View>

                        <View style={{ marginVertical: 24 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 8,
                                        paddingVertical: 8,
                                        paddingHorizontal: 16,
                                        borderWidth: 1,
                                        backgroundColor: '#FF7F50',
                                        borderColor: '#FF7F50',
                                    }}
                                >
                                    <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#fff' }}>
                                        Sign up
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>

                            <Link
                                href={{
                                    pathname: "/Login"
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: '#222',
                                    textAlign: 'center',
                                }}> Already have an account? login</Text>
                            </Link>


                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default Register;