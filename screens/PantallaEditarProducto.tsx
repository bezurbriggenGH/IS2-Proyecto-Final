// screens/PantallaEditarProducto.tsx

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { actualizarProducto, Producto } from '../services/api';
import FormularioProducto from '../components/FormularioProducto';

/**
 * PantallaEditarProducto
 * 
 * Permite editar un producto existente.
 * 
 * Usa el mismo <FormularioProducto /> pero con datos iniciales.
 * Al guardar, muestra un popup de confirmación.
 */
export default function PantallaEditarProducto({ route, navigation }: any) {
  const { producto } = route.params;
  const [mostrarPopup, setMostrarPopup] = useState(false);

/**
   * Función: manejarActualizar()
   * 
   * Llama a la API para actualizar el producto con los nuevos datos.
   * Luego muestra un popup y vuelve a la lista.
   */
  const manejarActualizar = (datosActualizados: Producto) => {
    actualizarProducto(producto.id!, datosActualizados)
      .then(() => {
        setMostrarPopup(true);
        setTimeout(() => {
          setMostrarPopup(false);
          navigation.goBack();
        }, 1500); // espera 1.5 segundos antes de cerrar
      })
      .catch((error) => {
        console.error('Error al actualizar producto:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar producto</Text>
      <FormularioProducto
        inicial={producto}
        onEnviar={manejarActualizar}
        textoBoton="Guardar cambios"
      />

      <Modal visible={mostrarPopup} transparent animationType="fade">
        <View style={styles.popupContainer}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>✅ Producto editado exitosamente</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  popupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  popupText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});