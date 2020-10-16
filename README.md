{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\csgray\c0;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
#INSTRUCCIONES DOCKER COMPOSE\
\
1. Abrir conexi\'f3n a terminal o linea de comando.\
  \
2. Verificar que los siguientes archivos est\'e9n en un directorio a su elecci\'f3n:\
\
- Dockerfile_ansible\
- playdesa3.yml\
- Dockerfile_ssh\
- docker-compose.yml\
- index.html\
- serverNode.js\
  \
3. En ese directorio a elecci\'f3n ejecute el siguiente comando:\
\
   ***docker-compose up -d***\
\
4. Conectarse al contenedor ansible que esta en ejecuci\'f3n.\
\
5. Una vez conectado al contenedor ansible, asegurarse que este posicionado en el directorio /root, luego ejecutar el siguiente comando:\
\
   ***ansible-playbook playdesa3.yml***\
\
6. Una vez terminada la ejecuci\'f3n del playbook, validar los servicios aprovisionados en cada contenedor de la siguiente forma:\
\
- Para contenedor Ubuntu_ssh1 que contiene MongoDB, abrir un browser y digitar lo siguiente:\
\
  **http://localhost:27017**\
\
  Debe mostrar el siguiente mensaje:\
\
  >*It looks like you are trying to access MongoDB over HTTP on the native driver port*.\
\
- Para contenedor Ubuntu_ssh2 que contiene Apache, abrir un browser y digitar lo siguiente:\
  \
  **http://localhost:80**\
\
  Debe mostrar el siguiente mensaje:\
\
   >*Server Apache de Verito Diaz*\
\
- Para contenedor Ubuntu_ssh3 que contiene Node.js, abrir un browser y digitar lo siguiente:\
\
  **http://localhost:3000**\
\
  Debe mostrar el siguiente mensaje:\
\
  >*Esta es una prueba de servidor node.js de Verito Diaz para el Desafio3!*\
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardeftab720\pardirnatural\partightenfactor0

\f1\fs22 \cf3 \kerning1\expnd0\expndtw0 \CocoaLigature0 \
\
\
\
\
 \
\
\
}