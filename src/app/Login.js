import React, { useState } from 'react';
import { Link } from 'expo-router';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Button, ButtonText, Heading, Image, Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, } from '@gluestack-ui/themed';
import { Alert } from 'react-native';
import { loginUser } from "../actions/AuthAction";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [registrationError, setRegistrationError] = useState(false)

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

//   if (email && password) {
//     loginUser(email, password)
//       .then((user) => {
//         // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
//         navigation.replace("MainApp");
//         // Menampilkan alert sukses
//         Alert.alert("Login Successful", "You have successfully logged in!");
//       })
//       .catch((error) => {
//         // Terjadi kesalahan saat login, tampilkan pesan kesalahan
//         console.log("Error", error.message);
//         // Menampilkan alert gagal dengan pesan kesalahan
//         Alert.alert("Login Failed", "Gagal Login");
//       };
//   if (email && password) {
//     loginUser(email, password)
//       .then((user) => {
//         // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
//         navigation.replace("MainApp");
//         // Menampilkan alert sukses
//         Alert.alert("Login Successful", "You have successfully logged in!");
//       })
//       .catch((error) => {
//         // Terjadi kesalahan saat login, tampilkan pesan kesalahan
//         console.log("Error", error.message);
//         // Menampilkan alert gagal dengan pesan kesalahan
//         Alert.alert("Login Failed", Error: ${error.message});
//       });

const login = () => {
    if (email.trim() === '' || password.trim() === '') {
      // Menampilkan alert jika email atau password kosong
      toggleAlert("Email dan password harus diisi");
      return;
    }
  
    loginUser(email, password)
      .then((user) => {
        // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
        router.replace("/(tabs)/home");
  
        // Menampilkan alert sukses
        Alert.alert("Login Successful", "Anda berhasil masuk!");
      })
      .catch((error) => {
        // Terjadi kesalahan saat login, tampilkan pesan kesalahan
        console.log("Error", error.message);
  
        // Menampilkan alert gagal dengan pesan kesalahan
        Alert.alert("Login Failed", "Gagal masuk");
      });
  };

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
                            onChangeText={(text) => setEmail(text)} 
                            placeholder="masukkan email anda"
                            placeholderTextColor="#6b7280"
                            value={email}
                            style={{ height: 44, backgroundColor: '#f1f5f9', paddingHorizontal: 16, borderRadius: 12, fontSize: 15, fontWeight: '500', color: '#222' }}
                        />
                    </View>

                    <View style={{ marginBottom: 16 }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                            Password
                        </Text>
                        <TextInput
                            autoCorrect={false}
                            onChangeText={(text) => setPassword(text)} 
                            placeholder="masukkan password"
                            placeholderTextColor="#6b7280"
                            secureTextEntry={true}
                            value={password}
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
                            {/* show Alert */}
                            {showAlert && (
                                <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
                                <ModalBackdrop />
                                <Alert mx="$4" action="error" variant="solid">
                                    <AlertText fontWeight="$bold">Error!</AlertText>
                                    <AlertText>{alertMessage}</AlertText>
                                </Alert>
                                </Modal>
                            )}
                        </TouchableOpacity>
                    </View>

                    <Link
                        href={{
                            pathname: "Register"
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
                            textDecorationLine: 'underline',
                            marginBottom: '$20',
                        }}>Login Admin</Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;