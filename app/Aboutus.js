import {
    Heading,
    Text,
    Center,
    Image,
    Box,
    VStack,
    Link,
    ScrollView,
    FlatList,
    HStack,
    Button,
  } from "@gluestack-ui/themed";
  import { Header } from "../components";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  const Aboutus = () => {
  
    return (
      <>
        <SafeAreaView flex={1}>
          <Box>
            <ScrollView>
              <Header title={"About us"} />
              <Center>
                <Heading
                  ml={"$1"}
                  lineHeight={"$5xl"}
                  mb={"$7"}
                  color="$black"
                  textAlign="Center"
                >
                  Our Services
                </Heading>
                <Image
                  size="xl"
                  borderRadius="$full"
                  source={{
                    uri: "https://www.aspca.org/sites/default/files/general-pet-care_facebook.jpg",
                  }}
                />
                <Text textAlign="Center" ml="$5" mt="$10">
                  Menyediakan Layanan Terbaik Untuk Hewan Kesayangan Kamu
                </Text>
  
                <Box
                  maxWidth="$64"
                  borderColor="$borderLight200"
                  borderRadius="$lg"
                  borderWidth="$1"
                  my="$4"
                  overflow="hidden"
                  sx={{
                    "@base": {
                      mx: "$5",
                    },
                    _dark: {
                      bg: "$backgroundDark900",
                      borderColor: "$borderDark800",
                    },
                  }}
                >
                  
                  <Box>
                    <Image
                      borderRadius="$3xl"
                      h={150}
                      width="100%"
                      source={{
                        uri: "data:image/jpeg;base64,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",
                      }}
                    />
                  </Box>
                  <VStack px="$6" pt="$4" pb="$6">
                    <Heading _dark={{ color: "$textLight200" }} size="sm">
                      Grooming
                    </Heading>
                    <Text
                      my="$1.5"
                      _dark={{ color: "$textLight200" }}
                      fontSize="$xs"
                    >
                      Grooming hewan secara teratur memungkinkan pemiliknya untuk
                      mencegah penyakit atau kondisi yang dapat berkembang menjadi
                      penyakit lebih awal. Dengan begitu, penyakit yang dapat
                      menyerang bisa diobati lebih cepat dan lebih efisien,
                      sehingga tidak memiliki efek jangka panjang pada hewan
                      peliharaan. Perawatan ini dapat dilakukan sendiri atau
                      melalui profesional.
                    </Text>
                    <Link
                      href="https://www.halodoc.com/artikel/penjelasan-tentang-grooming-untuk-hewan-peliharaan"
                      isExternal
                    >
                      <Text fontSize="$sm F" color="$pink600">
                        Find out more
                      </Text>
                    </Link>
                  </VStack>
                  </Box>
                  <Box
            maxWidth="$64"
            borderColor="$borderLight200"
            borderRadius="$lg"
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
              "@base": {
                mx: "$5",
              },
              _dark: {
                bg: "$backgroundDark900",
                borderColor: "$borderDark800",
              },
            }}
          >
            <Box>
              <Image
              borderRadius="$3xl"
                h={150}
                width="100%"
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              />
            
            </Box>
            <VStack px="$6" pt="$4" pb="$6">
              
              <Heading _dark={{ color: "$textLight200" }} size="sm">
                Hotel
              </Heading>
              <Text my="$1.5" _dark={{ color: "$textLight200" }} fontSize="$xs">
              Beberapa orang tidak bisa mengajak hewan peliharaan tersayang saat sedang bepergian, entah karena jarak yang ditempuh cukup jauh atau pilihan transportasi yang kurang memadai. Walhasil, pet hotel atau tempat penitipan hewan menjadi alternatif untuk menitipkan hewan peliharaan selama ditinggal bepergian, terlebih saat tidak ada kerabat atau keluarga yang bisa menjaga sahabat bulu.
              </Text>
              <Link href="https://www.kompas.com/homey/read/2022/05/24/133700176/jangan-menitipkan-hewan-peliharaan-sebelum-berkunjung-ke-dokter#google_vignette" isExternal>
                <Text fontSize="$sm F" color="$pink600">
                  Find out more
                </Text>
              </Link>
            </VStack>
            
                </Box>
                  </Center>
             
            </ScrollView>
            </Box>
        </SafeAreaView>
      </>
    );
  };
  
  export default Aboutus;
  