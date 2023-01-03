import { SafeAreaView, StyleSheet, Text } from 'react-native';
import BrazilMap from './src/components/brazil-map';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            Mapa do Brasil
        </Text>
        <BrazilMap/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 35,
  },
  nameStates: {
    color: '#3c38aa'
  },
  backState: {
    backgroundColor: '#5d44dd'
  }
});
