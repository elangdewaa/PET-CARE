import { Header } from "../../components";
import React from 'react';
import { ScrollView, Box, VStack, Text, Link, Image, Heading, TouchableOpacity } from "@gluestack-ui/themed";


const noHead = { headerShown: false };

const Profile = () => {
  return (
    <>
      <Header title={"Welcome, Admin"} />
      <ScrollView flex={1} backgroundColor="floralwhite">
       {/* isi konten */}
      </ScrollView>
    </>
  );
};

export default Profile;