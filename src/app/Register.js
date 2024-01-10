import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Button, Text as ThemedText, Heading, Image, form, } from '@gluestack-ui/themed';
import { Link, router } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, SetName] = useState("");

  const registerHandler = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const userData = { email, password, name, credential: userCredential };
      await AsyncStorage.setItem("user-data", JSON.stringify(userData));
      saveNamaDatabase(userData.email, userData.name, userData);
      router.replace("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const saveNamaDatabase = (email, name, userData) => {
    const data = { email, name, password };
    const uid = userData.credential.user.uid;
    firebase.database().ref("User/" + uid).push(data);
    router.replace("/home");
  };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EDE4D3' }}>
        <ScrollView>
            <View style={{  paddingVertical: 24,
      paddingHorizontal: 0, }}>
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
            label="Nama"
            onChangeText={(value) => SetName(value)}
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
          />
                <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                            Alamat Email
                        </Text>
                        <TextInput
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
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
          />
                   <Text style={{ fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8 }}>
                            Password
                        </Text>
        <TextInput
            label="Password"
            autoCorrect={false}
            onChangeText={(value) => setPassword(value)}
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
          />

            <Button
            flexDirection="$row"
            alignItems="$center"
            justifyContent="center"
            paddingVertical="8"
            paddingHorizontal="16"
            backgroundColor="#FF7F50"
            borderColor="#FF7F50"
            onPress={registerHandler}
            
          >
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