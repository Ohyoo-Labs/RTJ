# _RTJ - Runtime Type JavaScript #

This module is designed to act as a tool for strict type validation and dynamic type control in JavaScript applications. Its primary function is to ensure that the values assigned to certain variables or properties conform to specific types or custom validations, while also maintaining an observer logic to react to value changes.

## Functions of the Module

### Strict Type Validation:

 - Ensures that values conform to a specific type before being assigned, such as string, number, object, or custom user-registered types.
 - Supports the definition of complex types, like arrays with multiple allowable types.

### Observability:

 - Notifies subscribers when a value changes, making it useful for dynamically reacting in interfaces or backend processes.
 - For instance, this could be used in reactive patterns in frontend frameworks (like Vue.js, React, etc.) or in backend event systems.

### Optional Coercion:

 - Allows values to be transformed before assignment if a coerce method is provided, adding flexibility.

## Typical Applications

### Frontend:

 - Controlling and validating the state in reactive applications (such as Vue.js or React).
 - Implementing an observable data management system with strict validation, adding an additional layer of security.

### Backend:

 - Validating data before processing or storage to ensure consistency in APIs or databases.
 - Monitoring changes in configurations with prior validation.

## An Alternative to What?

### Alternative to TypeScript:

**_RTJ** provides functionalities similar to `TypeScript` but at runtime.
`TypeScript` validates types during development and compilation, whereas **_RTJ** validates them at runtime.
If `TypeScript` is not an option (due to environment restrictions or preference), this module can ensure strict type enforcement.

### Alternative to Libraries like `ajv` or `yup`:

While libraries like `ajv` and `yup` are primarily designed for JSON schema validation, they share some similarities:
 - Both perform complex validations.
 - Both allow custom type definitions.
However, **_RTJ** is more specific to dynamic control and observability at runtime, whereas these libraries are commonly used for bulk data validation.

### Alternative to `Observers` or `EventEmitter`:

Provides a more specific and structured way to observe value changes, directly tied to type validation.

## Summary

**Primary Function:** Dynamically validate and manage values with strict typing in JavaScript applications while reacting to changes in those values.
**An Alternative to:** TypeScript at runtime, schema validation libraries (`ajv`, `yup`), or observability systems (EventEmitter).

This module sits between validation tools and reactivity frameworks, making it valuable for scenarios that require strict validation and reactive logic without introducing heavy dependencies.

**_RTJ** is a project by OhyooLabs.
[]: # (End)