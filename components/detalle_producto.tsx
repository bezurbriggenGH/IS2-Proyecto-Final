import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Producto } from '../services/api';

interface Props {
  producto: Producto;
  onEditar: () => void;
  onEliminar: () => void;
}

/**
 * Componente: DetalleProducto
 * 
 * Este componente se encarga de mostrar la información completa de un producto
 * seleccionado. Muestra su imagen, título, descripción, precio y dos botones:
 * uno para editarlo y otro para eliminarlo.
 * 
 * Props:
 * - producto: objeto del tipo Producto (viene de la API)
 */
export default function DetalleProducto({ producto, onEditar, onEliminar }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: producto.image }} style={styles.image} />
      <Text style={styles.title}>{producto.title}</Text>
      <Text style={styles.description}>{producto.description}</Text>
      <Text style={styles.price}>${producto.price}</Text>
      <View style={styles.button}>
        <Button title="Editar" onPress={onEditar} />
      </View>
      <View style={styles.button}>
        <Button title="Eliminar" onPress={onEliminar} color="#D32F2F" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 20,
  },
  button: {
    marginVertical: 8,
    width: '80%',
  },
});