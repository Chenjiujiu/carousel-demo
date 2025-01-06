/**
 * @format
 */

import { Text, View, StyleSheet, SafeAreaView, Animated, ScrollView } from 'react-native';
import React, { memo, useState } from 'react';

const DescScreen: React.FC<any> = memo(
  () => {
    const [count, setCount] = useState(1)

    const handleAdd = () => {
      setCount(prevState => {
        return prevState + 1
      })
    }

    return (
      <SafeAreaView style={styles.wrapper} edges={['bottom']}>
        <ScrollView
          bounces={false}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={160}
          style={styles.wrapper}
        >
          <View style={styles.item}>
            <Text>test-1</Text>
          </View>
          <View style={styles.item}>
            <Text>test-2</Text>
          </View>
          <View style={styles.item}>
            <Text>test-3</Text>
          </View>
          <View style={styles.item}>
            <Text>test-4</Text>
          </View>
          <View style={styles.item}>
            <Text>test-5</Text>
          </View>
          <View style={[styles.item, styles.item2] }>
            <Text>test-6</Text>
            <Text>{count}</Text>
            <Text onPress={handleAdd}> add + 1</Text>
          </View>
          <View style={styles.item}>
            <Text>test-7</Text>
          </View>
          <View style={styles.item}>
            <Text>test-8</Text>
          </View>
          <View style={styles.item}>
            <Text>test-9</Text>
          </View>
          <View style={styles.item}>
            <Text>test-10</Text>
          </View>

        </ScrollView>
        <View style={styles.footer}>
         <Text style={styles.text}>Footer</Text>
        </View>
      </SafeAreaView>
    );
  },
);


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  item: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  },
  item2: {
    height: 150,
    backgroundColor: 'red'
  },
  footer: {
    height: 60,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF'
  }
});

export default DescScreen;
