import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native';

//components
import CurrentPrice from './src/components/CurrentPrice/CurrentPrice';
import QuotationItem from './src/components/QuoationList/QuotationItem/QuotationItem';
import QuotationList from './src/components/QuoationList/QuotationList';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar 
      backgroundColor='#008000'
      barStyle="dark-content" />

      <CurrentPrice/>
      <QuotationList/>
      <QuotationItem/>

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
