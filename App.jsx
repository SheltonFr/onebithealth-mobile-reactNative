import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main/Main';
import Title from './src/components/Title/Title';
export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
