## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### ARROW FUNCTION
Son funciones anónimas con una sintaxis más corta, no puedes ser relacionadas con métodos y no pueden ser usadas como constructores (profundizar más)

En las arrow function solo funcionan los parentesis si se resuelve todo en una sola linea en caso contrario usar llaves

### PASAR PARAMETROS A COMPONENTES 

### MÉTODOS THE BIND 
(Encontrar errores, puntos de interrupción, breakpoints para poder analizar lo que esta pasando)

### Destructuring

Cuando tienes una propiedad con un nombre que quieres asignar a una variable con el mismo nombre que la propiedad la puedes asignar usando esta técnica (objetos complejos y arrays con varios elementos)

### Rest Operator (...)

Se utiliza para extraer los elementos restantes su resultado sera un array con esos elementos

### Templating String

### PropTypes

Ayuda a verificar las props de los componentes y en dado caso comunica que estan faltando valores (en la consola), esta verificación se hace durante la ejecución, no en la compilación. 

.shape()

### Class Component

### Functional Component

### handleUpdateClick

### constructor
Palabra reservada

## Fetch
Es un método que devuelve una PROMISE, devuleve un RESPONSE y este se maneja con distintos métodos según los datos que se desee obtener

### Promise
Es un objeto que es utilizado para peticiones asíncronas y representa un valor que puede estar disponible en el momento, en el futuro o nunca y se puede encontrar en cualquiera de los siguientes estados: Pendiente *pending (estado inicial), Cumplida *fulfill (la operación se completo correctamente), Rechazada *rejected (la operación falló).

### Syntactic Sugar


### libreria convert unit

## Patrones de diseño

### Solid

Single Responsability (Unica responsabilidad) que cada componente tenga un solo objetivo asi si en algún momento se quiere cambiar será más fácil.

### Ciclos de vida

Primer ciclo (ciclo de montaje)

constructor: inicializar estado (solo se utiliza cuando hay un estado), sucede antes de que se monte el componente
render: es el unico método requerido, mostrara el DOM.
componentDidMount: iniciar peticiones al servidor, retornara datos que queremos mostrar en el component (solo sucede una vez)

Segundo ciclo (ciclo de actualización)

render
componentDidUpdate: se ejecuta despues que ocurra una actualización, compara los valores de las propiedades antes y despues de la actualización, así como realizar una petición al servidor con base en esos valores.
componentWillReceiveProps: se ejecuta cada vez que hay alguna actualización (¿cual es la diferencia con componentDidUpdate) -no aconsejado-

Tercer ciclo (ciclo de desmontale)

Cuando un componente va a ser retidado del DOM 

Cuando el componente deja de ser visible

Ciclo Alternanitivo: Manejo de errores

Solo se ejecutara si hay algún problema en el renderizado de alguno de los ciclos de vida o en el costructor

### Operadores Ternarios

### ESLint

Es una herramienta que de análisis, que identifica patrones problemáticos que encuentra en el código Javascript, también puede ser configurado con reglas personales

## Comunicacion entre componentes:

### "Burbujeo de acciones"

### URL

### Redux (estado de aplicación)

### Media Queries
Técnica de CSS3 que mediante la detección de los tamaños de pantalla, determinamos los estilos CSS que vamos a utilizar

#### Viewport

### Flex box

### Filter()

### map()

### One Way Data Flow (flujo de datos de unica dirección)
Los componentes padre se encargan de pasar las propiedades que despues utilizaran sus hijos (los hijos nunca se comunican con los padres)

### Proceso de Reconciliation

### SPA vs MPA

Single Page Application


Multi Page Application (Modelo Vista Controlador)
Ante la petición de una URL obtenemos una representacion visual del DOM

### REDUX (Estado de la Aplicación)
Framwork que maneja el estado de la aplicación, Redux se basa en que el estado es único y global en toda la aplicación y hay un único componente llamado store que guarda ese estado, esto nos ayudara a buscar en un solo lugar el estado de los compornentes que se renderizan, lo que hace más fácil acceder al estado.
El estado se modifica por acciones, las cuales pueden tener asociado un valor en el cual se indica lo que se quiere modificar de ese estado.

### dispatch

