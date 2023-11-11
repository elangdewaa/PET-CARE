import { Heading, Box, HStack, Image, VStack, Text, Button, ButtonText, Divider } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Header } from "../../components";
import { SafeAreaView, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const Profile = () => {

  return (
    <>
      <SafeAreaView>
        <Header title={"Profile"} />
        <Box py={"$6"} bg={"$orange"}>

          <Heading ml={"$4"} lineHeight={"$lg"} mb={"$1"} color="$white">
            <HStack space={"2xl"}>
              <Image
                source={require('../../assets/profile1.jpg')}
                alt="funfact 1"
                w="$20"  
                h="$20"
                borderRadius={50}
              />
              <VStack space="md">
                <Text fontSize = {20}>William</Text>
                <Text fontSize = {17}>Kucing Chiro</Text>
              </VStack>
              <Link
                href={{
                  pathname: "/editProfile" 
                }}
              >
                <TouchableOpacity backgroundColor="$blue600" borderRadius={"$full"}>
                  <ButtonText>Edit Profile</ButtonText>
                </TouchableOpacity>
              </Link>
            </HStack>
          </Heading>
        </Box>
        <VStack space="md" p={20} backgroundColor="lightyellow">
          <Text>Ubah Password</Text>
          <Divider my={0.2}/>
          <Text>Setting</Text>
          <Divider my={0.2}/>
        </VStack>
      </SafeAreaView>

    </>
  );
};

export default Profile;
