// src/components/AuthInput.js
import React from 'react'; // Importa o React para usar JSX e criar componentes.
import { TextInput, StyleSheet } from 'react-native'; // Importa os componentes TextInput e StyleSheet da biblioteca react-native.

const AuthInput = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType }) => {
  // Define o componente funcional AuthInput.
  // Ele recebe várias props: placeholder, value, onChangeText, secureTextEntry e keyboardType.
  
  return (
    <TextInput
      style={styles.input}  // Aplica o estilo definido no objeto styles.
      placeholder={placeholder}  // Define o texto que será exibido quando o campo estiver vazio.
      value={value}  // Define o valor atual do campo de entrada de texto.
      onChangeText={onChangeText}  // Define a função a ser chamada quando o texto no campo de entrada mudar.
      secureTextEntry={secureTextEntry}  // Se verdadeiro, oculta o texto digitado (para campos de senha).
      keyboardType={keyboardType}  // Define o tipo de teclado a ser exibido (por exemplo, "default", "email-address", etc.).
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,  // Define a altura do campo de entrada.
    borderColor: '#ddd',  // Define a cor da borda.
    borderBottomWidth: 1,  // Define a largura da borda inferior.
    marginBottom: 12,  // Define a margem inferior entre campos.
    paddingHorizontal: 8,  // Define o preenchimento horizontal interno.
  },
});

export default AuthInput; // Exporta o componente AuthInput para que possa ser utilizado em outros arquivos.
