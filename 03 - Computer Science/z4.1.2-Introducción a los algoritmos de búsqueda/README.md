# Introducción a los algoritmos de búsqueda

En programación muchas veces tenemos vectores de datos como arreglos, hashes, sets, entre otros y necesitamos obtener un elemento específico; por lo que estamos acostumbrados a recorrer todo el vector para buscar un elemento, pero esto nos puede tomar más tiempo del que quisiéramos. 

### Ejemplo

Imaginemos que vamos a la playa con nuestro hermanito de 6 años, y de repente se pierde. Buscarlo se convertiría en una odisea, pero hay varias formas de buscarlo rápidamente.

Si iniciáramos con ver una por una las personas para saber si es la persona que estamos buscando; entonces hay **n** personas en la playa y revisar a cada una nos toma 1 segundo, en el mejor de los casos la primera persona que ves es tu hermanito pequeño y te toma **1** segundo; peor en el peor de los casos es la última persona que vas será nuestro hermanito. *A este tipo de búsqueda, que va elemento por elemento del vector, le llamamos **Búsqueda Secuencial*.**

Imaginemos que pudiéramos ordenar a toda la gente en una fila ordenada por edades. Llamamos a la persona que se encuentra en la mitad de la fila para preguntarle su edad y si es mayor a 6 años entonces sabríamos que nuestro hermanito se encuentra entre las personas que están antes de la persona a la que le acabábamos de preguntar; por lo que podríamos ignorar a la segunda mitad de la fila y enfocarnos en la primera mitad. Repetimos el proceso una y otra vez hasta qué coincidan las edades y encontramos a nuestro hermanito. A este tipo de búsqueda le llamamos ***Búsqueda Binaria.*** En el peor de los casos esta búsqueda tendrá una complejidad de tiempo de **O(logn)**, y en el mejor de los casos, el elemento de la mitad es el elemento que buscas **O(1)**.

# Lecturas en campus

- Kata JS Computer Science - Algoritmos de búsqueda.

# Presentaciones

[10.2.1 Algoritmos de Búsqueda](https://docs.google.com/presentation/d/1h5dbzPp9uQCvw93bKiI3xZ0DKZ_K0pMTFccM7bkCJ3o/edit?usp=sharing)