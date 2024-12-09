import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Avatar = ({width = 30, height = 30}: {width?: number; height?: number}) => {
  return (
    <View>
      <Image
        style={[{width, height, borderRadius: '100%'}]}
        resizeMode="contain"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {},
});
