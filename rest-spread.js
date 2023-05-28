const filterOutOdds = (...args) => {
  return args.filter((num) => {
    return num % 2 === 0;
  });
};
console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 5, 6, 5));

//************************************************************************** */

const findMin = (...args) => {
  return args.reduce((acc, val) => {
    if (val < acc) {
      acc = val;
    }
    return acc;
  });
};
console.log(findMin(-23, -3, -4, 100));

//************************************************************************** */

const mergeObjects = (obj1, obj2) => ({
  ...obj1,
  ...obj2,
});
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

//************************************************************************** */

const doubleAndReturnArgs = (arr, ...args) => [...arr, args.map((v) => v * 2)];
console.log(doubleAndReturnArgs([2, 3], 4, 100));

//************************************************************************** */

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};
console.log(removeRandom([2, 3, 4, 100]));

//************************************************************************** */

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];
console.log(extend([2, 3, 4, 100], [1, 2, 45]));

//************************************************************************** */

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
console.log(addKeyVal({ a: 1, b: 2 }, "c", 3));

//************************************************************************** */

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  if (newObj.hasOwnProperty(key)) {
    delete newObj[key];
    return newObj;
  } else {
    return "key not found";
  }
};
console.log(removeKey({ a: 1, b: 2, c: 3, f: 5 }, "f"));

//************************************************************************** */

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(combine({ a: 1, b: 2 }, { c: 3, f: 5 }));

//************************************************************************** */

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = { ...obj };
  if (newObj.hasOwnProperty(key)) {
    newObj[key] = val;
    return newObj;
  } else {
    return "key not found";
  }
};
console.log(update({ a: 1, b: 2, c: 3, f: 5 }, "b", 10));
