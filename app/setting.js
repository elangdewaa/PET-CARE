import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Switch } from 'react-native';
import { Divider, HStack, VStack, ButtonText } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useNavigation } from "expo-router";

const SettingScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const navigation = useNavigation();

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const onSelectLanguage = (language) => {
        setSelectedLanguage(language);
        console.log('Bahasa terpilih: ${languageId}');
    };

    const handleLanguagePress = () => {
        navigation.navigate('LanguageSelection', { onSelectLanguage });
    };

    return (
        <SafeAreaView>
            <VStack space="md" p={20} backgroundColor="lightyellow" height="$full">
                <TouchableOpacity onPress={handleLanguagePress}>
                    <HStack alignItems="center">
                        <Ionicons size={20} name="language" />
                        <Text fontSize="lg"
                            style={{ marginLeft: 12 }}>
                            Bahasa
                        </Text>
                        {selectedLanguage && (
                            <View>
                                <Text> yang Dipilih: {selectedLanguage}</Text>
                            </View>
                        )}
                    </HStack>
                </TouchableOpacity>

                <Divider my={0.2} />
                <HStack alignItems="center">
                    <Ionicons size={20} name="notifications" />
                    <Text style={{ marginLeft: 12, marginRight:190 }}> Notifikasi</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </HStack>
                <Divider my={0.2} />
                <HStack alignItems="center">
                    <Ionicons size={20} name="log-out" />
                    <Text style={{ marginLeft: 12 }}> Log Out</Text>
                </HStack>
            </VStack>
        </SafeAreaView >
    );
};

export default SettingScreen;