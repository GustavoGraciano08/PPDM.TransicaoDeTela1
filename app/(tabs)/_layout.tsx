import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: "#ff381e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }}
    >
      <Tabs.Screen
      name="index"
      options={{
        title:"home"
      }}
    />

    <Tabs.Screen
    name="explore"
    options={{
      title: "Explorar"
    }}
    />
    </Tabs>
  );
};