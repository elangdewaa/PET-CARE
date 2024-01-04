import { Text, Box, HStack, Image, VStack, ScrollView, Button, ButtonText, FlatList, Divider } from "@gluestack-ui/themed";
import { Link, useLocalSearchParams } from "expo-router";
import { Header } from "../../components";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = () => {

  return (
    <>
      <SafeAreaView>
        <Header title={"Profile"} />
        <Box backgroundColor="floralwhite">
        < Box py={"$6"} px={'$4'} m={'$4'} rounded={'$2xl'} bg={"$wheat"} >
    
          
           
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
                <Text fontSize={20} marginTop={20} style={{ fontFamily: 'Helvetica' }}>Hi, Admin !</Text>
                <Text fontSize={17} style={{ fontFamily: 'Helvetica' }}>Kucing Chiro</Text>
              </VStack>
            </HStack>
          
        </Box>
        </Box>
        <Box backgroundColor="floralwhite">
          <VStack space="md" height="$full" p={20}>
          <Link
                href={{
                  pathname: "/editProfile"
                }}
              >
                <TouchableOpacity backgroundColor="$blue600" borderRadius={"$full"}>
                <ButtonText color="#0C0C0C"> Edit Profile</ButtonText>
              </TouchableOpacity>
          </Link>
          <Divider my={0.2} />
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
            <Divider my={0.2}/>
          </VStack>
        </Box>
        
      </SafeAreaView >

    </>
  );
};

export default Profile;