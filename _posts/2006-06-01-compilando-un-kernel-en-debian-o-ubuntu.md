---
title: Compilando un kernel en debian o ubuntu
author: Muammar El Khatib
layout: post
permalink: /blog/2006/06/compilando-un-kernel-en-debian-o-ubuntu/
categories:
  - Linux
---
Lo primero que debemos hacer es bajarnos las herramientas que nos permitirán compilar nuestro kernel. Estas herramientas en primer lugar se obtienen haciendo:  
\# apt-get install build-essential kernel-package  
Luego lo que necesitas es obtener las fuentes del kernel. Puedes obtenerlas bajándolas directamente de <a href="http://kernel.org" target=blank" >http://kernel.org</a> o haciendo lo siguiente:  
\# apt-get install kernel-source (para debian)  
$ sudo apt-get install linux-source (para ubuntu)  
Si seguiste el paso de bajarte el kernel por apt, automáticamente se instalará en la carpeta /usr/src/, ahora en caso de que lo hayas bajado de kernel.org debes entonces descomprimirlo [0] y moverlo a /usr/src/.  
Ahora, debes tener presente lo siguiente. ¿Quieres hacer una configuración con una ventana (xconfig) o con menuconfig?  
Si vas a hacerlo con xconfig debes instalar:  
\# apt-get install libqt3-dev (para debian)  
$ sudo apt-get install libqt3-dev (para ubuntu)  
Si vas a hacerlo con menuconfig debes instalar:  
\# apt-get install libncurses5-dev (para debian)  
$ sudo apt-get install libncurses5-dev (para ubuntu)  
Ahora, hacer una configuración del kernel desde cero es un poco engorroso, aunque cada quien es libre de decidir si quiere hacerlo desde cero. Pero supongamos que tienes un kernel en donde funciona todo menos el sonido y vas a recompilar para obtener sonido, entonces tomas la configuración de ese kernel y cambias en el nuevo, solo el sonido que es lo que interesa.  
Entonces, si escogiste copiar tu configuración vieja y a partir de esa construir la siguiente haz:  
#cp /boot/config-XXXX /usr/src/tukernel/.config  
Para abreviar, aquellos que estén en Ubuntu, si no tienen la cuenta de súper usuario agreguen a todos los comandos sudo al principio <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":-)" class="wp-smiley" style="height: 1em; max-height: 1em;" />  
Luego te sitúas dentro de la carpeta de tu nuevo kernel:  
\# cd /usr/src/tucarpetadelkernel  
Ya estando dentro de la carpeta solo debes hacer para comenzar a configurar:  
\# make xconfig  
Te sale la ventana de configuración, y en el menú file buscas load y cargas el .config que copiaste (más atrás dice cómo)  
Si lo vas a hacer por menuconfig:  
#make oldconfig menuconfig ó make .config menuconfig  
Nota: Recordar que se debe compilar dentro de la carpeta del kernel, esto es para los que están haciendo esto por primera vez <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":-)" class="wp-smiley" style="height: 1em; max-height: 1em;" />  
Configura tu kernel de acuerdo a tus necesidades, tomándote todo el tiempo que quieras para leer cuidadosamente aquello que vas a configurar. (en cada opción hay mucha información)  
Luego que hagas configurado, guardas. Y ahora si vamos a compilar. Tienes que ejecutar estos dos comandos:  
\# make-kpkg clean  
\# make-kpkg &#8211;append-to-version=.XXXX &#8211;initrd kernel_image  
Nota: en XXXX puedes colocar una fecha, o cualquier número que desees.  
Como se ha incluido –initrd al momento de comenzar la compilación saldrá un mensaje de si deseamos abortar el proceso, contestamos no. initrd lo que hace es crear una imagen con ese mismo nombre dentro del directorio /boot  
Cuando comience a compilar puedes ir a tomar un café, o una soda. Esto tarda, y el tiempo que lo hará dependerá de tu procesador y memoria RAM <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":-)" class="wp-smiley" style="height: 1em; max-height: 1em;" />  
Si todo sale bien se te creará un archivo *.deb en la carpeta /usr/src  
kernel-image-tuversión.XXXX\_10.00.Custom\_i386.deb  
Ahora instalas el kernel:  
#dpkg -i kernel-image-tuversión.XXXX\_10.00.Custom\_i386.deb  
Ahora reinicias (y a cruzar los de dedos)  
Si todo arranca bien, y no puedes creer que el kernel lo configuraste tu mismo haz:  
$uname -r  
2.6.16.18.2705206 (este es el kernel 2.6.16 que compile el 27 de mayo de 2006, siguiendo los pasos que describí anteriormente)  
Con todo lo descrito anteriormente no hace falta hacer make modules_install y make install ni actualizar el grub o el lilo. Ya después puedes borrar la carpeta donde compilaste el kernel:  
#rm -R /usr/src/tuversióndekernel  
Como recomendación puedo agregar que compilar un kernel de la forma larga no esta de más, siempre es bueno aprender varios métodos.  
Cualquier duda, corrección a este artículo será respondida. Pueden utilizar la zona de comentarios de este artículo o en la sección de contáctame aparecen mis correos electrónicos.  
[0] para descomprimir la sintaxis puede ser:  
\# tar jxvf nombredelkernel.tar.bz2  
***Muammar El Khatib.***