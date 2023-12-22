import {
  Heading,
  Box,
  Divider,
  Center,
  Image,
  HStack,
  VStack,
  Text,
  ScrollView,
  ButtonText,
} from "@gluestack-ui/themed";
import { Header } from "../../components";
import { SliderBox } from "react-native-image-slider-box";
import { Link, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  return (
    <>
      <Header title={"Home"} />
      <Box bg={"$orange"}>
      
        <Center>
        <ScrollView
          horizontal={true} 
          contentContainerStyle={{ paddingHorizontal: 0 }} >
        
        
        <SliderBox
          images ={[
            require("../../assets/poster.png"),
            require("../../assets/poster2.png"),
            require("../../assets/poster3.png"),
          ]}
          autoplay
          circleLoop
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          style={{ width: 400, height: 220, alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",}}
        />
      
      </ScrollView>
      </Center>
      </Box>
      <Divider />

    <ScrollView
          vertical={true} 
          contentContainerStyle={{ paddingVertical: 1 }} >   

    <Box backgroundColor="floralwhite" height="$full">
      <Center>

  <HStack space="xl" paddingTop="$8" paddingBottom="$7">
  
    <Link href={{ pathname: "/reservation" }} >

   <TouchableOpacity >
    <Box w={100} h="$20" bg= "$coral" borderRadius="$3xl" borderWidth={2} justifyContent="center" alignItems="center" softShadow="" >

  <Ionicons name="clipboard-sharp" size={35} color="floralwhite" paddingBottom="3"/> 
  <VStack ><Text color="floralwhite" fontWeight="bold">Reservation</Text></VStack>
    </Box>
    </TouchableOpacity>
    </Link>
  
    <Link href={{ pathname: "/status" }} >

   <TouchableOpacity >
  <Box w={100} h="$20" bg= "$coral" borderRadius="$3xl" borderWidth={2} justifyContent="center" alignItems="center" >
  <Ionicons name="checkmark-sharp" size={40} color="floralwhite"/> 
  <VStack paddingBottom={10}><Text fontWeight="bold" color="floralwhite">Status</Text></VStack>
    </Box>
    </TouchableOpacity>
    </Link>
    
    <Link href={{ pathname: "/profile" }} >

<TouchableOpacity >
    <Box w={100} h="$20" bg= "$coral" borderRadius="$3xl" borderWidth={2} justifyContent="center" alignItems="center" >

<Ionicons name="person-outline" size={35} color="floralwhite" paddingBottom="3"/> 
<VStack ><Text color="floralwhite" fontWeight="bold" >Profile</Text></VStack>
  </Box>
  </TouchableOpacity>
    </Link>
</HStack>
<Divider bg="$trueGray300" $dark-bg="$backgroundDark700" />

<Box bg="coral" p="$5" borderRadius="$md" alignSelf="flex-start"
width="100%"
            borderWidth={1.5}
            py="$2"
            px="$10">
  <Text color="white">Artikel</Text>
</Box>
    
        <HStack>
        <Box
      maxWidth="$64"
      borderColor="$borderLight200"
      borderRadius="$lg"
      borderWidth="$1"
      my="$4"
      overflow="hidden"
      $base-mx="$5"
      $dark-bg="$backgroundDark900"
      $dark-borderColor="$borderDark800"
    >
      <Box>
        <Image
          h={150}
          width="100%"
          source={{
            uri: "https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
          }}
        />
      </Box>
      <VStack px="$6" pt="$4" pb="$6">
        <Text $dark-color="$textLight200" fontSize="$sm" my="$1.5">
          August 16, 2023
        </Text>
        <Heading $dark-color="$textLight200" size="sm">
          Fresh Orange
        </Heading>
        <Text my="$1.5" $dark-color="$textLight200" fontSize="$xs">
          Oranges are a great source of vitamin C, which is essential for a
          healthy immune system. Oranges are a great source of vitamin C, which
          is important for maintaining a healthy immune system.
        </Text>
        <Text
          $dark-color="$textLight200"
          my="$1.5"
          fontSize="$xs"
          isTruncated="true"
        >
          Vitamin C also helps with the absorption of iron and the production of
          collagen, which supports healthy skin, teeth, and bones.
        </Text>
        <Link href="https://gluestack.io/" isExternal>
          <Text fontSize="$sm" color="$pink600">
            Find out more
          </Text>
        </Link>
      </VStack>
    </Box>
    
        </HStack>
</Center>
  </Box>
  </ScrollView>
    </>
  );
};

export default Home;
