import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Listitem from "../components/Listitem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const ClipScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const { clips } = user;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <Listitem
            imageUrl={item.urlToImage}
            title={item.title}
            auther={item.auther}
            onPress={() =>
              navigation.navigate("Article", {
                article: item,
              })
            }
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ClipScreen;
