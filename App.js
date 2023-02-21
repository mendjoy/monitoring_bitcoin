import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';

//components
import CurrentPrice from './src/components/CurrentPrice/CurrentPrice';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar 
      backgroundColor='#008000'
      barStyle="dark-content" />

     <CurrentPrice/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
