import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log("go item:", item);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);
  return (
    <View className="mt-20">
      <Text>Exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
