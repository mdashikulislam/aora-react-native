import { View, Text, ScrollView, Image } from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormFeild from "../../components/FormFeild";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView style={{ height: "100%" }}>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px] align-left"
          />
          <Text className="text-white font-psemibold text-semibold text-2xl mt-10 ">
            Sign in
          </Text>
          <FormFeild
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormFeild
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <View className="justify-end pt-3 flex-row pr-3">
            <Link
              href={`/home`}
              className="text-md text-gray-100 font-pregular"
            >
              Forgot password
            </Link>
          </View>
          <CustomButton
            title={`Sign In`}
            containerStyles={"mt-7"}
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?{` `}
              <Link
                href="/sign-up"
                className="text-lg font-psemibold text-secondary-200"
              >
                Signup
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
