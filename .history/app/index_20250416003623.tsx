import { Image, StatusBar, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _layout from "./_layout";

export default function Index() {
  return (
    <View className="flex-1 flex justify-end ">
      <StatusBar className="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images1/welcome.png")}
      />
    </View>
  );
}
