// Importa o React, necessário para criar componentes React e usar JSX.
import React from 'react';
 
// Importa o componente NavigationContainer do pacote @react-navigation/native.
// O NavigationContainer gerencia o estado de navegação da aplicação e deve envolver toda a navegação.
import { NavigationContainer } from '@react-navigation/native';
 
// Importa o createStackNavigator do pacote @react-navigation/stack.
// O createStackNavigator cria um navegador de pilha (stack navigator) que permite navegação entre telas.
import { createStackNavigator } from '@react-navigation/stack';
 
// Importa as telas da aplicação que serão usadas na navegação.
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
 
// Cria um navegador de pilha (stack navigator) usando createStackNavigator.
const Stack = createStackNavigator();
 
// Define o componente App como uma função de componente funcional.
const App = () => {
  return (
    // O NavigationContainer deve envolver o Stack.Navigator para gerenciar a navegação.
    <NavigationContainer>
      {/* O Stack.Navigator é responsável por gerenciar a pilha de navegação e as telas */}
      <Stack.Navigator initialRouteName="Login">
        {/* Define a tela de Login como a tela inicial da navegação */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Define a tela de SignUp para navegação, que será exibida após a tela de Login */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* Define a tela de Welcome, que será exibida após o login e o registro */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
// Exporta o componente App como o componente padrão para que possa ser usado em outros arquivos.
export default App;