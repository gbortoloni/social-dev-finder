import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

function Profile({ navigation }) {
  const github_userName = navigation.getParam("github_userName");
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${github_userName}` }}
    />
  );
}

export default Profile;
