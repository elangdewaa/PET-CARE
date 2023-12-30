// LanguageSelectionScreen.js
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { VStack, Divider, HStack } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Header } from "../components";

const languages = [
  { id: 'en', name: 'English' },
  { id: 'id', name: 'Bahasa Indonesia' },
  { id: 'uk', name: 'English UK' },
];

const LanguageSelectionScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const navigation = useNavigation();

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    // Memanggil fungsi onSelectLanguage langsung di sini
    onSelectLanguage(language.id);
    navigation.goBack();
  };

  // Modifikasi fungsi onSelectLanguage agar bisa diserialisasi
  const onSelectLanguage = (languageId) => {
    console.log('Bahasa terpilih: ${languageId}');
    // Lakukan apa pun yang perlu dilakukan dengan bahasa yang terpilih
  };

  return (
    <SafeAreaView style={{backgroundColor: '#EDE4D3',}}>
      <Header title={"Bahasa"} />
      <VStack space="md" height="$full" p={20}>
        <FlatList
          data={languages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleLanguageSelect(item)}>
              <HStack alignItems="center">
                <Ionicons size={20} name="language" />
                <Text fontSize="lg" style={{ marginLeft: 12 }}>
                  {item.name}
                </Text>
                {selectedLanguage === item.id && (
                  <View>
                    <Text> yang Dipilih</Text>
                  </View>
                )}
              </HStack>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <Divider my={10} />}
        />
      </VStack>
    </SafeAreaView>
  );
};

export default LanguageSelectionScreen;