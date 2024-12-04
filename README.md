# FrontEnd - Módulo 3, Laboratorio Virtual 1

## Descripción proyecto

Este proyecto consiste en una página web para un hospital ficticio, incluyendo sus diferentes servicios y personal médico.

## Descripción actividad

En `index.html` se añadió un `details` desplegable que contiene los botones e inputs correspondientes a las operaciones realizadas en esta actividad, los resultados de dichas operaciones se imprimen en consola.

### Implementación JSON

En este caso, se definieron los objetos JSON para doctores y servicios directamente en el archivo `script.js`, para facilidad de acceso. En este mismo archivo hay tres funciones para realizar operaciones sobre ellos:

* `clone(original)`: Utiliza la función `structuredClone(original)` para crear una copia del JSON original, posteriormente se reemplazan los parámetros del primer objeto de la copia con la palabra MODIFICADO. Finalmente, se imprimen ambos objetos en consola.

* `merge(object1, object2)`: Se utiliza el operador rest para crear un nuevo arreglo que contiene todos los objetos contenidos en object1 y object2. Luego, se imprime el nuevo arreglo en consola.

* `parse(target)`: Recorre un arreglo imprimiendo en consola cada uno de sus objetos por separado, y al terminar imprime en consola el arreglo completo usando la función `JSON.stringify()`.

### Estructuras de datos

Para manejar los datos del hopsital, se implementaron tres estructuras de datos con sus clases respectivas:

* `DoctorArray`: Clase que almacena doctores en un arreglo e implementa las siguientes funciones:
    
    * `AddDoctor(doctor)`: Agrega un nuevo doctor al arreglo.
    * `RemoveDoctor(name)`: Busca un doctor por nombre, guarda su índice y posteriormente lo quita del arreglo.
    * `SetDoctors(newDoctors)`: Setea directamente el contenido del arreglo de doctores.
    * `FindDoctor(name)`: Retorna el resultado de la operación find, usando el nombre del doctor como comparador.
    * `Print()`: Imprime el contenido del arreglo usando la operación `JSON.stringify()`.

* `ReserveStack`: Clase que almacena reservas en una pila e implementa las siguientes funciones:

    * `AddReserve(reserve)`: Agrega una nueva reserva a la pila.
    * `GetLatest()`: Retorna el último objeto en la pila.
    * `GetNext()`: Retorna el primer objeto en la pila.
    * `Print()`: Imprime el contenido del arreglo usando la operación `JSON.stringify()`.

* `PatientQueue`: Clase que almacena pacientes en una cola e implementa las siguientes funciones:

    * `EnqueuePatient(patient)`: Suma un paciente a la cola.
    * `DequeuePatient()`: Quita y retorna el primer paciente de la cola.
    * `Print()`: Imprime el contenido del arreglo usando la operación `JSON.stringify()`.


### Algoritmos utilizados

Para la función `sortDoctorsByExperience()` se utilizó bubble sort para ordenar los doctores de menor a mayor experiencia. Se considera que este algoritmo tiene una complejidad de tiempo de O(n²), ya que se recorrerá el algoritmo la misma cantidad de veces que la cantidad de pares contables en dicho arreglo. Esto se considera tanto el tiempo promedio como el mayor; el mejor caso posible es de O(n), cuando el arreglo ya viene ordenado.

Dada la baja complejidad de la condición a comparar (años de experiencia, entero) y la poca cantidad de datos a ordenar, se considera que bubble sort es un algoritmo adecuado para esta tarea; en caso de tener un dataset mayor podría ser relevante utilizar otro algoritmo más eficiente.

## Instrucciones de uso

Clonar el repositorio desde GitHub, o en su defecto descargar los contenidos como zip.

Luego, abrir `index.html` en su navegador favorito.

## Estructura del proyecto

├── /css                 # Archivos css preprocesados con SASS <br>
├── /img                 # Imágenes <br>
├── /js                  # Librerías javascript <br>
├── /styles              # SASS con estructura 7-1, usando solo carpetas relevantes <br>
├──── /abstracts         # Variables y mixins <br>
├──── /base              # Estilos base / generales <br>
├──── /layout            # Estilos para estructuras semanticas <br>
├──── /pages             # Estilos para paginas especificas <br>
├──── /vendors           # Estilos de terceros incluidos (bootstrap) <br>
├──── main.scss          # Contiene todas las referencias de SASS <br>
├── index.html           # Página de inicio <br>
├── team.html            # Página del equipo médico <br>
├── contact.html         # Página de contacto <br>
└── README.md            # Ud. se encuentra aqui

## Creditos

Imágenes obtenidas de:

- [Pexels](https://www.pexels.com)
