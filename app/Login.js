import React, { useState } from 'react';
import { Link, useNavigation } from 'expo-router';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { ButtonText, Heading } from '@gluestack-ui/themed';

const Login = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EDE4D3' }}>
            <View style={{ padding: 24, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                <View style={{ marginVertical: 36 }}>
                    <Image
                        alt=""
                        resizeMode="contain"
                        style={{
                            width: 200,
                            height: 200,
                            alignSelf: 'center',
                            marginBottom: 0,
                        }}
                        source={require('../assets/welcome.png')}

                    />
                    <Heading style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#1d1d1d',
                        marginBottom: 6,
                        textAlign: 'center'
                    }}>PET CARE</Heading>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '500',
                        color: '#1d1d1d',
                        textAlign: 'center'
                    }}>Solusi aman untuk hewan peliharaan</Text>
                </View>

                <View style={{ marginBottom: 24 }}>
                    <View style={{ marginBottom: 16 }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                            Alamat Email
                        </Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(email) => setForm({ ...form, email })}
                            placeholder="masukkan email anda"
                            placeholderTextColor="#6b7280"
                            value={form.email}
                            style={{ height: 44, backgroundColor: '#f1f5f9', paddingHorizontal: 16, borderRadius: 12, fontSize: 15, fontWeight: '500', color: '#222' }}
                        />
                    </View>

                    <View style={{ marginBottom: 16 }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                            Password
                        </Text>
                        <TextInput
                            autoCorrect={false}
                            onChangeText={(password) => setForm({ ...form, password })}
                            placeholder="masukkan password"
                            placeholderTextColor="#6b7280"
                            secureTextEntry={true}
                            value={form.password}
                            style={{ height: 44, backgroundColor: '#f1f5f9', paddingHorizontal: 16, borderRadius: 12, fontSize: 15, fontWeight: '500', color: '#222' }}
                        />
                    </View>

                    <View style={{ marginVertical: 24 }}>
                        <TouchableOpacity>
                            <Button style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 8,
                                paddingVertical: 5,
                                paddingHorizontal: 130,
                                borderWidth: 1,
                                backgroundColor: '#FF7F50',
                                borderColor: '#FF7F50',
                            }}>
                                <Link
                                    href={{
                                        pathname: "/home"
                                    }}
                                >
                                    <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#fff' }}> Login</Text>
                                </Link>
                            </Button>

                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity >
                        <Text>
                            Belum Punya Akun?{' '}
                            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('forgotpassword')}>
                        <Text style={{ textDecorationLine: 'underline' }}>Lupa Password?</Text>
                    </TouchableOpacity>

=========
                    <Link
                        href={{
                            pathname: "/Register"
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            fontWeight: '500',
                            color: '#222',
                            textAlign: 'center',
                            textDecorationLine: 'underline'
                        }}>Belum punya akun? Sign Up</Text>
                    </Link>
                    <Link
                        href={{
                            pathname: "/forgotpassword"
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            fontWeight: '500',
                            color: '#222',
                            textAlign: 'center',
                            textDecorationLine: 'underline'
                        }}>Lupa Password?</Text>
                    </Link>
                    <Link
                        href={{
                            pathname: "/AdminLogin"
                        }}
                    >
                        <Text style={{
                            fontSize: 15,
                            fontWeight: '500',
                            color: '#222',
                            textAlign: 'center',
                            textDecorationLine: 'underline'
                        }}>Login Admin</Text>
                    </Link>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;