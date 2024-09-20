# Tutorial de Angular 17/18

## 1. Nueva utilización de la estructura de Angular
En Angular 17/18, se ha optimizado la estructura de archivos del framework, permitiendo trabajar de manera más eficiente con componentes. Tradicionalmente, un componente Angular se compone de cuatro archivos principales:

- **HTML**: El archivo de plantilla (`.html`) contiene la estructura del componente.
- **CSS/SCSS**: Los archivos de estilo (`.css` o `.scss`) definen la apariencia del componente.
- **TypeScript**: El archivo de lógica (`.ts`) controla el comportamiento del componente.
- **Pruebas**: El archivo de pruebas (`.spec.ts`) contiene pruebas unitarias para el componente.

Sin embargo, Angular ahora permite trabajar exclusivamente con el archivo `.ts`, utilizando **plantillas y estilos en línea** si así lo prefieres. Esto simplifica la estructura del proyecto en ciertos casos.

## 2. Banderas de `ng generate component`
Cuando generes un nuevo componente con Angular CLI, puedes personalizar la salida para incluir solo los archivos que necesitas. A continuación, te mostramos algunas de las banderas más útiles:

- **`--dry-run`**: Esta bandera te permite simular la generación del componente sin crear realmente los archivos. Es útil para revisar lo que se generaría sin afectar tu código. 
  ```bash
  ng generate component my-component --dry-run ```

- **`--inline-style`** Al utilizar esta bandera, los estilos del componente se incluyen directamente en el archivo .ts en lugar de generarse en un archivo separado.
```bash 
    ng generate component my-component --inline-style
```
- **`--inline-template`** Con esta bandera, la plantilla HTML también se escribe en línea dentro del archivo .ts, eliminando la necesidad de un archivo HTML separado.
```bash 
    ng generate component my-component --inline-template
```
- **`--skip-tests`** Si prefieres no generar un archivo de pruebas unitarias (.spec.ts), utiliza esta opción.
```bash 
ng generate component my-component --skip-tests
```

## 3. Estructura del Proyecto

```bash
## Estructura del Proyecto

```bash
public/
src/
│
├── app/
│   ├── auth/
│   │   ├── data-access/              # dentro de data Access se manejan las llamdas a servicios y logica de auth solamente
│   │   │   └── auth.services.ts      # Servicio para manejar la autenticación de usuarios.
│   │   └── features/                 # Aqui se manejan todas las paginas que contendra el Auth
│   │       ├── login/                # Componente para el inicio de sesion, contiene el html, css,ts, pruebas
│   │       ├── register/             # Componente para el registro, contiene el html, css,ts, pruebas
│   │       └── resetpassword/        # Componente para el cambiar contraseña, contiene el html, css,ts, pruebas
│   ├── core/                         # Servicios, interceptores, guards
│   ├── dashboard/
│   │   ├── dashboard.component.css   # Estilos específicos para el componente del dashboard.
│   │   ├── dashboard.component.html  # Plantilla HTML para el componente del dashboard.
│   │   ├── dashboard.component.spec.ts # Pruebas unitarias para el componente del dashboard.
│   │   └── dashboard.component.ts    # Lógica del componente del dashboard.
│   │
│   ├── products/
│   │   ├── data-access/              # dentro de data Access se manejan las llamdas a servicios y logica de products solamente 
│   │   │   └── products.services.ts  # Servicio para manejar las operaciones de productos.
│   │   ├── features/                 # Aqui se manejan todas las paginas que contendra el product
│   │   │   ├── product-detail/       # Módulo para los detalles de productos.
│   │   │   └── product-list/         # Módulo para la lista de productos.
│   │   └── product.routes.ts         # Configuración de las rutas relacionadas con productos.
│   │
│   ├── ui/                           #Componentes dummy, son componentes que solo se utilizaran para estas paginas y que no manejan logica pesada, son componentes basicos
│   │   ├── product-card/
│   │   │   ├── product-card.component.css   # Estilos para el componente de tarjeta de producto.
│   │   │   ├── product-card.component.html  # Plantilla HTML para el componente de tarjeta de producto.
│   │   │   ├── product-card.component.spec.ts # Pruebas unitarias para el componente de tarjeta de producto.
│   │   │   └── product-card.component.ts    # Lógica del componente de tarjeta de producto.
│   │
│   ├── utils/                     # Carpeta para utilidades generales del proyecto, solo utlices para product
│   │
│   ├── shared/                    #Aqui adentro van componentes de la aplicacion de manera general
│   │   ├── data-access/           #se maneja informacion como storage, ngrx entre otros
│   │   └── ui/                    #aqui dentro se manejan componentes generales de la app, como botones, inputs, elmentos necesarios entre otros
│   │       ├── comments/
│   │       │   ├── comments.component.spec.ts  # Pruebas unitarias para el componente de comentarios.
│   │       │   └── comments.component.ts       # Lógica del componente de comentarios.
│   │       ├── games/
│   │       └── user/
│   │           ├── user.component.css          # Estilos para el componente de usuario.
│   │           ├── user.component.html         # Plantilla HTML para el componente de usuario.
│   │           ├── user.component.spec.ts      # Pruebas unitarias para el componente de usuario.
│   │           └── user.component.ts           # Lógica del componente de usuario.
│   │
├── app.component.css         # Estilos globales para el componente principal de la aplicación.
├── app.component.html        # Plantilla HTML para el componente principal de la aplicación.
├── app.component.spec.ts     # Pruebas unitarias para el componente principal de la aplicación.
├── app.component.ts          # Lógica del componente principal de la aplicación.
└── app.config.ts             # Archivo de configuración para la aplicación.

```

## 4. Manejo de rutas

se definieron el manejo correcto de rutas, para ello consulete el archivo app.routes.ts como tambien dentro de las rutas de products para tener un mejor orden, dentro del app.routes.ts encontrara lo siguiente 

``` bash 

```