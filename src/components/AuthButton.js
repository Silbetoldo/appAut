// src/components/AuthButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Componente de botão personalizado
const AuthButton = ({ title, onPress, color, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]} // Aplica o estilo do botão e a cor de fundo
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text> {/* Aplica o estilo do texto e a cor do texto */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40, // Altura do botão
    borderRadius: 5, // Cantos arredondados
    justifyContent: 'center', // Centraliza o texto verticalmente
    alignItems: 'center', // Centraliza o texto horizontalmente
    marginBottom: 12, // Margem inferior entre os botões
  },
  text: {
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
  },
});

export default AuthButton;
