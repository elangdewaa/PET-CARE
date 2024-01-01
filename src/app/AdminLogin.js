import { Pressable, Button, ButtonText, Modal, ModalBackdrop, Alert, AlertText } from '@gluestack-ui/themed'
import { Link, router } from 'expo-router';
import { AdminLogin } from "../actions/AuthAction";
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

const LoginAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const toggleAlert = (message) => {
        setShowAlert(!showAlert);
        setAlertMessage(message);
      };

const Adminlogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      // Menampilkan alert jika email atau password kosong
      toggleAlert("Email dan password harus diisi");
      return;
    }

    loginUser(email, password)
      .then((admin) => {
        // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
        router.replace("/(tabs admin)/all_reservation");

        // Menampilkan alert sukses
        toggleAlert( "Anda berhasil masuk!")
      })
      .catch((error) => {
        // Terjadi kesalahan saat login, tampilkan pesan kesalahan
        console.log("Error", error.message);

        // Menampilkan alert gagal dengan pesan kesalahan
       toggleAlert(error.message)
      });
  };


   
        
      
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
                            onChangeText={(text) => setEmail(text)} // Set email ke dalam state

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
                            value={email}
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
                            onChangeText={(text) => setPassword(text)} // Set password ke dalam state
                            value={password}
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
                        />
                    </View>

                    <View style={{ marginVertical: 24 }}>
                        <TouchableOpacity>
                            <Button onPress={() => Adminlogin()}
                            style={{
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
                                
                                    <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#fff' }}> Login</Text>
                              
                            </Button>

                        </TouchableOpacity>

                    </View>
                    {showAlert && (
                <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
                  <ModalBackdrop />
                  <Alert mx="$4" action="error" variant="solid">
                    <AlertText fontWeight="$bold">Error!</AlertText>
                    <AlertText>{alertMessage}</AlertText>
                  </Alert>
                </Modal>
              )}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default AdminLogin;
