# INSTRUCCIONES DOCKER COMPOSE

1. Abrir conexion a terminal o linea de comando.
 
2. Verificar que los siguientes archivos esten en un directorio a su eleccion:

- Dockerfile_ansible
- playdesa3.yml
- Dockerfile_ssh
- docker-compose.yml
- index.html
- serverNode.js
 
3. En ese directorio a eleccion ejecute el siguiente comando:

   ***docker-compose up -d***

4. Conectarse al contenedor ansible que esta en ejecucion.

5. Una vez conectado al contenedor ansible, asegurarse que este posicionado en el directorio /root, luego ejecutar el siguiente comando:

   ***ansible-playbook playdesa3.yml***

6. Una vez terminada la ejecucion del playbook, validar los servicios aprovisionados en cada contenedor de la siguiente forma:

- Para contenedor Ubuntu_ssh1 que contiene MongoDB, abrir un browser y digitar lo siguiente:

  **http://localhost:27017**

  Debe mostrar el siguiente mensaje:

  >*It looks like you are trying to access MongoDB over HTTP on the native driver port*.

- Para contenedor Ubuntu_ssh2 que contiene Apache, abrir un browser y digitar lo siguiente:
  
  **http://localhost:80**

  Debe mostrar el siguiente mensaje:

   >*Server Apache de Verito Diaz*

- Para contenedor Ubuntu_ssh3 que contiene Node.js, abrir un browser y digitar lo siguiente:

  **http://localhost:3000**

  Debe mostrar el siguiente mensaje:

  >*Esta es una prueba de servidor node.js de Verito Diaz para el Desafio3!*








