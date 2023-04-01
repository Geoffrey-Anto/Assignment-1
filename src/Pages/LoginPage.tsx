/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import Colors from '../Constants/Colors';

type InputHandler = (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;

const LoginPage = (): JSX.Element => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleNameChange: InputHandler = (e) => {
    setName(e.nativeEvent.text);
  };

  const handleEmailChange: InputHandler = (e) => {
    setEmail(e.nativeEvent.text);
  };

  const handlePasswordChange: InputHandler = (e) => {
    setPassword(e.nativeEvent.text);
  };

  console.log(name, email, password);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTextHeading}>Name</Text>
        <TextInput onChange={handleNameChange} style={styles.inputStyle} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTextHeading}>Email</Text>
        <TextInput onChange={handleEmailChange} style={styles.inputStyle} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTextHeading}>Password</Text>
        <TextInput onChange={handlePasswordChange} style={styles.inputStyle} />
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    backgroundColor: Colors.primaryColor,
  },
  inputStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: Colors.secondaryColor,
    width: '100%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.secondaryColor,
    color: Colors.white,
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    opacity: 1,
    color: Colors.secondaryColorDarker,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '80%',
  },
  inputTextHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondaryColorDarker,
    marginLeft: 12,
    marginBottom: 3,
  },
});
