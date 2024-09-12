// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig'; // Atualize o caminho se necessário
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthButton from '../components/AuthButton'; // Importa o componente de botão personalizado

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Função para manipular o cadastro
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Welcome');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {/* Botão de Cadastro com cor de fundo verde e texto branco */}
      <AuthButton title="Cadastrar" onPress={handleSignUp} color="#28a745" textColor="#fff" />
      {/* Botão de Login com cor de fundo azul e texto branco */}
      <AuthButton title="Entrar" onPress={() => navigation.navigate('Login')} color="#007bff" textColor="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default SignUpScreen;
