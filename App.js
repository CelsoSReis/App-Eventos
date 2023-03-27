import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
//import biblioteca de Navegação entre telas
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Ícones do app biblioteca expo/vector-icons
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';
//Componentes telas
import Home from './componentes/home/Home';
import Shows from './componentes/shows/Shows';
import Contato from './componentes/contato/Contato';


//Variável  menu de navegação componente que agrupa as rotas
const Menu = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" backgroundColor={'#0B0E3A'} />

      <Menu.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: "#0B0E3A"
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',

        tabBarStyle: {
          backgroundColor: "#fff"
        },
        tabBarLabelStyle:{
          fontSize: 14,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: "#0B0E3A",
        tabBarActiveBackgroundColor: "#0B0E3A",
      }}>
        <Menu.Screen
          name=" "
          component = { Home }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 20 } />
            ),
          }}
        />

        <Menu.Screen
          name="Shows"
          component = { Shows }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="calendar-alt"  color={ color } size={ 20 }/>
            ),
          }}
        />

        <Menu.Screen
          name="Contato"
          component = { Contato }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="phone-square" color={ color } size={ 20 }/>
            ),
          }}
        />
      </Menu.Navigator>
    </NavigationContainer>
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
