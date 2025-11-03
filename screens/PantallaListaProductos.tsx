// screens/PantallaListaProductos.tsx

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { obtenerProductos, Producto } from '../services/api';
import ListaProductos from '../components/ListaProductos';

/**
 * Pantalla principal que muestra la lista de productos con botón para crear nuevos.
 */
export default function PantallaListaProductos({ navigation }: any) {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      cargarProductos();
    }
  }, [isFocused]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.botonCrear} onPress={() => navigation.navigate('PantallaCrearProducto')}>
          Crear producto
        </Text>
      ),
    });
  }, [navigation]);

  const cargarProductos = () => {
    setCargando(true);
    obtenerProductos()
      .then(setProductos)
      .catch((error) => console.error('Error al cargar productos:', error))
      .finally(() => setCargando(false));
  };

  const manejarSeleccion = (id: number) => {
    navigation.navigate('PantallaDetalleProducto', { id });
  };

  return (
    <View style={styles.container}>
      {cargando ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loading}>Cargando productos...</Text>
        </View>
      ) : (
        <ListaProductos productos={productos} onSeleccionar={manejarSeleccion} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  botonCrear: {
    marginRight: 16,
    fontSize: 15,
    color: '#007AFF',
    fontWeight: '600',
  },
});