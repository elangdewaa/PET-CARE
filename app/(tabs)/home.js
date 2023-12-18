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
  } from "@gluestack-ui/themed";
  import { Header } from "../../components";
  import { SliderBox } from "react-native-image-slider-box";
  
  const Home = () => {
    return (
      <>
        <Header title={"Home"} />
        <Box py={"$6"} bg={"$orange"}>
        
          <Center>
          <ScrollView
            horizontal={true} 
            contentContainerStyle={{ paddingHorizontal: 16 }} >
          
          <HStack space={"2xl"}>
          <SliderBox
            images ={[
              require("../../assets/anjing1.jpg"),
              require("../../assets/anjing1.jpg"),
              require("../../assets/anjing1.jpg"),
              require("../../assets/anjing1.jpg"),
              require("../../assets/anjing1.jpg"),
            ]}
            autoplay
            circleLoop
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10
            }}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            
            resizeMode={"cover"}
            
            style={{ width: "200", height: 150, marginTop: 0 }}
          />
        </HStack>
        </ScrollView>
        </Center>
        </Box>
        <Divider />

      <ScrollView
            vertical={true} 
            contentContainerStyle={{ paddingVertical: 1 }} >   
    <HStack space={"md"} backgroundColor="lightyellow">
      <Image
        source={require('../../assets/ikan1.jpg')}
        alt="Gambar Kucing"
        w="$40" 
        h="$40"
      />
      <VStack space="md" >
        <Text>Ikan Hias Temuan Baru</Text>
        <Text>Ikan koi adalah ikan hias.</Text>
      </VStack>
    </HStack>
  
    <HStack space={"md"} backgroundColor="lightyellow">
      <Image
        source={require('../../assets/domba1.jpg')}
        alt="Gambar Kucing"
        w="$40" 
        h="$40"
      />
      <VStack space="md">
        <Text>Ini Adalah Gambar Domba</Text>
        <Text>Domba dapat ternak.</Text>
      </VStack>
    </HStack>

    <HStack space={"md"} backgroundColor="lightyellow">
      <Image
        source={require('../../assets/bird1.jpg')}
        alt="Gambar Kucing"
        w="$40" 
        h="$40"
      />
      <VStack space="md">
        <Text>Burung Yang Hidup di Air</Text>
        <Text>Apa saja jenis burung?</Text>
      </VStack>
    </HStack>

    <HStack space={"md"} backgroundColor="lightyellow">
      <Image
        source={require('../../assets/sugarglider.jpg')}
        alt="Gambar Kucing"
        w="$40" 
        h="$40"
      />
      <VStack space="md">
        <Text>Cara Merawat Sugarglider</Text>
        <Text>ini adalah sugarglider</Text>
      </VStack>
    </HStack>

    <HStack space={"md"} backgroundColor="lightyellow" >
      <Image
        source={require('../../assets/hamster2.jpg')}
        alt="Gambar Kucing"
        w="$40" 
        h="$40"
      />
      <VStack space="md">
        <Text>Ini adalah gambar kucing.</Text>
        <Text>Ini adalah penjelasan tentang kucing.</Text>
      </VStack>
    </HStack>
    </ScrollView>
      </>
    );
  };

  export default Home;
  