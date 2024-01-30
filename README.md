![Banner Tecno Tienda](/assets/img/headerReadme.png)
# Proyecto Tecno Tienda App - e-Commerce
## Curso Desarrollo de Aplicaciones
## _CODERHOUSE - Comisión 56680_


## Acerca del proyecto
Este proyecto consiste en una aplicación móvil híbrida del tipo bridge, desarrollada con React Native y Expo CLI. La misma permite a los usuario acceder a una plataforma de e-commerce, visualizar y comprar productos de hardware, periféricos para computadoras y accesorios, tales como tarjetas gráficas, motherboards, procesadores y memorias entre otros. El proyecto aún se encuentra en etapa de desarrollo.


## Tecnologías aplicadas
Este proyecto fue desarrollado utilizando siguientes tecnologías:

![Tecnologías del proyecto](/assets/img/developedReadme.png)

### Librerías de EXPO
## Location
## SQLite


### Otras librerías
## React-Native-Swiper
## Geolib

### React Redux

### React Navigation

### Firebase

### Google Cloud - API'S
## Maps Static
## Geocoding



## Backend as a service
El proyecto de desarrollo mobile utiliza los servicios de backend provistos por Google Firebase, integrando las utilidades de Authentication, Storage y Realtimedatabase.
![Built with Firebase](/public/images/readme/built-with-firebase.png)


## Enlaces a mis redes sociales

- [LinkedIn](https://www.linkedin.com/in/ariel-endrizzi/)
- [GitHub](https://github.com/arielend)


## Para correr el proyecto localmente

```
$ git clone https://github.com/arielend/tecno_tienda_app
$ cd tecno_tienda_app
$ npm install
$ npx expo start
```

![Banner App Flow](/assets/img/flowReadme.png)
## Flujo de la aplicación
El proyecto se inicia desde la pántalla de Login, dónde los usuarios registrados pueden acceder con una cuenta de correos registrada y la respectiva contraseña; en caso de no hallarse registrado, un link de acceso rediraciona al usuario a la pantalla de Signup. Para el registro solo es necesaria una cuenta de cooreo electrónico, la cual se repite para confirmar, y una contraseña de más de 6 caracteres. Una vez ingresadas las credenciales de acceso, el usuario es dirigido a la pantalla principal de la aplicación; la misma despliega una lista de categorías en la cual se exh
iben los productos a la venta en la tienda. Para el caso de las categorías que no poseen productos a la venta la aplicación muestra un mensaje.

La navegación de la aplicación, además del direccionamiento que se realiza por las acciones del usuario, se realiza a travez de una barra de navegación inferior y por los botones del header; estos últimos permiten volver atrás en la navegación o ir a la pantalla de inicio. La barra de navegación inferior le permite al usuario desplazarse por cuatro áreas de navegación.

La primera área de navegación y la que se muestra por defecto, es el área de compras; esta muestra los títulos de las difefrentes categorias de productos en un conjunto de tarjetas distribuidas verticalmente. A través de estas se accede a lois listados de productos disponibles en cada una, los que también se muestran en una lista de tarjetas distribuidas verticalmente. En la pantalla de listado de productos tambien se muestra una barra de busqueda en la parte superior, la que permite buscar productos por nombre. Tocando sobre las tarjetas que muestran los productos del listado se accede al detalle del producto. La pantalla de detalles muestra el nombre, un carrusel de imagenes, la descripción del producto, su precio y el stock disponible; tambien provee iconos tactiles que permiten compartir el producto ( En esta etapa de desarrollo solo se comparte un link al despliegue en Vercel de web de tecno Tienda ), guardarlo en favoritos, y un botón que ejecuta la acción de agregar el producto al carrito de compras ( Al momento solo se agrega de a un producto, pero se implementará en futuras actualizaciones un contador de productos ). La acción de agregar un producto al carrito muestra un modal de mensaje que informa la acción y un botón de aceptar, el cual una vez pulsado te dirije a la pantalla que muestra el carrito de compras.

La segunda área de navegación muestra el carrito de compras, que en caso de encontrarse vacio muestra un mensaje. Una vez agregados productos al carrito de compras, los mismos se muestran en esta pantalla, en un listado de tarjetas distribuido de manera vertical, cada elemento del carrito es exhibido con su nombre, una imagen, una descripción breve, la cantidad de items de ese producto agregados al carrito, su precio unitario y el subtotal por esa cantidad de items. La tarjeta del producto en el carrito tambien cuenta con un icono que nos permite quitar ese producto individual del carrito (Se elimina la cantidad total de items de ese producto del carrito ). En la parte inferior de la pantalla del carrito se muestra el importe total de los productos que en él se encuentran y un botón que nos permite proceder con la compra de los productos. Al presionar el botón se lanza un modal que requiere la confirmación de la compra, el mismo tiene dos botones, uno para regresar a la pantalla sin realizar la compra y el siguiente para confirmarla. En caso de confirmación la aplicación redirecciona al usuario a la pantalla de órdenes o compras.

El área de órdenes o compras es la tercera de la barra de navegación inferior. En esta se muestra en un listado vertical, las compras realizadas por el usuario, en tarjetas individuales que exhiben el identificador de la compra, la fecha de compra, el importe total de la misma y un icono que al pulsarlo nos permite acceder al detalle de la compra. La pantalla de detalle de compra muestra, además de la información ya exhibida en el listado de compras, el detalle de productos que integran la compra, con descripción, cantidad de unidades, precio unitario y subtotal por producto.

El área de Perfil de usuario es la última de las áreas navegables desde la barra inferior. La misma muestra una foto de perfil o un ícono en caso de que no haya una imagen guardada, el usuario conectado ( correo electrónico ), la última ubicación guardada y un mapa que muestra la ubicación de usuario y de la tienda más cedrcana, además de la distancia a la misma. Además de la información mostrada la pantalla permite realizar tres acciones, actualizar la foto de perfil, actualizar la ubicación y cerrar la sesión del usuario conectado. Para agregar / actualizar la foto de perfifl del usuario basta con presionar el ícono / foto de perfil, lo que dirige a la pantalla de captura de imagen. Desde la pantalla de imagen de perfil se muestra, en caso de haber una guardada, la foto de perfil actual, sino muestra el ícono de una cámara y un boton que nos permite acceder a la cámara para tomar una fotografía; para ello es necesario otorgar los permisos de acceso a cámara correspondientes. Una vez tomada la fotografía, se muestra una vista previa de la misma y dos botones, uno que nos permite tomar una nueva fotografía y un segundo botón para confirmar como foto de perfil la foto tomada. Si la foto se confirma es guardada y la aplicación redirecciona a la pantalla principal de perfil de usuario. En caso de ya haber una foto de perfil guardada, la misma se puede actualizar con el mismo procedimiento. El segundo botón de la pantalla de perfil nos permite actualilzar la ubicación actual del usuario en caso de que la misma haya cambiado desde el acceso a la aplicación. El boton de cierre de sesión elimina los datos de sesión guardados en el dispositivo móvil por lo cual el usuario debera volver a ingresar sus credenciales de acceso para usar la aplicación.


## GRACIAS POR VISITAR MI PROYECTO