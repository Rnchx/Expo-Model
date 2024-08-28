import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./style";

import TouchButton from '../../components/TouchButton';
import Title from '../../components/Title';

export default function Home() {
  
  return (
    <View style={styles.container}>
      <Title title={"Home Screen"} />

      <TouchButton bgc="#D3D3D3" brr={5} mrgt={20} pad={10} screen="Test" fnts={14} fntw="400" clr="black" name="Go to Test" />
       <TouchButton bgc="#D3D3D3" brr={5} mrgt={20} pad={10} screen="Page" fnts={14} fntw="400" clr="black" name="Go to Page" />
    </View>
  )
}