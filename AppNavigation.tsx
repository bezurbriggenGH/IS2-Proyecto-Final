// AppNavigation.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PantallaListaProductos from './screens/PantallaListaProductos';
import PantallaDetalleProducto from './screens/PantallaDetalleProducto';
import PantallaCrearProducto from './screens/PantallaCrearProducto';
import PantallaEditarProducto from './screens/PantallaEditarProducto';


const Stack = createNativeStackNavigator();

/**
 * Configura la navegación entre pantallas usando Stack Navigator.
 */
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaListaProductos">
        <Stack.Screen
          name="PantallaListaProductos"
          component={PantallaListaProductos}
          options={{ title: 'Lista de productos' }}
        />
        <Stack.Screen
          name="PantallaDetalleProducto"
          component={PantallaDetalleProducto}
          options={{ title: 'Detalle del producto' }}
        />
        <Stack.Screen
          name="PantallaCrearProducto"
          component={PantallaCrearProducto}
          options={{ title: 'Crear producto' }}
        />
        <Stack.Screen
          name="PantallaEditarProducto"
          component={PantallaEditarProducto}
          options={{ title: 'Editar producto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}