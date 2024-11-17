# _RTJ - Runtime Type JavaScript #

  Este módulo sirve como una herramienta de validación estricta y control de tipos dinámicos en aplicaciones JavaScript. Su función principal es garantizar que los valores asignados a ciertas variables o propiedades cumplan con tipos específicos o validaciones personalizadas, mientras mantiene una lógica de observadores para reaccionar a cambios de valor.

## Funciones del módulo

### Validación estricta de tipos:

 - Asegura que los valores sean de un tipo específico antes de asignarlos, como string, number, object, o tipos personalizados registrados por el usuario.
 - Permite la definición de tipos complejos, como arrays de tipos múltiples.

### Observabilidad:

 - Notifica a los suscriptores cuando un valor cambia, útil para reaccionar dinámicamente en interfaces o procesos backend.
 - Esto es útil, por ejemplo, en patrones reactivas como en frameworks frontend (Vue.js, React, etc.) o sistemas de eventos backend.

### Coerción opcional:

 - Permite transformar valores antes de asignarlos si se proporciona un método coerce, haciendo que sea más flexible.

## Aplicaciones típicas

### Frontend:

 - Controlar y validar el estado en aplicaciones reactivas (como Vue.js o React).
 - Implementar un sistema de gestión de datos observables con validación estricta, actuando como una capa de seguridad adicional.

### Backend:

 - Validar datos antes de procesarlos o almacenarlos, garantizando consistencia en APIs o bases de datos.
 - Monitorear cambios en configuraciones, con validaciones previas.

## Alternativa a qué?

### Alternativa a TypeScript:

**_RTJ** ofrece algunas funcionalidades similares a `TypeScript`, pero en tiempo de ejecución.
`TypeScript` valida tipos en tiempo de desarrollo y compilación, mientras que **_RTJ** valida en tiempo de ejecución.
Si no puedes usar `TypeScript` (por restricciones del entorno o preferencia), este módulo puede garantizar tipos estrictos.

### Alternativa a bibliotecas como `ajv` o `yup`:

Aunque librerías como `ajv` y `yup` están diseñadas principalmente para validación de esquemas JSON, tienen similitudes:
 - Ambas realizan validaciones complejas.
 - Ambas permiten definiciones de tipos personalizados.
Sin embargo, **_RTJ** es más específico para control dinámico en tiempo de ejecución y observabilidad, mientras que estas librerías son más usadas para validaciones de datos en bloque.

### Alternativa a `Observers` o `EventEmitter`:

Proporciona una forma más específica y estructurada de observar cambios de valor, vinculada directamente a la validación de tipos.

## Resumen

**Función principal:** Validar dinámicamente y gestionar valores con tipos estrictos en aplicaciones JavaScript, mientras permite reaccionar a cambios en esos valores.
**Alternativa a:** `TypeScript` en tiempo de ejecución, bibliotecas de validación de esquemas (`ajv`, `yup`), o sistemas de observabilidad (`EventEmitter`).

Este módulo se posiciona entre herramientas de validación y frameworks de reactividad, siendo útil para casos donde se requiere validación estricta y lógica reactiva sin introducir grandes dependencias.

**_RTJ** es un proyecto de OhyooLabs.
[]: # (End)