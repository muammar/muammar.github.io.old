---
title: Ganando acceso root, o poderes de súper vaca en el G1.
author: muammar
layout: post
permalink: /blog/2009/10/ganando-acceso-root-o-poderes-de-super-vaca-en-el-g1/
categories:
  - Debian
---
El 15 de Septiembre llevé a cabo el cambio de una Mini HP 2133 por un HTC dream G1. De verdad que ha sido uno de los mejores cambios que he hecho en mi vida debido al hecho que la Mini HP 2133 no tiene muy buen soporte para Linux. Luego de jugar los primeros días con el teléfono, me propuse como meta obtener acceso root en el G1. Luego de una búsqueda por google, y unas cuántas horas invertidas, logré hacerlo <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":)" class="wp-smiley" style="height: 1em; max-height: 1em;" />&nbsp;Este post vendría a ser una especie de traducción del post <http://forum.xda-developers.com/showthread.php?t=442480> y algunas de mis experiencias al hacer este procedimiento.  
La primera pregunta que se viene a la cabeza es: ¿Para qué quiero acceso root en mi G1?  
1.- Se pueden instalar distribuciones que tengan soporte para la arquitectura ARM.  
2.- Se pueden correr aplicaciones que requieran de ser root. Por ejemplo, antes no podía acceder vía SSH a mis servidores, ahora sí puedo <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":)" class="wp-smiley" style="height: 1em; max-height: 1em;" />  
3.- Se pueden instalar las versiones de android directamente desde el Android source tree.  
4.- Modificar la imágen de booteo.  
5.- Crear backups completos del estado del teléfono.  
6.- Instalar aplicaciones en la tarjeta SD.  
7.- Usar el teléfono para conectar tu computadora al internet.  
8.- Volver el G1 un router de conexiones inalámbricas.  
9.- ¿Hacer posible instalar la próxima gran actualización, Donut? Ya veremos <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":)" class="wp-smiley" style="height: 1em; max-height: 1em;" />  
Si ninguna de esas razones te logran persuadir, es momento que pares de leer esto. En caso contrario, pues: ¡eres un amante de los poderes de súper vaca!  
Otra pregunta que se viene a la cabeza: ¿al momento de hacer un downgrade, se me va a joder el teléfono, es decir, perderé el desbloqueo de usarlo con otras operadoras? La respuesta es: NO.  
¿Perderé mis datos? Sí, has un backup.  
Bien, dicho lo anterior vamos entonces a proceder a hacer un jailbreak al G1.

<div class="serendipity_imageComment_img">
  <!-- s9ymdb:44 -->
  
  <img width="231" height="346" src="/blog/uploads/burns.jpg" />
</div>

<div class="serendipity_imageComment_txt">
  Excelente
</div>

**Preparando tu teléfono para obtener acceso root**  
Tener acceso root en tu teléfono consiste en explotar un hoyo de seguridad que existió en una de las versiones anteriores de Android. Las versiones que tienen dicho hoyo de seguridad son conocidas como: RC19, RC28, y RC29 (o RC7 para teléfonos obtenidos en UK). Para la versión RC30 (RC8 en UK), Google parcheó el hoyo de seguridad por lo tanto tú teléfono no puede hackearse, pero tranquil@ que todavía podemos hacerlo <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":)" class="wp-smiley" style="height: 1em; max-height: 1em;" />  
Para chequear la versión ve a la pantalla principal y haz click en el botón menu, escoge &#8220;Settings&#8221;, y luego haz click en &#8220;About phone&#8221;. Verás la siguiente pantalla:  
<!-- s9ymdb:45 -->

<img width="320" height="480" style="float: center; border: 0px; padding-left: 5px; padding-right: 5px;" src="/blog/uploads/RC30.png" alt="" />  
Si tienes la versión US-RC30/UK-RC8 o una mayor como CRC1, necesitas primero hacer un downgrade a una versión anterior de android. (Si ya tienes una versión anterior, entonces haz caso omiso de esta parte y ve a la siguiente.)  
1.- Formatea tu tarjeta SD a FAT32. Para ello conecta tu teléfono usando un cable USB, espera a que la notificación te aparezca en la barra de notificaciones de tu teléfono. Luego haz click en la notificación y selecciona: &#8220;Mount&#8221;. Un nuevo disco removible debería aparecer en tu computadora. Utiliza ahora ya sea la opción de Windows de hacer formato dando click derecho o utiliza Gparted en Linux para hacer el formato (necesitas dosfstools).  
2.- Baja la versión [RC29][1] o la [RC7][2]. Descomprime y copia el archivo DREAMIMG.nbh a la tarjeta SD. (RC29 es para US, y RC7 es para UK)  
3.- Apaga el teléfono.  
4.- Mantén presionado el botón de la cámara, y presiona el botón de encendido para entrar en modo bootloader. Deberías ver una pantalla gris/blanca (en caso de que te salga un arcoiris, deja presionado el botón de la cámara hasta que veas la pantalla gris) con las instrucciones para flashear tu teléfono con la actualización que copiaste previamente a tu tarjeta SD. Si no ves la pantalla que comenté, fíjate que has seguido las instrucciones apropiadamente. Tal como se indica en la pantalla, presiona el botón de encendido para comenzar el proceso de actualización. NO HAGAS NADA QUE PUEDA INTERFERIR CON ESTE PROCESO.  
5.- Luego de que haya finalizado el proceso, reinicia el G1 presionando el botón Talk + Menu + Power.  
¡¡Si todo ha salido bien, deberías estar ya en la versión RC29!!  
<!-- s9ymdb:46 -->

<img width="400" height="320" style="float: center; border: 0px; padding-left: 5px; padding-right: 5px;" src="/blog/uploads/crank_yankers_yay.jpg" alt="" />  
**Hackeando la versión RC29 o alguna otra que sea menor**  
1.- Descarga [recovery.img ][3] y copialo a tu tarjeta SD (puedes borrar el archivo DREAMIMG.nbh).  
2.- Descarga el [Hard SPL][4] y copialo a la tarjeta SD.  
3.- Todos los archivos deben estar en la raíz de la tarjeta SD, no los metas en carpetas ni nada por el estilo.  
4.- Reinicia el teléfono y espera hasta que esté totalmente en la pantalla de bienvenida.  
5.- Descarga del android market la aplicación terminal emulator y la aplicación telnet.  
6.- Ejecuta con el terminal emulator lo siguiente:  
**  


> $ cd /system  
> $ cd bin/  
> $ telnetd</p>
</strong>  
7.- Deja corriendo el terminal emulator, y te vas y ejecutas la aplicación telnet e intentas conectarla a localhost en el puerto 23. Si todo sale bien, yay! hemos explotado el bug de seguridad, y deberías ver esto:  
<!-- s9ymdb:47 -->

<img class="serendipity_image_left" width="405" height="236" style="float: center; border: 0px; padding-left: 5px; padding-right: 5px;" src="/blog/uploads/G1_Telnet2.png" alt="" />  
Ahora que ya estamos conectados via telnet ejecutamos lo siguiente:  
**\# mount -o rw,remount -t yaffs2 /dev/block/mtdblock3 /system** ( hace la carpeta /system escribible)  
**\# cd sdcard** (cambia al directorio de tu tarjeta SD)  
**\# flash_image recovery cm-recovery- 1.4.img** (flashea y reemplaza la imágen de recuperación del G1 que viene de fábrica con una imágen que contiene más opciones ;))  
**\# cat cm-recovery-1.4.img > /system/recovery.img** (copia el archivo cm-recovery image a la carpeta /system)  
<!-- s9ymdb:48 -->

<img class="serendipity_image_left" width="457" height="354" style="float: center; border: 0px; padding-left: 5px; padding-right: 5px;" src="/blog/uploads/owned.png" alt="" />  
No todo ha terminado aún, hay cosas por hacer. Tienes que volver a la versión Cupcake de nuevo, para ello recomiendo seguir este video: <http://www.youtube.com/watch?v=vC-T1Yf4m4s&feature=channel_page> en la información del video salen todos los archivos que hay que descargar.  
Es importante señalar que no deben olvidar aplicar la actualización del radio, porque si no el G1 no tomará bien las señales de su proveedor de telefonía celular. Lo otro que hay que tener en mente, es que hay que instalar versiones hackeadas puesto que es posible que el teléfono pierda el root.  
Ahora sí, a disfrutar de los poderes de súper vaca:  
<!-- s9ymdb:49 -->

<img class="serendipity_image_left" width="362" height="400" style="float: center; border: 0px; padding-left: 5px; padding-right: 5px;" src="/blog/uploads/cow.jpg" alt="" />  
**Fuentes:**  
<http://forum.xda-developers.com/showthread.php?t=442480>  
[http://www.maximumpc.com/article/howtos/howto\_hack\_your\_android\_g1_phone?page=0,0][5]  
**Lecturas recomendadas:**  
<http://waod.com.ve/blog/?cat=8>  
**Nota:** no me hago responsable si algo malo sucede :-/

 [1]: http://www.megaupload.com/?d=EMY1HIVU
 [2]: http://koushikdutta.blurryfox.com/G1/DREAMIMG-RC7.zip
 [3]: http://koushikdutta.blurryfox.com/G1RootWalkthrough/recovery.img
 [4]: http://koushikdutta.blurryfox.com/G1RootWalkthrough/HardSPL/update.zip
 [5]: http://www.maximumpc.com/article/howtos/howto_hack_your_android_g1_phone?page=0,0