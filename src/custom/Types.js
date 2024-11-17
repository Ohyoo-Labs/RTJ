/* 
* Types.js is a file that contains all the types defined by the user.
* The types are defined as objects with a name and a validate function.
* The validate function is used to check if a value is of the type defined.
* The Types object is exported to be used in the RunType.js file.
* Author: Ohyoo Labs - 2024 - https://ohyoo.net/
*  All Rights Reserved.
 */
// Custom Types defined by the user
export const Types = {
  number: {
    name: 'number',
    validate: value => typeof value === 'number' && !isNaN(value),
  },
  array: {
    name: 'array',
    validate: value => Array.isArray(value),
  },
  // You can add more types here
  // For example:
  // string: {
  //   name: 'string',
  //   validate: value => typeof value === 'string',
  // },
};