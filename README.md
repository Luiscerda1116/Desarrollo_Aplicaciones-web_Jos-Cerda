# Mi Sitio Bootstrap

Un sitio web moderno y responsivo construido con Bootstrap 5, que incluye animaciones personalizadas y efectos interactivos.

## 📁 Estructura del Proyecto

```
mi-sitio-bootstrap/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── assets/
│   └── img/
│       ├── imagen1.jpg # Imagen para Desarrollo Web
│       ├── imagen2.jpg # Imagen para Diseño Gráfico
│       └── imagen3.jpg # Imagen para Marketing Digital
└── README.md           # Este archivo
```

## 🚀 Características

### ✅ Requisitos Cumplidos
- **Navegación responsiva** con Bootstrap (`navbar`, `navbar-expand-md`, `navbar-dark`, `bg-dark`)
- **Grid system** con 3 columnas (`col-md-4`)
- **Imágenes responsivas** con clase `img-fluid`
- **Formulario completo** con campos de nombre, email y comentarios
- **Botones Bootstrap** con clase `btn btn-primary` personalizada
- **Funcionalidad collapse** para mostrar/ocultar contenido
- **Footer** con clases `text-center` y `bg-light` personalizado

### 🎨 Estilos Personalizados
- **Sobrescritura de Bootstrap**: Botón primario color #ff5733 (naranja)
- **Animaciones CSS**: Efectos hover, transiciones suaves
- **Media queries**: En pantallas pequeñas los botones cambian a azul
- **Efectos avanzados**: 
  - Sombras y bordes redondeados
  - Transformaciones 3D
  - Animaciones de entrada
  - Efectos parallax

### 🎯 Funcionalidades Extra
- **Smooth scrolling** entre secciones
- **Intersection Observer** para animaciones
- **Gradientes modernos**
- **Iconos Font Awesome**
- **Diseño completamente responsivo**

## 🖼️ Imágenes Necesarias

Coloca las siguientes imágenes en la carpeta `assets/img/`:

1. **imagen1.jpg** - Para la sección "Desarrollo Web"
   - Recomendado: 500x300px mínimo
   - Tema: Código, programación, desarrollo

2. **imagen2.jpg** - Para la sección "Diseño Gráfico"
   - Recomendado: 500x300px mínimo
   - Tema: Diseño, creatividad, paletas de colores

3. **imagen3.jpg** - Para la sección "Marketing Digital"
   - Recomendado: 500x300px mínimo
   - Tema: Gráficos, estadísticas, marketing

## 🛠️ Instalación y Uso

1. **Clona o descarga** los archivos del proyecto
2. **Añade las imágenes** en la carpeta `assets/img/`
3. **Abre `index.html`** en tu navegador

## 📱 Compatibilidad

- ✅ Bootstrap 5.3.0
- ✅ Font Awesome 6.0.0
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Dispositivos móviles y tablets
- ✅ Diseño responsive completo

## 🎨 Personalización

### Cambiar Colores
En `styles.css`, modifica las siguientes variables:

```css
.btn-primary {
    background-color: #ff5733; /* Color principal */
    border-color: #ff5733;
}

.custom-footer h5 {
    color: #ff5733; /* Color de acentos */
}
```

### Modificar Animaciones
Ajusta las transiciones en `styles.css`:

```css
.card {
    transition: all 0.3s ease; /* Velocidad de animación */
}

.card:hover {
    transform: translateY(-10px); /* Movimiento vertical */
}
```

## 📧 Contacto

Este es un proyecto de demostración. Puedes modificar la información de contacto en el formulario según tus necesidades.

---

*Desarrollado con ❤️ usando Bootstrap 5*