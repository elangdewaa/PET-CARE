import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,

} from 'react-native';
import { Heading } from '@gluestack-ui/themed';
import { Link, useLocalSearchParams } from "expo-router";

const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 24, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                <View style={{ marginVertical: 36 }}>
                    <Heading style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#1d1d1d',
                        marginBottom: 6,
                        textAlign: 'center'
                    }}>Welcome!</Heading>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '500',
                        color: '#929292',
                        textAlign: 'center'
                    }}>Pet Care</Text>
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
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16, borderWidth: 1, backgroundColor: '#FF7F50', borderColor: '#FF7F50' }}>
                                <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#fff' }}>Sign in</Text>
                            </View>
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

                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;