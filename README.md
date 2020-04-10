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

constructor: inicializar estado
componentWillMount: inicialización liviana (su uso esta desaconsejado, profundizar)
render: lo que mostrara el DOM (concretamente, ¿qué es el DOM?)
componentDidMount: iniciar peticiones al servidor 

Segundo ciclo (ciclo de actualización)

componentWillUpdate:
render
componentDidUpdate: se ejecuta solo si hay actualizaciones, es decir cuando se modifica una propiedad o en el estado.

### Operadores Ternarios

### ESLint

Es una herramienta que de análisis, que identifica patrones problemáticos que encuentra en el código Javascript, también puede ser configurado con reglas personales




