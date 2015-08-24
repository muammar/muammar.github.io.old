---
title: Brillo de pantalla LCD en toshiba satellite m115-s3144
author: Muammar El Khatib
layout: post
permalink: /blog/2008/09/brillo-de-pantalla-lcd-en-toshiba-satellite-m115-s3144/
categories:
  - Debian
---
Para aquellos que tengan laptops toshiba m115 con BIOS phoenix y todavía no hayan podido cambiar el brillo de la pantalla, el problema ha sido resuelto. Hay un proyecto llamado omnibook, cuya página web es: <http://omnibook.sourceforge.net>.  
Para poder cambiar el brillo al lcd lo que tenemos que hacer es:  
1) Bajarnos la última versión de omnibook del svn:  
svn co https://omnibook.svn.sourceforge.net/svnroot/omnibook/omnibook/trunk/  
2) Compilarlo e instalarlo:  
make  
make install  
make load  
Si todo salió bien, al hacer un ls en /proc/omnibook debería verse lo siguiente:  
muammar@obey:~$ ls /proc/omnibook/  
dmi lcd version  
muammar@obey:~$  
3) Si logras ver los archivos listados en el directorio /proc/omnibook para cambiar el brillo de la pantalla solo tienes que hacer como súper usuario:  
obey:/home/muammar# echo 1 > /proc/omnibook/lcd  
**Nota:** los valores del brillo van desde 0 hasta 7. Siento 7 el valor máximo de brillo.  
Ahora puedes verificar:  
obey:/home/muammar# cat /proc/omnibook/lcd  
LCD brightness: 1 (max value: 7)  
obey:/home/muammar#  
Listo, ya no nos quedaremos ciegos antes de los 30 <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":-)" class="wp-smiley" style="height: 1em; max-height: 1em;" />  
4) Agregar el módulo en /etc/modules de la siguiente manera como súper usuario:  
**Nota:** En caso de tener otros módulos configurados en modules, recomiendo utilizar un editor de textos y agregar omnibook, de lo contrario los otros módulos que tengas en modules serán borrados al ejecutar el echo.  
echo omnibook > /etc/modules  
Espero que sea de ayuda. Saludos.  
***Actualización:***  
Hace un tiempo que publiqué esto. La mejor solución es flashear el BIOS a la versión más nueva. Lo que se tiene que hacer es bajar la versión más nueva del BIOS correspondiente a la laptop de la página oficial de Toshiba, archivo *.exe, lo descomprimes (tienes que ingeniártelas), y luego buscas la imagen ISO correspondiente, la quemas en un CD, booteas con ese CD y no te vayas a asustar cuando la máquina empiece a chillar xD Si todo sale bien, a mi me salió bien ;-), ya los hotkeys de brillo así como otros adicionales funcionan.  
De verdad resultaba molestoso estar haciendo echo valordeseado > /proc/omnibook/lcd y reiniciar para tomar el brillo deseado.  
PD. Yo actualicé el BIOS de mi M115-S3144 de la versión 1.40 a la 1.50, y ahora todo bien.