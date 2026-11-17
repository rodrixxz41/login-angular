# Sistema de Login con Angular y Firebase

🚀 **Aplicación desplegada:** [Probar aplicación aquí](https://login-angular-bd1a0.web.app)

---

## 📌 1. Descripción del proyecto

Este proyecto consiste en el desarrollo de una aplicación web que implementa un sistema de autenticación mediante una cuenta de Google.

La aplicación utiliza Firebase Authentication para gestionar el inicio y cierre de sesión. Una vez que el usuario se autentica correctamente, es redirigido a un Dashboard personalizado donde puede visualizar su nombre, dirección de correo electrónico y fotografía de perfil.

Además, se implementa un mecanismo de protección de rutas para restringir el acceso al panel de control a usuarios que no hayan iniciado sesión.

El proyecto tiene como finalidad aplicar conocimientos de desarrollo web, autenticación de usuarios, integración de servicios externos y administración de sesiones.

## 🎯 2. Objetivos del proyecto

- Implementar un sistema de inicio de sesión mediante Google.
- Integrar Firebase Authentication con Angular.
- Gestionar el estado de autenticación de los usuarios.
- Mostrar información del perfil del usuario autenticado.
- Proteger las rutas privadas de la aplicación.
- Implementar el cierre de sesión.
- Publicar y documentar el código fuente mediante GitHub.

## 🛠️ 3. Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| Angular 22 | Framework para desarrollar la aplicación web. |
| TypeScript | Lenguaje utilizado para la lógica de la aplicación. |
| HTML5 | Estructura de las interfaces. |
| CSS3 | Diseño y estilos visuales. |
| Firebase Authentication | Servicio de autenticación de usuarios. |
| AngularFire | Integración de Firebase con Angular. |
| Google Authentication | Proveedor externo para iniciar sesión. |
| Git | Control de versiones. |
| GitHub | Alojamiento y publicación del código fuente. |

## ✨ 4. Funcionalidades principales

### 🔑 Inicio de sesión con Google

Permite al usuario autenticarse utilizando su cuenta de Google mediante Firebase Authentication.

### 👤 Perfil del usuario

Después de iniciar sesión, la aplicación muestra:

- Nombre completo del usuario.
- Dirección de correo electrónico.
- Fotografía de perfil de Google.

### 📊 Dashboard

Dispone de un panel de control personalizado al que se accede después de completar la autenticación.

### 🔒 Protección de rutas

Se implementa un AuthGuard que verifica el estado de autenticación antes de permitir el acceso al Dashboard.

Si un usuario no ha iniciado sesión e intenta acceder directamente a la ruta privada, es redirigido a la pantalla de Login.

### 🚪 Cierre de sesión

Permite cerrar la sesión activa mediante Firebase Authentication y regresar a la pantalla de inicio de sesión.

### 🔄 Persistencia de sesión

La aplicación utiliza el estado de autenticación administrado por Firebase para mantener y recuperar la sesión del usuario según la persistencia configurada.

## 🏗️ 5. Estructura del proyecto

La organización principal del código fuente es la siguiente:

```text
login-angular/
│
├── src/
│   └── app/
│       ├── guards/
│       │   └── auth.guard.ts
│       │
│       ├── pages/
│       │   ├── login/
│       │   │   ├── login.ts
│       │   │   ├── login.html
│       │   │   └── login.css
│       │   │
│       │   └── dashboard/
│       │       ├── dashboard.ts
│       │       ├── dashboard.html
│       │       └── dashboard.css
│       │
│       ├── services/
│       │   └── auth.ts
│       │
│       ├── app.config.ts
│       ├── app.routes.ts
│       └── app.ts
│
├── angular.json
├── package.json
├── firebase.json
├── .firebaserc
└── README.md
```

## 🔥 6. Integración con Firebase

El proyecto utiliza Firebase Authentication como servicio encargado de gestionar la autenticación.

Para configurar el servicio se realizaron los siguientes pasos:

1. Crear un proyecto en Firebase Console.
2. Registrar una aplicación web dentro del proyecto.
3. Habilitar Google como proveedor de autenticación.
4. Configurar los datos de Firebase en Angular.
5. Integrar Firebase Authentication mediante AngularFire.
6. Implementar los métodos de inicio y cierre de sesión.

**Archivo de configuración:**

`src/app/app.config.ts`

Para ejecutar el proyecto con otro proyecto de Firebase, se deben reemplazar los datos de configuración por los correspondientes a la nueva aplicación.

También es necesario habilitar Google como proveedor de acceso y registrar los dominios autorizados en Firebase Authentication.

## 💻 7. Instalación y ejecución

### Requisitos previos

Antes de ejecutar el proyecto, es necesario tener instalado:

- Node.js.
- npm.
- Angular CLI.
- Un editor de código, como Visual Studio Code.

### Paso 1. Clonar el repositorio

```bash
git clone https://github.com/rodrixxz41/login-angular.git
```

### Paso 2. Ingresar al directorio

```bash
cd login-angular
```

### Paso 3. Instalar las dependencias

```bash
npm install
```

### Paso 4. Configurar Firebase

Verificar que la configuración de Firebase corresponda al proyecto que se utilizará y que Google Authentication esté habilitado.

### Paso 5. Ejecutar la aplicación

```bash
ng serve -o
```

### Paso 6. Abrir en el navegador

La aplicación estará disponible en:

`http://localhost:4200/`

El servidor de desarrollo permite actualizar la aplicación automáticamente cuando se realizan cambios en el código fuente.

## 🧪 8. Compilación y pruebas

Para comprobar que el proyecto puede compilarse correctamente:

```bash
ng build
```

Para ejecutar las pruebas unitarias:

```bash
ng test
```

## 🔐 9. Consideraciones de seguridad

- La autenticación de usuarios es administrada por Firebase Authentication.
- Las rutas privadas cuentan con protección mediante AuthGuard.
- Los usuarios no autenticados son redirigidos al Login.
- No se deben almacenar contraseñas ni credenciales privadas directamente en el código fuente.
- La protección de rutas en Angular controla la navegación del cliente, pero no sustituye las reglas de seguridad de Firebase para proteger datos y recursos del servidor.

## 👨‍💻 10. Autor

**Rodrigo Joaquín Camargo Macha**

GitHub: [@rodrixxz41](https://github.com/rodrixxz41)

## 📂 11. Repositorio del proyecto

[https://github.com/rodrixxz41/login-angular](https://github.com/rodrixxz41/login-angular)

---

**Proyecto académico:** Implementación de un sistema de autenticación mediante Google y Firebase utilizando Angular.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
