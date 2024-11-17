/* 
* RTJ.tests.js
* Tests for RunType.js
* Author: Ohyoo Labs - 2024 - https://ohyoo.net/
*  All Rights Reserved.
 */
import { Types, _RTJ } from "./custom/index.js";

// Tests cases
try {
  console.log('=== Test 1: Tipos básicos ===');
  let num = new _RTJ(5, 'number');
  console.log('Número inicial:', num.value); // 5
  num.value = 10;
  console.log('Número modificado:', num.value); // 10
  num.value = "10"; // Must throw error
} catch (e) {
  console.log('Error esperado:', e.message);
}

try {
  console.log('\n=== Test 2: Arrays de tipo único ===');
  let numArray = new _RTJ([], ['number']);
  numArray.value = [1, 2, 3];
  console.log('Array de números:', numArray.value); // [1, 2, 3]
  numArray.value = [1, "2", 3]; // Must throw error
} catch (e) {
  console.log('Error esperado:', e.message);
}

try {
  console.log('\n=== Test 3: Arrays de tipos mixtos ===');
  let mixedArray = new _RTJ([], ['number', 'string']);
  mixedArray.value = [1, "dos", 3, "cuatro"];
  console.log('Array mixto:', mixedArray.value); // [1, "dos", 3, "cuatro"]
  mixedArray.value = [1, "dos", true]; // Must throw error
} catch (e) {
  console.log('Error esperado:', e.message);
}

try {
  console.log('\n=== Test 4: Tipos personalizados ===');
  // Custom type registration
  _RTJ.registerType('positiveNumber', value => 
    typeof value === 'number' && value > 0
  );

  let posNum = new _RTJ(5, 'positiveNumber');
  console.log('Número positivo:', posNum.value); // 5
  posNum.value = 10;
  console.log('Número positivo modificado:', posNum.value); // 10
  posNum.value = -5; // Must throw error
} catch (e) {
  console.log('Error esperado:', e.message);
}

try {
  console.log('\n=== Test 5: Observers ===');
  let observed = new _RTJ(0, 'number');
  observed.subscribe(value => console.log('Valor observado:', value));
  observed.value = 42; // Must print "Valor observado: 42"
  observed.value = 42; // Does not print anything
  observed.value = true; // Must throw error
} catch (e) {
  console.log('Error inesperado:', e.message);
}

try {
  console.log('\n=== Test 6: Tipos de objeto ===');
  let dateVar = new _RTJ(new Date(), 'date');
  console.log('Fecha es válida:', dateVar.value instanceof Date); // true
  // Hardcode a date
  dateVar.value = new Date('2024-01-01');
  console.log('Fecha manual:', dateVar.value); // 2024-01-01T00:00:00.000Z
  dateVar.value = "2024-01-01"; // Must throw error
} catch (e) {
  console.log('Error esperado:', e.message);
}

try {
  console.log('\n=== Test 7: Tipos personalizados ===');
  // Use the custom type from the Types object
  let number = new _RTJ(42, Types.number);
  console.log('Número:', number.value); // 42
  number.value = 43;
  console.log('Número modificado:', number.value); // 43
  number.value = '42'; // Must throw error
} catch (e) {
  console.log('Error esperado:', e.message);
}

/* describe('RunType.js', () => {
  describe('Custom Types', () => {
    it('should allow the user to define custom types', () => {
      const customType = {
        name: 'evenNumber',
        validate: value => Types.number.validate(value) && value % 2 === 0,
      };
      _RTJ.registerType('evenNumber', customType);
      const evenNumber = new _RTJ(4, 'evenNumber');
      expect(evenNumber.value).toBe(4);
      expect(() => new _RTJ(5, 'evenNumber')).toThrow(TypeError);
    });
  });

  describe('Basic Types', () => {
    it('should allow the user to create a variable with a basic type', () => {
      const number = new _RTJ(42, 'number');
      expect(number.value).toBe(42);
      number.value = 43;
      expect(number.value).toBe(43);
      expect(() => number.value = '42').toThrow(TypeError);
    });

    it('should allow the user to create a variable with an array type', () => {
      const array = new _RTJ([1, 2, 3], 'array');
      expect(array.value).toEqual([1, 2, 3]);
      array.value = [4, 5, 6];
      expect(array.value).toEqual([4, 5, 6]);
      expect(() => array.value = '42').toThrow(TypeError);
    });

    // Add more tests for other basic types
  });

  // Add more tests for other features of RunType.js
}); */

// Run the tests with `npm test` or `yarn test`
// You should see the tests pass
// If you want to add more tests, you can add them to this file