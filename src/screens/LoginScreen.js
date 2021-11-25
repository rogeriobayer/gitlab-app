import React, { useContext, useState, useEffect } from "react";
import { Text, Input, Button } from "react-native-elements";
import { View, Image, ActivityIndicator } from "react-native";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authState, signIn, tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Image
        source={{
          uri: "https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-rgb.png",
        }}
        style={{ width: 200, height: 100 }}
      />

      <Input
        placeholder="Email ou usuário"
        onChangeText={(value) => setUsername(value)}
        value={username}
      />
      <Input
        placeholder="Senha"
        onChangeText={(value) => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      <Button
        title="Entrar"
        onPress={() => {
          signIn({ username, password });
        }}
      />
      {authState.error ? <Text>{authState.error}</Text> : null}
    </View>
  );
};

export default LoginScreen;
