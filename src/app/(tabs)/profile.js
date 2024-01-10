import { Text, Box, HStack, Image, VStack, ScrollView, Button, ButtonText, FlatList, Divider } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Header } from "../../components";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../../config";
import React, { useState,useEffect } from 'react';
const Profile = () => {
  const [userData, setUserData] = useState({});
  const [data, setData] = useState([]);
  const [name, SetName] = useState({});

// console.log(name)

  useEffect(() => {
    getUserData();

  }, []);

  const getUserData = async() => {
    try {
      const value = await AsyncStorage.getItem("user-data");
      if ( value !== null ) {
        const valueObject = JSON.parse(value);
        setUserData(valueObject);
        ambilnama(valueObject);

      }
    } catch (error) {
      console.error(error)
    }
  };
  const ambilnama = (userData) => {
    const uid = userData.credential.user.uid;
    const dataref = firebase.database().ref("User/" + uid);
    dataref.once("value").then((snapshot) => {
      const dataValue = snapshot.val();
      if (dataValue !== null) {
        const snapshotArr = Object.entries(dataValue).map((item) => ({
          id: item[0],
          ...item[1],
        }));
        console.log("Data from ambilnama function:", snapshotArr);
        if (snapshotArr.length > 0) {
          SetName(snapshotArr[0]);
        }
      }
    });
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
              <Text fontSize={23} marginTop={35} style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>Hi, {name.name} !</Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
      <Box backgroundColor="floralwhite">
        <VStack space="md" height="$full" p={20}>
          {/* <Link
            href={{
              pathname: "/editProfile"
            }}
          >
            <TouchableOpacity backgroundColor="$blue600" borderRadius={"$full"}>
              <ButtonText color="#0C0C0C"> Edit Profile</ButtonText>
            </TouchableOpacity>
          </Link> */}
          <Divider my={0.2} />
          <Link
            href={{
              pathname: "/changepassword"
            }}
          >
            <TouchableOpacity backgroundColor="$blue600" borderRadius={"$full"}>
              <ButtonText color="#0C0C0C"> Change Password</ButtonText>
            </TouchableOpacity>
          </Link>
          <Divider my={0.2} />
          <Link
            href={{
              pathname: "/setting"
            }}
          >
            <TouchableOpacity backgroundColor="$blue600" borderRadius={"$full"}>
              <ButtonText color="#0C0C0C"> Setting</ButtonText>
            </TouchableOpacity>
          </Link>
          <Divider my={0.2} />
          <Link
            href={{
              pathname: "/accordion"
            }}
          >
            <TouchableOpacity backgroundColor="$blue600" borderRadius={"$full"}>
              <ButtonText color="#0C0C0C"> FAQ</ButtonText>
            </TouchableOpacity>
          </Link>
          <Divider my={0.2}/>
          <Link
            href={{
              pathname: "/Aboutus"
            }}
          >
            <TouchableOpacity backgroundColor="$blue600" borderRadius={"$full"}>
              <ButtonText color="#0C0C0C"> About Us</ButtonText>
            </TouchableOpacity>
          </Link>
          <Divider my={0.2}/>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

export default Profile;