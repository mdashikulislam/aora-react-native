import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Stack, Link, SplashScreen } from "expo-router";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "red" }}>
        Go to Home
      </Link>
    </View>
  );
}
