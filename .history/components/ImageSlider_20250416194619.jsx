import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  const width = wp(100);
  const itemWidth = wp(100) - 70;
  const radius = 30;

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
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
              marginHorizontal: 35,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.15,
              shadowRadius: 50,
              elevation: 8,
              borderRadius: 30,
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <Image
              source={item}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
              }}
            />
          </View>
        )}
        loop
        autoPlay={true}
        autoPlayInterval={2000}
        defaultIndex={1}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />
    </View>
  );
}
