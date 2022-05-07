# Módulo 3

## Evaluación final 📋

El ejercicio consiste en desarrollar una página web con el listado de las escenas de las películas donde el actor Owen Wilson ha dicho _wow_.

Contando con los datos de la siguiente [API](https://owen-wilson-wow-api.herokuapp.com/), hay que realizarlo usando **React**.

### ¿Cómo empezar? 📋

Si quieres probar suerte con este proyecto, presta atención a los siguiente pasos:

> ATENCIÓN: Inicialmente, realiza el siguiente comando para poder trabajar con un template de **React** en el proyecto.

`npm install -g create-react-app`

> Con **-g** instalarás la herramienta de manera global en tu ordenador.

---

Si no quieres empezar de cero, descarga este repositorio como archivo [ZIP](https://github.com/Adalab/modulo-3-evaluacion-final-MiriamPoveda/archive/refs/heads/main.zip) para poder utilizar el material a tu gusto/conveniencia.

Si deseas hacerlo, instala las dependencias y **React Router Dom** con los siguientes comandos:

`npm install`

`npm install react-router-dom`

---

######¡¡ Empezamos !!

1. Crear una web con un restultado de 50 escenas de películas aleatorias donde el actor Owen Wilson ha dicho _wow_ mostrando la siguiente información:

   - Póster (**poster**)
   - Película (**movie**)
   - Frase (**full_line**)
   - Año (**year**)

2. Realizar un filtro para buscar por película a través de un _input_. Sólo deben quedar las películas que contengan las letras escritas.

3. Realizar un filtro por año a través de un _select_ donde sólo deben aparecer las películas del año seleccionado.

4. Implementar una funcionalidad que, al hacer **click** sobre una tarejta, aparezca otro tipo de información utilizando las _rutas_ y _React Router DOM_. Estos son los datos que deben aparecer:

   - Nombre de la película
   - Frase completa
   - Director
   - Audio a la escena (debe mostrarse en otra pestaña del navegador)

5. Detalles a tener en cuenta:

- El _input_ debe tener una etiqueta _form_ y, si pulsamos **intro** en él, no debe recargar la página.
- El campo de texto debe funcionar se escriba en mayúsculas o minúsculas y si buscamos un texto que no coincida con ninguna película, se debe mostrar un mensaje de error.

  - `No hay ninguna película que coincida con (texto introducido).`

- Al entrar en el detalle de una escena y volver atrás, no debe desaparecer la información que se haya introducido en el campo de texto.

###### ¡¡ BONUS !!

1. Mejorar visualmente a tu gusto personal toda la web teniendo en cuenta que debe ser _responsive_.

2. Adicionalmente, consigue que la _URL_ del detalle sea visible si la introducimos en el navegador. Después, cuando refresques en navegador, debería seguir mostrándose si está almacenado en _LocalStorage_.

3. Si la ruta que se introduce no coincide con ninguna película, debe mostrarse un mensaje de error.

4. Añadir un extra que ordene el listado de escenas alfabéticamente según el nombre de la película.

###### ¡¡ AL TURRÓN !!

📌 ................................................................. 📌

⚙️ Herramientas utilizadas ⚙️

- Visual Studio Code
- GitHub
- Git
- React SK!

⌨️ Lenguajes utilizados ⌨️

- **HTML**
- **SASS**
  - Partials y anidaciones.
- **React**
  - Componentes y _props_ para pasar datos.
  - Variables de estado, funciones, métodos funcionales de array, eventos...
  - _Hooks_.
  - _React router_.
  - Peticiones al servidor y almacenamiento en _localStorage_.

📌 ................................................................. 📌

Miriam Poveda 😊
