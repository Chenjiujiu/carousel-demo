/**
 * @format
 */

import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC<any> = memo(
  () => {
    const layout = useWindowDimensions();
    const navigation= useNavigation()
    const [autoPlay, setAutoPlay] = useState(true);
    const dataList = [
      { title: '1111111' },
      { title: '222222222' },
      { title: '3333333' },
    ];

    const configurePanGesture = useCallback((gestureChain: any) => {
      gestureChain.activeOffsetX([-10, 10]);
    }, []);

    const handlePress = () => {
      navigation.navigate('Desc')
    }

    const renderItem = useCallback(
      ({ item }: { item: any }) => {
        return (
          <View>
            <Text>{item.title}</Text>
          </View>
        );
      },
      [],
    );

    return (
      <View>
        <View style={{ width: layout.width, height: 36, overflow: 'hidden' }}>
          <Carousel
            loop={true}
            width={layout.width}
            height={36}
            data={dataList}
            autoFillData={true}
            autoPlay={autoPlay}
            autoPlayInterval={2 * 1000}
            renderItem={renderItem}
            onConfigurePanGesture={configurePanGesture}
          />
        </View>
        <Pressable onPress={handlePress} >
          <Text> go desc</Text>
        </Pressable>
      </View>
    );
  },
);

export default HomeScreen;
