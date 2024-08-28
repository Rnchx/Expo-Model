import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

import TouchButton from '../../components/TouchButton';
import Title from '../../components/Title';

export default function Test() {


  return (
    <View style={styles.container}>
      <Title title={"Test Screen"} />

      <TouchButton bgc="#D3D3D3" brr={5} mrgt={20} pad={10} screen="Home" fnts={14} fntw="400" clr="black" name="Back to Home" />
      <TouchButton bgc="#D3D3D3" brr={5} mrgt={20} pad={10} screen="Page" fnts={14} fntw="400" clr="black" name="Go to Page" />
    </View>
  )
}