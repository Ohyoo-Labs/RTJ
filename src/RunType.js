/* 
*  Static Typing: 
*  - Static typing is a type of typing that is done at interpretation time, before the program is run.
*  Author: Ohyoo Labs - 2024 - https://ohyoo.net/
*  All Rights Reserved.
 */

export class _RTJ {
  static customTypes = new Map();

  static registerType(typeName, validator) {
    _RTJ.customTypes.set(typeName.toLowerCase(), validator);
  }

  constructor(initialValue, type) {
    try {
      this._type = this._parseType(type);
      this._observers = new Set();
      this._value = this._validateAndCoerce(initialValue);
    } catch (error) {
      console.error("Error initializing _RTJ instance:", error);
      throw error;
    }
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    try {
      const validatedValue = this._validateAndCoerce(newValue);
      if (!this._isEqual(this._value, validatedValue)) {
        this._value = validatedValue;
        this._notifyAll();
      }
    } catch (error) {
      console.error("Error setting value:", error);
      throw error;
    }
  }

  subscribe(observer) {
    try {
      this._observers.add(observer);
      return () => this._observers.delete(observer);
    } catch (error) {
      console.error("Error subscribing observer:", error);
      throw error;
    }
  }

  _notifyAll() {
    try {
      this._observers.forEach(observer => observer(this._value));
    } catch (error) {
      console.error("Error notifying observers:", error);
      throw error;
    }
  }

  _validateAndCoerce(value) {
    try {
      if (this._type.validate(value)) {
        return this._type.coerce ? this._type.coerce(value) : value;
      }
      throw new TypeError(`El valor debe ser de tipo ${this._type.name}`);
    } catch (error) {
      console.error("Error validating and coercing value:", error);
      throw error;
    }
  }

  _validateType(value, type) {
    try {
      const lowerType = type.toLowerCase();
      
      // Primero revisar tipos básicos
      switch(lowerType) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'undefined':
        case 'function':
          return typeof value === type;
        case 'array':
          return Array.isArray(value);
        case 'date':
          return value instanceof Date;
        case 'object':
          return value !== null && typeof value === 'object' && !Array.isArray(value);
        case 'map':
          return value instanceof Map;
        case 'set':
          return value instanceof Set;
        case 'promise':
          return value instanceof Promise;
        case 'regexp':
          return value instanceof RegExp;
      }

      // Luego revisar tipos personalizados registrados
      if (_RTJ.customTypes.has(lowerType)) {
        return _RTJ.customTypes.get(lowerType)(value);
      }

      throw new TypeError(`Tipo no soportado: ${type}`);
    } catch (error) {
      console.error(`Error validating type '${type}' for value:`, value, error);
      throw error;
    }
  }

  _parseType(type) {
    try {
      // Para arrays con tipos múltiples permitidos
      if (Array.isArray(type) && type.length > 0) {
        const allowedTypes = type.flat();
        return {
          name: `Array<${allowedTypes.join('|')}>`,
          validate: value => {
            if (!Array.isArray(value)) return false;

            return value.every(item => {
              return allowedTypes.some(allowedType => {
                return this._validateType(item, allowedType);
              });
            });
          }
        };
      }

      // Para tipos simples
      if (typeof type === 'string') {
        return {
          name: type,
          validate: value => this._validateType(value, type)
        };
      }

      return type;
    } catch (error) {
      console.error("Error parsing type:", type, error);
      throw error;
    }
  }

  _isEqual(a, b) {
    try {
      if (Array.isArray(a) && Array.isArray(b)) {
        return a.length === b.length && a.every((v, i) => this._isEqual(v, b[i]));
      }
      return a === b;
    } catch (error) {
      console.error("Error comparing values:", a, b, error);
      throw error;
    }
  }
}