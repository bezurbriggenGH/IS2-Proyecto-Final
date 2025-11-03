import React from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Producto } from '../services/api';

interface Props {
  productos: Producto[];
  onSeleccionar: (id: number) => void;
}

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 3) / 2; // 2 columnas

export default function ListaProductos({ productos, onSeleccionar }: Props) {
  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id!.toString()}
      numColumns={2} // 👈 cuadrícula de 2 columnas
      columnWrapperStyle={styles.fila}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => onSeleccionar(item.id!)}
          activeOpacity={0.8}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: CARD_MARGIN,
    paddingVertical: 12,
  },
  fila: {
    justifyContent: 'space-between',
  },
  card: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  padding: 10,
  margin: 6,
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 6,
  alignItems: 'center',
  },
  image: {
  width: 120,      
  height: 120,        
  borderRadius: 10,
  alignSelf: 'center',
  resizeMode: 'cover', 
  marginBottom: 8,
  },
  info: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  price: {
  fontSize: 16,
  color: '#007AFF',
  fontWeight: 'bold',
  marginVertical: 6,
  alignSelf: 'center',
  },

});
