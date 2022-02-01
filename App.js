import { StatusBar } from 'expo-status-bar';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  Image, 
  SafeAreaView, 
  Alert, 
  View, 
  Button,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed')
  console.log(Dimensions.get('screen'));
  
 return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '50%',
          height: 70,
        }}
      
      ></View>
      <Button 
        title='Click Me' 
        onPress={() => 
          Alert.alert('My title', 'My Message', [
            { text: 'Yes', onPress: () => console.log('Yes pressed') },
            { text: 'No' },
          ])
        } />
      
      <Text onPress={handlePress}>Hello!!</Text>
      <TouchableWithoutFeedback onPress={() => console.log('Image pressed')}>
      <Image 
      fadeDuration={1000}
      source={{
        width: 200,
        height: 300,
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}/>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
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
