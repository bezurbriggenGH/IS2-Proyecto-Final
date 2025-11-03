

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { Producto } from '../services/api';

interface Props {
  inicial?: Producto;
  onEnviar: (producto: Producto) => void;
  textoBoton: string;
}

/**
 * Componente: FormularioProducto
 * 
 * Este componente muestra un formulario reutilizable para **crear o editar**
 * productos. Se usa tanto en la pantalla de creación como en la de edición.
 * 
 * Props:
 * - inicial: producto inicial (si se está editando)
 * - onEnviar: función que se ejecuta al enviar el formulario
 * - textoBoton: texto del botón principal (“Crear” o “Guardar cambios”)
 */
export default function FormularioProducto({ inicial, onEnviar, textoBoton }: Props) {
  const [formulario, setFormulario] = useState<Producto>(
    inicial || { title: '', description: '', price: 0, category: '', image: '' }
  );

  const [errores, setErrores] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });
 /**
   * Función: validar()
   * 
   * Verifica que todos los campos del formulario tengan valores válidos.
   * Si falta algo, muestra el error debajo del campo.
   */
  const validar = () => {
    const nuevosErrores = {
      title: formulario.title ? '' : 'El título es obligatorio.',
      description: formulario.description ? '' : 'La descripción es obligatoria.',
      price: formulario.price > 0 ? '' : 'El precio debe ser mayor a 0.',
      image: formulario.image ? '' : 'La URL de la imagen es obligatoria.',
    };

    setErrores(nuevosErrores);
    return Object.values(nuevosErrores).every((e) => e === '');
  };
/**
   * Función: manejarCambio()
   * 
   * Actualiza el valor del campo correspondiente en el formulario.
   * Si el campo es "price", convierte el texto a número.
   */
  const manejarCambio = (campo: keyof Producto, valor: string) => {
    setFormulario({ ...formulario, [campo]: campo === 'price' ? parseFloat(valor) || 0 : valor });
  };

  /**
   * Función: manejarSubmit()
   * 
   * Se ejecuta al presionar el botón principal.
   * Si las validaciones pasan, llama a `onEnviar(formulario)`.
   */
  const manejarSubmit = () => {
    if (validar()) {
      onEnviar(formulario);
    } else {
      Alert.alert('Formulario incompleto', 'Por favor completá todos los campos obligatorios.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={formulario.title}
          onChangeText={(text) => manejarCambio('title', text)}
          placeholder="Nombre del producto"
        />
        {errores.title ? <Text style={styles.error}>{errores.title}</Text> : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.input}
          value={formulario.description}
          onChangeText={(text) => manejarCambio('description', text)}
          placeholder="Descripción detallada"
          multiline
        />
        {errores.description ? <Text style={styles.error}>{errores.description}</Text> : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Precio</Text>
        <TextInput
          style={styles.input}
          value={formulario.price.toString()}
          onChangeText={(text) => manejarCambio('price', text)}
          placeholder="0.00"
          keyboardType="numeric"
        />
        {errores.price ? <Text style={styles.error}>{errores.price}</Text> : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Imagen (URL)</Text>
        <TextInput
          style={styles.input}
          value={formulario.image}
          onChangeText={(text) => manejarCambio('image', text)}
          placeholder="https://..."
        />
        {errores.image ? <Text style={styles.error}>{errores.image}</Text> : null}
      </View>

      <View style={styles.button}>
        <Button title={textoBoton} onPress={manejarSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFF',
  },
  error: {
    color: '#D32F2F',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    marginTop: 20,
  },
});