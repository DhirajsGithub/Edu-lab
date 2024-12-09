import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Avatar = ({width = 30, height = 30, uri}: {width?: number; height?: number; uri: string}) => {
  return (
    <View>
      <Image
        style={[{width, height, borderRadius: '100%'}]}
        resizeMode="cover"
        source={{
          uri,
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {},
});
