// api.ts

// URL base de la API FakeStore
const URL_BASE = 'https://fakestoreapi.com/products';

// Interfaz que representa un producto
export interface Producto {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Obtener todos los productos
export const obtenerProductos = async (): Promise<Producto[]> => {
  const respuesta = await fetch(URL_BASE);
  if (!respuesta.ok) throw new Error('Error al obtener productos');
  return await respuesta.json();
};

// Obtener el detalle de un producto por su ID
export const obtenerProductoPorId = async (id: number): Promise<Producto> => {
  const respuesta = await fetch(`${URL_BASE}/${id}`);
  if (!respuesta.ok) throw new Error('Error al obtener el producto');
  return await respuesta.json();
};

// Crear un nuevo producto
export const crearProducto = async (producto: Producto): Promise<Producto> => {
  const respuesta = await fetch(URL_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });
  if (!respuesta.ok) throw new Error('Error al crear el producto');
  return await respuesta.json();
};

// Actualizar un producto existente
export const actualizarProducto = async (id: number, producto: Partial<Producto>): Promise<Producto> => {
  const respuesta = await fetch(`${URL_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });
  if (!respuesta.ok) throw new Error('Error al actualizar el producto');
  return await respuesta.json();
};

// Eliminar un producto
export const eliminarProducto = async (id: number): Promise<Producto> => {
  const respuesta = await fetch(`${URL_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!respuesta.ok) throw new Error('Error al eliminar el producto');
  return await respuesta.json();
};