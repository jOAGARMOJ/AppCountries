# 🌍 App de Búsqueda de Países

Aplicación web desarrollada con **React + Vite** que permite buscar países y mostrar información relevante obtenida desde una API pública.  
Ideal para practicar consumo de APIs, manejo de estado en React y renderizado dinámico de componentes.

## 🚀 Características

- 🔎 **Búsqueda en tiempo real**: busca países escribiendo su nombre en el input.
- 🧩 **Renderizado dinámico**: muestra tarjetas (cards) con la información de cada país.
- 📜 **Historial de búsqueda**: se van anexando nuevas tarjetas al realizar más búsquedas.
- ⚡ **Rendimiento optimizado** gracias a Vite y React 19.
- 🌐 **Consumo de API REST** con [axios](https://axios-http.com).

## 🛠️ Tecnologías Utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) (para desarrollo rápido con HMR)
- [Axios](https://axios-http.com/) (para consumo de API)
- [PropTypes](https://www.npmjs.com/package/prop-types) (para validación de props)

## 📂 Estructura del Proyecto

```bash
.
├── public/
│   └── vite.svg
├── src/
│   ├── components/     # Componentes de UI (Cards, SearchBar, etc.)
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── main.jsx        # Punto de entrada de React
│   └── services/       # Lógica para llamadas a la API
├── index.html
├── package.json
└── vite.config.js
```

## 🔧 Instalación y Uso

1. **Clonar el repositorio**  
```bash
git clone https://github.com/tu-usuario/appcountries.git
cd appcountries
```

2. **Instalar dependencias**  
```bash
npm install
```

3. **Ejecutar en modo desarrollo**  
```bash
npm run dev
```
Abre el navegador en [http://localhost:5173](http://localhost:5173).

4. **Construir para producción**  
```bash
npm run build
```

5. **Previsualizar build**  
```bash
npm run preview
```

## 🌐 API Utilizada

Esta app consume la API de [REST Countries](https://restcountries.com/) para obtener información de países:  
- Nombre  
- Capital  
- Población  
- Región  
- Bandera  

Ejemplo de endpoint usado:
```bash
https://restcountries.com/v3.1/name/{nombre-del-pais}
```



