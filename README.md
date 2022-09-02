# Proyecto del Curso ReactJS CoderHouse

En este repositorio se encuentre el código fuente del proyecto de ReactJS de CoderHouse, comisión 34680.

## Objetivo
El objetivo de esta webapp es la de simular un ecommerce de artículos de cultura popular japonesa, tales como:
* Modelos de plástico del anime Gundam.
* Manga.
* Figuras a escala de personajes de anime.

Durante el desarrollo de esta webapp de ecommerce se practicaron los conceptos fundamentales de React como es el diseño basado en componentes y la reutilización de estos.
La base de datos donde se esta almacenando toda la información de los productos, ordenes y categorias del ecommerce es un Firestore Database de Firebase.
En la app, se implemento Firestore con su respectiva conexion a traves de Firebase y el paquete de firebase como la database de la app.

## Desarrollo

La webapp fue desarrollada utilizando el framework de JS, ReactJS.

Los temas vistos en el curso y aplicados en el desarrollo de la webapp son los siguientes:

* JSX.
* Diseño basado en componentes.
* Componentes Funcionales.
* Separación de responsabilidades por medio de componentes lógicos y de presentación.
* Uso de Hooks, useState, useEffect de React.
* Llamadas asincrónicas por medio de fetch() y a través de los métodos de obtención de colecciones y documentos de firebase.
* Navegación de la aplicación utilizando BrowerRouter, Routes, Route y hook useParams de la librería react-router-dom.
* Manejo de eventos y uso de callbacks para modificación de componentes padre.
* Contexto global en la app con React Context, Providers y Consumers con useContext
* Renderizado condicional de componentes basado en estados
* Manejo de Firestore a través de Firebase, obtener colecciones y documentos, crear documentos y realizar transacciones.

**Librerías**

React Bootstrap

Aparte de las dependencias vistas en clase, react y react router dom, decidí agregar a mi proyecto la librería react-bootstrap para el apartado visual de la aplicación, debido a su fácil implementación y los estilos responsive que este framework ofrece.

React Router

Permite facilitar la navegacion y el enrutamiento de la aplicacion con rutas intuitivas definidas por el desarrollador.
Cada item tiene su ruta dinámica, asi como cada categoria.
De igual manera, permite validar la ruta, en caso de que el usuario quiera entrar a alguna ruta desconocida para la aplicación.

Firebase

Permite conectar la app directamente a la base de datos almacenada en el Firestore de Firebase.
El paquete de firebase ofrece una variedad de métodos de Firestore que permiten acceder asincrónicamente a colecciones y documentos, crear documentos y realizar transacciones. 

##Estructura

**index.js**
En el index.js se inicia la aplicación de firebase, la cual le da acceso a la webapp para acceder todos los servicios como Firestore o Auth.

**App.js**
El App.js implementa el CustomProvider para el CartContext, así como el NavBar y el BrowserRouter, únicamente modificando el contenido debajo del NavBar dependiendo de la ruta. En este espacio se renderiza el ItemListContainer, ItemDetailContainer, AboutUs, Cart, Checkout y ErrorPage.

**CartContext**
El CartContext es un custom provider encargado de administrar el cart, y contiene métodos para añadir, eliminar y modificar el Cart, así como funciones extra para obtener el total en costo y en productos.

**ItemListContainer**
Realiza una consulta a Firestore dependiendo de la ruta, en caso de no especificar la categoría, consulta por ítems en stock. Se utiliza el hook useEffect para esperar el mount del componente y efectuar las consultas. Renderiza condicionalmente utilizando un spinner y si no existe la categoría especificada regresa una ErrorPage.

De igual manera, renderiza Items e Item, mostrando cada producto de manera individual.

**ItemDetailContainer**
Realiza una consulta al detalle del producto, consultando el documento especifico en Firestore, renderiza condicionalmente un spinner, ErrorPage o el detalle del producto. También incluye el ItemCount para poder cambiar la cantidad de ítems para agregar al cart. Al haber un evento en el ItemCount, el ItemDetail renderiza un botón para ir al Cart.

**Cart**
El Cart utiliza el CartContext para obtener los productos en el Cart y mostrarlos en una tabla, mostrando cada producto y los totales. De igual forma se implemento la funcionalidad para eliminar cada producto individualmente o para vaciar el Cart por completo. 

El Cart es accesible a través del botón de completar compra en el ItemDetail o a través del icono de Cart en el NavBar, cuyo Widget esta renderizado condicionalmente de acuerdo a la cantidad de ítems en el Cart.

**Checkout**
Una vez existan ítems en el Cart y el usuario quiera terminar la compra, se redirige a la ruta Checkout, la cual, en caso de no tener ítems en el Cart, mostrara una pantalla para seguir comprando.

La pantalla de Checkout esta conformada por un CheckoutForm, una colección de Inputs custom que piden información y la validan. Se implementaron validaciones para cada input y además uno general en el CheckoutForm para que coincidan los emails.

Una vez habilitado el botón para terminar el Checkout, se creará una orden, creando un documento en Firestore, con la información del usuario, el cart y la fecha de la orden.

Se implemento un spinner y se le regresa al usuario el ID de la orden creada, terminando el flujo de la aplicación.


