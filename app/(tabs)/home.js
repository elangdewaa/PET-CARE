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
        <ScrollView
          vertical={true}
          contentContainerStyle={{ paddingVertical: 1 }}
        >
          <SliderBox
            images={[
              require("../../assets/poster.png"),
              require("../../assets/poster2.png"),
              require("../../assets/poster3.png"),
            ]}
            autoplay
            circleLoop
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            style={{
              width: 400,
              height: 220,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
          <Box backgroundColor="floralwhite" height="$full" paddingBottom={200}>
            <Center>
              <HStack space="xl" paddingTop="$8" paddingBottom="$7">
                <Link href={{ pathname: "/reservation" }}>
                  <TouchableOpacity>
                    <Box
                      w={100}
                      h="$20"
                      bg="$coral"
                      borderRadius="$3xl"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                      softShadow=""
                    >
                      <Ionicons
                        name="clipboard-sharp"
                        size={35}
                        color="floralwhite"
                        paddingBottom="3"
                      />
                      <VStack>
                        <Text color="floralwhite" fontWeight="bold">
                          Reservation
                        </Text>
                      </VStack>
                    </Box>
                  </TouchableOpacity>
                </Link>

                <Link href={{ pathname: "/status" }}>
                  <TouchableOpacity>
                    <Box
                      w={100}
                      h="$20"
                      bg="$coral"
                      borderRadius="$3xl"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Ionicons
                        name="checkmark-sharp"
                        size={40}
                        color="floralwhite"
                      />
                      <VStack paddingBottom={10}>
                        <Text fontWeight="bold" color="floralwhite">
                          Status
                        </Text>
                      </VStack>
                    </Box>
                  </TouchableOpacity>
                </Link>

                <Link href={{ pathname: "/profile" }}>
                  <TouchableOpacity>
                    <Box
                      w={100}
                      h="$20"
                      bg="$coral"
                      borderRadius="$3xl"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Ionicons
                        name="person-outline"
                        size={35}
                        color="floralwhite"
                        paddingBottom="3"
                      />
                      <VStack>
                        <Text color="floralwhite" fontWeight="bold">
                          Profile
                        </Text>
                      </VStack>
                    </Box>
                  </TouchableOpacity>
                </Link>
              </HStack>
              <Divider bg="$trueGray300" $dark-bg="$backgroundDark700" />

              <Box
                bg="coral"
                p="$5"
                borderRadius="$md"
                alignSelf="flex-start"
                width="100%"
                borderWidth={1.5}
                py="$2"
                px="$10"
              >
                <Text color="white" fontWeight="bold" size="lg">
                  Artikel
                </Text>
              </Box>
              <HStack>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={{ paddingHorizontal: 0 }}
                >
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
                      </Box>
                      <VStack px="$6" pt="$4" pb="$0">
          
                        <Heading $dark-color="$textLight200" size="sm">
                          Fresh Orange
                        </Heading>
                        <Text
                          my="$1.5"
                          $dark-color="$textLight200"
                          fontSize="$xs"
                        >
                          Oranges are a great source of vitamin C, which is
                          essential for a healthy immune system. Oranges are a
                          great source of vitamin C, which is important for
                          maintaining a healthy immune system.
                        </Text>
                      </VStack>
                    </Box>
                  </HStack>
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
                      </Box>
                      <VStack px="$6" pt="$4" pb="$0">
          
                        <Heading $dark-color="$textLight200" size="sm">
                          Fresh Orange
                        </Heading>
                        <Text
                          my="$1.5"
                          $dark-color="$textLight200"
                          fontSize="$xs"
                        >
                          Oranges are a great source of vitamin C, which is
                          essential for a healthy immune system. Oranges are a
                          great source of vitamin C, which is important for
                          maintaining a healthy immune system.
                        </Text>
                      </VStack>
                    </Box>
                  </HStack><HStack>
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
                      </Box>
                      <VStack px="$6" pt="$4" pb="$0">
          
                        <Heading $dark-color="$textLight200" size="sm">
                          Fresh Orange
                        </Heading>
                        <Text
                          my="$1.5"
                          $dark-color="$textLight200"
                          fontSize="$xs"
                        >
                          Oranges are a great source of vitamin C, which is
                          essential for a healthy immune system. Oranges are a
                          great source of vitamin C, which is important for
                          maintaining a healthy immune system.
                        </Text>
                      </VStack>
                    </Box>
                  </HStack>
                </ScrollView>
              </HStack>
            </Center>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
};

export default Home;
