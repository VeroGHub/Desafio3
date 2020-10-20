# Argumento

Segun lo revisado en base a la documentacion enviada para modularizar playbook, se entendio que esta funcionalidad es factible utilizarla para paquetes, roles o tareas en comun para varios servidores, que para nuestro caso, el playbook generado no tiene tareas comunes para los tres servidores ubuntu, cada servidor ubuntu esta customizado de manera particular al desafio requerido, a considerar:

- **Ubuntu1:** Instala MongoDB, realiza configuraciones sobre MongoDB e inicia servicio MongoDB.
- **Ubuntu2:** Instala Apache, copia index customizado e inicia servicio Apache.
- **Ubuntu3:** Instala Node.js, NPM y ejecuta servicio Node.js

Por lo que no se toma esta opcion para este desafio, se tomara en consideracion si los proximos desafios lo ameriten.












