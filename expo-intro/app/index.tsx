import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "@/lib/Constants";
import { Link, router } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
       <Text>Edit app/index.tsx to edit this screen.</Text>
       <Link style={styles.button} href={'/add-activity-screen'}>
      <Text style={styles.buttonText}>Click Me</Text>
      </Link>
    </View>
  );
}
