import React from "react";
import { Image, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { sliderImages } from "../constants"; // Doğru import yolu
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  const width = wp(100);
  const itemWidth = wp(100) - 70;

  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Carousel
        width={width}
        height={hp(25)}
        data={sliderImages}
        renderItem={({ item }) => (
          <View
            style={{
              width: itemWidth,
              height: hp(25),
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              marginHorizontal: 35,
            }}
          >
            <Image
              source={item}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 30,
                resizeMode: "cover",
                backgroundColor: "white", // Gölge görünsün diye arka plan
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.65,
                shadowRadius: 20,
                elevation: 8, // Android gölge
              }}
            />
          </View>
        )}
        loop
        autoPlay={true}
        autoPlayInterval={4000}
        defaultIndex={1}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />
    </View>
  );
}
