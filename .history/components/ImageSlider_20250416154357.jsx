import React from "react";
import Carousel, { ParallaxImage } from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, View } from "react-native";
export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoPlay={true}
      width={wp(100)}
      renderItem={({ item, index, animationValue }) => (
        <ItemCard
          item={item}
          index={index}
          parallaxProps={{ animationValue }}
        />
      )}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoPlayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const ItemCard = ({ item, index, parallaxProps }) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};
