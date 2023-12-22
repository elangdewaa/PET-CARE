// import React, { useState } from 'react';
// import {
//     StyleSheet,
//     SafeAreaView,
//     ScrollView,
//     View,
//     Text,
//     TouchableOpacity,
//     Switch,
// } from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import Ionicons from '@expo/vector-icons/Ionicons';

// // const SECTIONS = [
// //     {
// //         header: 'Preferences',
// //         items: [
// //             { id: 'language', label: 'Language', type: 'select' },
// //             { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
// //             { id: 'wifi', icon: 'wifi', label: 'Use Wi-Fi', type: 'toggle' },
// //         ],
// //     },
// //     {
// //         header: 'Help',
// //         items: [
// //             { id: 'bug', icon: 'flag', label: 'Report Bug', type: 'link' },
// //             { id: 'contact', icon: 'mail', label: 'Contact Us', type: 'link' },
// //         ],
// //     },
// //     {
// //         header: 'Content',
// //         items: [
// //             { id: 'save', icon: 'save', label: 'Saved', type: 'link' },
// //             { id: 'download', icon: 'download', label: 'Downloads', type: 'link' },
// //         ],
// //     },
// // ];

// const SettingScreen = () => {
//     const [form, setForm] = useState({
//         language: 'English',
//         darkMode: true,
//         wifi: true,
//     });

//     return (
//         <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
//             <ScrollView>
//                 {/* {SECTIONS.map(({ items }) => ( */}
//                     <View>
//                         <View style={{
//                             borderTopWidth: 1,
//                             borderBottomWidth: 1,
//                             borderColor: '#e3e3e3',
//                         }}>
//                             {/* {items.map(({ id, label, icon, type, value }, index) => { */}
//                                 return (
//                                     <View
//                                         style={{
//                                             paddingLeft: 24,
//                                             backgroundColor: '#fff',
//                                             borderTopWidth: 1,
//                                             borderColor: '#e3e3e3',
//                                         }}>

//                                         <TouchableOpacity
//                                             onPress={() => {
//                                                 // handle onPress
//                                             }}>
//                                             <View style={{
//                                                 flexDirection: 'row',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'flex-start',
//                                                 paddingRight: 24,
//                                                 height: 50,
//                                             }}>
//                                                 <FeatherIcon
//                                                     style={{ marginRight: 12, color: "#616161" }}
//                                                     size={22}
//                                                 />

//                                                 <Text style={{
//                                                     fontSize: 17,
//                                                     fontWeight: '500',
//                                                     color: '#000',
//                                                 }}>Language</Text>

//                                                 <View style={{
//                                                     flexGrow: 1,
//                                                     flexShrink: 1,
//                                                     flexBasis: 0,
//                                                 }} />

//                                                 {type === 'select' && (
//                                                     <Text style={{
//                                                         fontSize: 17,
//                                                         color: '#616161',
//                                                         marginRight: 4,
//                                                     }}>{language}</Text>
//                                                 )}

//                                                 {type === 'toggle' && (
//                                                     <Switch
//                                                         onChange={(val) => setForm({ ...form, [id]: val })}
//                                                         value={form[id]}
//                                                     />
//                                                 )}

//                                                 {(type === 'select' || type === 'link') && (
//                                                     <FeatherIcon
//                                                         color="#ababab"
//                                                         name="chevron-right"
//                                                         size={22}
//                                                     />
//                                                 )}
//                                             </View>
//                                         </TouchableOpacity>
//                                     </View>
//                                 );
//                             {/* })} */}
//                         </View>
//                     </View>
//                 {/* ))} */}
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({


//     sectionHeader: {
//         paddingHorizontal: 24,
//         paddingVertical: 8,
//     },
//     sectionHeaderText: {
//         fontSize: 14,
//         fontWeight: '600',
//         color: '#a7a7a7',
//         textTransform: 'uppercase',
//         letterSpacing: 1.2,
//     },
//     sectionBody: {
//         borderTopWidth: 1,
//         borderBottomWidth: 1,
//         borderColor: '#e3e3e3',
//     },
//     title: {
//         fontSize: 32,
//         fontWeight: '700',
//         color: '#1d1d1d',
//         marginBottom: 6,
//     },
//     subtitle: {
//         fontSize: 15,
//         fontWeight: '500',
//         color: '#929292',
//     },
//     profile: {
//         padding: 16,
//         flexDirection: 'column',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         borderTopWidth: 1,
//         borderBottomWidth: 1,
//         borderColor: '#e3e3e3',
//     },
//     profileAvatar: {
//         width: 60,
//         height: 60,
//         borderRadius: 9999,
//     },
//     profileName: {
//         marginTop: 12,
//         fontSize: 20,
//         fontWeight: '600',
//         color: '#090909',
//     },
//     profileEmail: {
//         marginTop: 6,
//         fontSize: 16,
//         fontWeight: '400',
//         color: '#848484',
//     },
//     profileAction: {
//         marginTop: 12,
//         paddingVertical: 10,
//         paddingHorizontal: 16,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#007bff',
//         borderRadius: 12,
//     },
//     profileActionText: {
//         marginRight: 8,
//         fontSize: 15,
//         fontWeight: '600',
//         color: '#fff',
//     },
//     row: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         paddingRight: 24,
//         height: 50,
//     },
//     rowWrapper: {
//         paddingLeft: 24,
//         backgroundColor: '#fff',
//         borderTopWidth: 1,
//         borderColor: '#e3e3e3',
//     },
//     rowIcon: {
//         marginRight: 12,
//     },
//     rowLabel: {
//         fontSize: 17,
//         fontWeight: '500',
//         color: '#000',
//     },
//     rowValue: {
//         fontSize: 17,
//         color: '#616161',
//         marginRight: 4,
//     },
//     rowSpacer: {
//         flexGrow: 1,
//         flexShrink: 1,
//         flexBasis: 0,
//     },
// });

// export default SettingScreen;


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
            <VStack space="md" p={20} backgroundColor="lightyellow">
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
                    <Text style={{ marginLeft: 12 }}> Notifikasi</Text>
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