import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Header } from "../../components";
import { Box, HStack, VStack } from '@gluestack-ui/themed';

const noHead = { headerShown: false };

const all_reservation = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (

    <ScrollView flex={1} backgroundColor="floralwhite">
      <Header title={"Welcome, Admin"} />
      <Box>
        <Box style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,
          height: 60,
          borderWidth: 0.5,
          borderRadius: 15,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'floralwhite',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
          <TouchableOpacity style={{
            width: 155,
            height: 50,
            backgroundColor: selectedTab == 0 ? 'coral' : 'floralwhite',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onPress={() => {
              setSelectedTab(0)
            }}>
            <Text style={{
              fontSize: 17,
              lineHeight: 24,
              fontWeight: '600',
              color: selectedTab == 0 ? '#floralwhite' : '#000',
            }}>
              Grooming</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            width: 155,
            height: 50,
            backgroundColor: selectedTab == 1 ? 'coral' : 'floralwhite',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onPress={() => {
              setSelectedTab(1)
            }}>
            <Text style={{
              fontSize: 17,
              lineHeight: 24,
              fontWeight: '600',
              color: selectedTab == 1 ? 'floralwhite' : '#000'
            }}>
              Penitipan</Text>
          </TouchableOpacity>
        </Box>
        {selectedTab == 0 ? (
          <Box py={"$2"} px={'$4'} m={'$1'} rounded={'$2xl'} borderRadius={'$7'}>
            <Box style={{
              width: '95%',
              marginTop: 10,
              height: 30,
              flexDirection: 'row',
              backgroundColor: '#ECE1CC',
              borderColor: '#ECE1CC',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
              <VStack space={"2xl"} style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <HStack>
                  <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#000' }}>Jasmine</Text>

                </HStack>
              </VStack>

            </Box>
            <Box style={{
              width: '95%',
              height: 140,
              flexDirection: 'row',
              backgroundColor: '#FBF2E1',
              borderColor: '#FBF2E1',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
              <VStack>
                <HStack>
                  <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Pet Name</Text>
                  <Text style={{ fontSize: 17, color: '#000', paddingLeft: '20%' }}> : Mochi </Text>
                </HStack>

                <HStack>
                  <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Jenis Paket</Text>
                  <Text style={{ fontSize: 17, color: '#000', paddingLeft: '8%' }}> : Dry Grooming + Anti Kutu </Text>
                </HStack>
                <HStack>
                  <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Price</Text>
                  <Text style={{ fontSize: 17, color: '#000', paddingLeft: '30%' }}> : Rp75.000 </Text>
                </HStack>
                <HStack>
                  <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Reservation for</Text>
                  <Text style={{ fontSize: 17, color: '#000', paddingLeft: '9%' }}> : 10/12/2023 </Text>
                </HStack>
              </VStack>
            </Box>
          </Box>
        ) : (
          <Box style={{ flex: 1, alignItems: 'center', }}>
            <Box style={{
              width: '95%',
              marginTop: 20,
              height: 30,
              flexDirection: 'row',
              backgroundColor: '#ECE1CC',
              borderColor: '#ECE1CC',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
              <VStack space={"2xl"} style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <HStack>
                  <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: '600', color: '#000' }}>Dhila</Text>
                </HStack>
              </VStack>

            </Box>
            <Box style={{
              width: '95%',
              height: 140,
              flexDirection: 'row',
              backgroundColor: '#FBF2E1',
              borderColor: '#FBF2E1',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
              <VStack>
                <HStack>
                  <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Pet Name</Text>
                  <Text style={{ fontSize: 17, color: '#000', paddingLeft: '20%' }}> : Pony </Text>
                </HStack>
                <HStack>
                  <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Jenis Paket</Text>
                  <Text style={{ fontSize: 17, color: '#000', paddingLeft: '8%' }}> : Room 1 </Text>
                </HStack>
                <HStack>
                  <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Price</Text>
                  <Text style={{ fontSize: 17, color: '#000', paddingLeft: '30%' }}> : Rp100.000 </Text>
                </HStack>
                <HStack>
                  <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>Reservation for</Text>
                  <Text style={{ fontSize: 17, color: '#000', paddingLeft: '9%' }}> : 06/12/2023 </Text>
                </HStack>
              </VStack>
            </Box>
            <Text>Penitipan</Text>
          </Box>
        )}
      </Box>
    </ScrollView>
  )
}

export default all_reservation