import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';

import TouchButton from '../../components/TouchButton';
import Title from '../../components/Title';
import { useState } from 'react';

export default function Page() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cellphone, setCellphone] = useState("");

  const register = () => {
    console.log(`Your name is ${name}, your E-mail is ${email}, your cellphone is ${cellphone} and your password is ${password}`);
    clearInputs();
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setCellphone("");
  }

  return (
    <View style={styles.container}>
      {/* <Title title={"Page Screen"} />

      <TouchButton bgc="#D3D3D3" brr={5} mrgt={20} pad={10} screen="Home" fnts={14} fntw="400" clr="black" name="Back to Home" />
      <TouchButton bgc="#D3D3D3" brr={5} mrgt={20} pad={10} screen="Test" fnts={14} fntw="400" clr="black" name="Go to Test" /> */}

      <View>
        <Text style={styles.titleForm}>Register</Text>

        <View style={styles.containerForm}>
        <TextInput placeholder='Name' value={name} onChangeText={setName} style={styles.inputs} />

        <TextInput placeholder='E-mail' value={email} onChangeText={setEmail} style={styles.inputs} />

        <TextInput placeholder='Password' value={password} onChangeText={setPassword} style={styles.inputs} />
        
          <TextInput placeholder='cellphone' value={cellphone} onChangeText={setCellphone} style={styles.inputs} />
          </View>

        <TouchableOpacity onPress={register} style={styles.buttonSaveRegister}>
          <Text style={styles.textSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}