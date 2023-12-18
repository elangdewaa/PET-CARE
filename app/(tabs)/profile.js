import { Text, Heading, Box, HStack, Image, VStack, ScrollView, Button, ButtonText, FlatList, Divider } from "@gluestack-ui/themed";
import { Link, useLocalSearchParams } from "expo-router";
import { Header } from "../../components";
import { SafeAreaView } from "react-native";
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
                <Text fontSize={20}>Jasmine</Text>
                <Text fontSize={17}>Kucing Chiro</Text>
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
        <Link
            href={{
              pathname: "/changepassword"
            }}
          >
            <TouchableOpacity backgroundColor="$blue600" borderRadius={"$full"}>
              <ButtonText color="#0C0C0C"> Ubah Password</ButtonText>
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
        </VStack>

      </SafeAreaView >

    </>
  );
};

export default Profile;