# node-server
¿Qué sucedió al usar async y await?
Cuando utilizamos async y await, las funciones asíncronas como addTask(), completeTask() y showMenu() se vuelven fácilmente manejables y legibles. Podemos usar la palabra clave await antes de las llamadas a estas funciones para esperar a que se resuelvan las promesas, lo que hace que el código se ejecute de forma secuencial y resulte en un flujo más claro y conciso.

¿Qué sucedió al usar el método then()?
Al utilizar el método then() en las funciones removeTask() y showMenu(), estamos encadenando las promesas y utilizando el enfoque tradicional de manejo de promesas. Cuando llamamos a removeTask().then(), esperamos a que se resuelva la promesa de removeTask() y luego ejecutamos el código en la función then() correspondiente. Esto también nos permite manejar los posibles errores utilizando el método catch().

¿Qué diferencias encontraste entre async, await y el método then()?
La diferencia principal es la forma en que se estructura el código y cómo se manejan las promesas. Con async/await, podemos escribir el código de forma más secuencial y similar a código síncrono, lo que facilita su comprensión. Con el método then(), encadenamos las promesas y manejamos el flujo de control a través de funciones then() y catch().

En resumen, async y await brindan una sintaxis más limpia y legible para manejar promesas, mientras que el método then() permite encadenar y manejar promesas de manera más explícita. Ambos enfoques son válidos y dependen de la preferencia personal y de las necesidades específicas del proyecto.
