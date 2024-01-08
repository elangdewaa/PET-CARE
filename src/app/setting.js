import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Switch } from 'react-native';
import { Divider, HStack, VStack, ButtonText } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useNavigation } from "expo-router";
import { Header } from '../components';

const SettingScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onSelectLanguage = (language) => {
    setSelectedLanguage(language);
    console.log('Bahasa terpilih: ${languageId}');
  };
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      // Ambil data dari AsyncStorage
      const value = await AsyncStorage.getItem("user-data");
      if (value !== null) {
        const valueObject = JSON.parse(value);
        // Update value state bernama "data"
        setUserData(valueObject);
        // console.log(valueObject);
        // Fetch Data
        // fetchData(valueObject);
      }
    } catch (e) {
      console.error(e);
    }
  };
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
  const handleLanguagePress = () => {
    navigation.navigate('LanguageSelection', { onSelectLanguage });
  };

  return (

    <SafeAreaView>
      <Header title={"Setting"} />
      <VStack space="md" p={20} backgroundColor="lightyellow" height="$full">

        <TouchableOpacity onPress={handleLanguagePress}>
          <HStack alignItems="center">
            <Ionicons size={20} name="language" />
            <Text fontSize="lg"
              style={{ marginLeft: 12 }}>
              Bahasa
            </Text>
            {selectedLanguage && (
              <View>
                <Text> yang Dipilih: {selectedLanguage}</Text>
              </View>
            )}
          </HStack>
        </TouchableOpacity>

        <Divider my={0.2} />
        <HStack alignItems="center">
          <Ionicons size={20} name="notifications" />
          <Text style={{ marginLeft: 12, marginRight: 190 }}> Notifikasi</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#23B0FF' }}
            thumbColor={isEnabled ? '#f4f3f4E' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </HStack>
        <Divider my={0.2} />

        <TouchableOpacity onPress={logout}>
          <HStack alignItems="center">
            <Ionicons size={20} name="log-out" />
            <Text style={{ marginLeft: 12 }}> Log Out</Text>

          </HStack>
        </TouchableOpacity>
      </VStack>
    </SafeAreaView >
  );
};

export default SettingScreen;