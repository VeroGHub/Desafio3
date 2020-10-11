INSTRUCCIONES DOCKER COMPOSE

1. Abrir conexion a terminal o linea de comando.


2. Verificar que los siguientes archivos esten en un directorio a su eleccion:
	Dockerfile_ansible
	playdesa3.yml
	Dockerfile_ssh
	docker-compose.yml 

3. En ese directorio a eleccion ejecute el siguente comando:

 	docker-compose up -d

4. Conectarse al contenedor ansible que esta en ejecucion.

5. Una vez conectado al contenedor ansible, asegurarse que este posicionado en el directorio /root, luego ejecutar el siguiente comando:

	ansible-playbook playdesa3.yml

6. Cuando solicite passphrase, ingresar 1 espacio en blanco y luego Enter, nota: esto se solicitara para los 3 contenedores ubuntu_ssh 

	



