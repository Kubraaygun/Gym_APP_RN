import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodypart } from "../api/exerciseDB";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);
  const item = useLocalSearchParams();
  console.log("go item:", item);

  useEffect(() => {
    // if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodypart(bodypart);
    // console.log("got data:", data);
    setExercises(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image source={item.image} style={{ width: wp(100), height: hp(45) }} />
    </ScrollView>
  );
}
