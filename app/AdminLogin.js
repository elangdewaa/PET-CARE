import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

const AdminLogin = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EDE4D3' }}>
            <View style={{
                padding: 24,
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
            }}>
                <View style={{ marginVertical: 36 }}>

                    <Text style={{
                        fontSize: 27,
                        fontWeight: '700',
                        color: '#1d1d1d',
                        marginBottom: 6,
                        textAlign: 'center',
                    }}>
                        Login <Text style={{ color: '#FF7F50' }}>ADMIN</Text>
                    </Text>
                </View>

                <View style={{
                    marginBottom: 24,
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                }}>
                    <View style={{ marginBottom: 16 }}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '600',
                            color: '#222',
                            marginBottom: 8,
                        }}>Email address</Text>

                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={email => setForm({ ...form, email })}
                            placeholder="masukkan email anda"
                            placeholderTextColor="#6b7280"

                            style={{
                                height: 44,
                                backgroundColor: '#FFFFFF',
                                paddingHorizontal: 16,
                                borderRadius: 12,
                                fontSize: 15,
                                fontWeight: '500',
                            }}
                            value={form.email}
                        />
                    </View>

                    <View style={{
                        fontSize: 17,
                        fontWeight: '600',
                        color: '#222',
                        marginBottom: 8,
                    }}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '600',
                            color: '#222',
                            marginBottom: 8,
                        }}>Password</Text>

                        <TextInput
                            autoCorrect={false}
                            onChangeText={password => setForm({ ...form, password })}
                            placeholder="********"
                            placeholderTextColor="#6b7280"
                            style={{
                                height: 44,
                                backgroundColor: '#fff',
                                paddingHorizontal: 16,
                                borderRadius: 12,
                                fontSize: 15,
                                fontWeight: '500',
                                color: '#222'
                            }}
                            secureTextEntry={true}
                            value={form.password}
                        />
                    </View>

                    <View style={{ marginVertical: 24 }}>
                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 8,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                borderWidth: 1,
                                backgroundColor: '#FF7F50',
                                borderColor: '#FF7F50',
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    lineHeight: 26,
                                    fontWeight: '600',
                                    color: '#fff',
                                }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            // handle link
                        }}
                        style={{ marginTop: 'auto' }}>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default AdminLogin;
