## Array: métodos
---

### Objetivos
---
* Use the array's length to see how many elements the array has
* Use array modification methods like `join`, `slice`, `concat` to modify arrays or create new arrays
* Search for elements in an array using `indexOf` and `lastIndexOf`
* Describe the difference between a reference type and a value type

**NOTA**

 Respecto a `personal`:

 1. Se comprobó que el valor `25` estuviese dentro del `arr2` con `indexof`
    > Usa *Strict Equality Comparison*, nos devuelve el primer índice desde la izquierda.
 
 2. Se comprobó que el valor `25` estuviese dentro del `arr2` con `includes`
    > Usa el algoritmo *sameValueZero*, produce `true` o `false`.

Respecto a `reference [] === []`:

Los objetos nunca son iguales a menos que dos variables hagan referencia al mismo. No al objeto en sí, sino  
a la dirección de memoria.