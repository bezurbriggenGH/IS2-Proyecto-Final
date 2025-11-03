# App/Web de Tienda

Una aplicación móvil desarrollada con **React Native + Expo** que permite crear, editar, eliminar y visualizar productos.


## Características

- Lista de productos en formato de tarjetas
- Crear nuevos productos con formulario validado
- Editar productos existentes
- Eliminar productos
- Mensajes emergentes para acciones exitosas

---

## Tecnologías utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)

---

## Estructura del proyecto

```
├── components/
│   ├── ListaProductos.tsx
│   ├── FormularioProducto.tsx
│   └── DetalleProducto.tsx
├── screens/
│   ├── PantallaListaProductos.tsx
│   ├── PantallaCrearProducto.tsx
│   ├── PantallaEditarProducto.tsx
│   └── PantallaDetalleProducto.tsx
├── services/
│   └── api.ts
├── App.tsx
└── README.md
```

---

## Instalación y ejecución

1. Cloná el repositorio:

```bash
git clone https://github.com/RamassafraGH/IS2---Proyecto-Final
cd IS2---Proyecto-Final
```

2. Instalá las dependencias:

```bash
npm install
```

3. Ejecutá la app con Expo:

```bash
npx expo start
```

4. Escaneá el código QR con la app de Expo Go en tu dispositivo móvil.

---

## Autor

Desarrollado por [RamassafraGH].
