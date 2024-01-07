import { Text, Box, HStack, Image, VStack, ScrollView, Button, ButtonText, FlatList, Divider } from "@gluestack-ui/themed";
import { Link, router } from "expo-router";
import { Header } from "../../components";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState,useEffect } from 'react';
import firebase from "../../config";
import { Ionicons } from "@expo/vector-icons";
const profileadmin= () => {
  

  const logout = async () => {
    firebase.auth().signOut().then(() => {
        clearUserData();
      }).catch((error) => {
        console.error(error);
      });
  };
  const clearUserData = async () => {
    try {
      await AsyncStorage.clear();
      router.replace("Login");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Profil"} />
      <Box backgroundColor="floralwhite">
        <Box py={"$6"} px={'$4'} m={'$4'} rounded={'$2xl'} bg={"$wheat"} >
          <HStack space={"2xl"}>
            <Image
              alt=""
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                marginBottom: 0,
              }}
              source={require('../../assets/welcome.png')}
            />
            <VStack space="md">
              <Text fontSize={23} marginTop={35} style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>Hi, Admin !</Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
      <Box backgroundColor="floralwhite">
        <VStack space="md" height="$full" p={20}>
            
        <TouchableOpacity onPress={logout} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
  <HStack alignItems="center">
    <Ionicons size={20} name="log-out" color="white" />
    <Text style={{ marginLeft: 12, color: 'white' }}> Log Out</Text>
  </HStack>
</TouchableOpacity>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

export default profileadmin;