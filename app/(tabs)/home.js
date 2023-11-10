import {
    Heading,
    FlatList,
    Box,
    Divider,
    Spinner,
    Center,
    Image,
    HStack,
    VStack,
    Text,
    ScrollView,
  } from "@gluestack-ui/themed";
  import { Categories, Header, NewsItem } from "../../components";
  import { useEffect, useState } from "react";
  
  const Home = () => {
    const [isLoadingNews, setIsLoadingNews] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [news, setNews] = useState([]);
    const [activeCategoryNews, setActiveCategoryNews] = useState("terbaru");
  
    const getNews = (categoryName) => {
      fetch(`https://api-berita-indonesia.vercel.app/tribun/${categoryName}/`)
        .then((response) => response.json())
        .then((json) => setNews(json.data.posts))
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoadingNews(false);
          setIsFetching(false);
        });
    };
  
    const categoriesHandler = (categoryName) => {
      setIsLoadingNews(true);
      setActiveCategoryNews(categoryName);
      getNews(categoryName);
    };
  
    useEffect(() => {
      getNews(activeCategoryNews);
    }, []);
  
    const onRefresh = () => {
      setIsFetching(true);
      getNews(activeCategoryNews);
    };
  
    const renderitem = ({ item }) => {
      return <NewsItem item={item} />;
    };
  
    return (
      <>
        <Header title={"Home"} />
        <Box py={"$6"} bg={"$orange"}>
        
          <Heading ml={"$4"} lineHeight={"$lg"} mb={"$4"} color="$white">
            Animal Fun Fact 
          </Heading>
          <Center>
          <ScrollView
            horizontal={true} 
            contentContainerStyle={{ paddingHorizontal: 16 }} >
          
          <HStack space={"2xl"}>
          <Image
          source={require('../../assets/kucing.jpg')} // Gantilah dengan path gambar yang sesuai
          alt="funfact 1"
          w="$20"  // Sesuaikan ukuran gambar sesuai kebutuhan
          h="$20"
          borderRadius={20}
        />
      
          <Image
          source={require("../../assets/kucing2.jpg")}
          w="$20"
          h="$20"
          alt="funfact 2"
          role="img"
          borderRadius={20}
        />
        
          <Image
          source={require("../../assets/kucing4.jpg")}
          w="$20"
          h="$20"
          alt="funfact 3"
          role="img"
          borderRadius={20}
        />

          <Image
          source={require("../../assets/anjing1.jpg")}
          w="$20"
          h="$20"
          alt="funfact 3"
          role="img"
          borderRadius={20}
        />
         <Image
          source={require("../../assets/kelinci1.jpg")}
          w="$20"
          h="$20"
          alt="funfact 3"
          role="img"
          borderRadius={20}
        />
        <Image
          source={require("../../assets/hamster1.jpg")}
          w="$20"
          h="$20"
          alt="funfact 3"
          role="img"
          borderRadius={20}
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
        w="$40" // Sesuaikan ukuran gambar sesuai kebutuhan
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
        w="$40" // Sesuaikan ukuran gambar sesuai kebutuhan
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
        w="$40" // Sesuaikan ukuran gambar sesuai kebutuhan
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
        w="$40" // Sesuaikan ukuran gambar sesuai kebutuhan
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
        w="$40" // Sesuaikan ukuran gambar sesuai kebutuhan
        h="$40"
      />
      <VStack space="md">
        <Text>Ini adalah gambar kucing.</Text>
        <Text>Ini adalah penjelasan tentang kucing.</Text>
      </VStack>
    </HStack>
    </ScrollView>
        {isLoadingNews ? (
          <Center flex={1}>
            <Spinner size={"large"} color={"$black"} />
          </Center>
        ) : (
          <FlatList
            // data={news}
            // renderItem={renderitem}
            // keyExtractor={(item) => item.link}
            // showsVerticalScrollIndicator={false}
            refreshing={isFetching}
            onRefresh={onRefresh}
            style={{ backgroundColor: "lightyellow" }}
          />
        )}
      </>
    );
  };
  
  export default Home;
  