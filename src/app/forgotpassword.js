import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Link, router } from "expo-router";
import firebase from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { forgotUser } from "../actions/AuthAction";

const Forgot = ({ navigation }) => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onForgot = async () => {
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

const ForgotPassword = ({ isLoading, setIsLoading }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email) {
      setTimeout(() => {
        Alert.alert('Reset Password', 'Link reset password dikirim ke ${email}');
      }, 2000);
    } else {
      Alert.alert('Error', 'Masukkan alamat email terlebih dahulu');
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginBottom: 10, fontSize: 16 }}>Masukkan alamat email Anda:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 8 }}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Alamat Email"
        keyboardType="email-address"
        autoCapitalize="none"
        maxLength={50}
      />
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
        disabled={isLoading}
      />
    </View>
  );
};

export default ForgotPassword;