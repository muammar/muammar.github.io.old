---
title: USB en VirtualBox.
author: muammar
layout: post
permalink: /blog/2008/12/usb-en-virtualbox/
categories:
  - Debian
---
He estado usando el VirtualBox de SUN (No la versión OSE) para poder usar el puerto USB en las máquinas virtuales. La configuración es bastante sencilla.  
El primer paso consiste en agregar al usuario deseado al grupo vboxusers. Para ello, y como super usuario, ejecutamos:  
**\# adduser usuario vboxusers**  
Una vez agregado el usuario deseado a el grupo vboxusers, procedemos a buscar el devgid para &#8216;vboxusers&#8217;  
**\# grep vbox /etc/group**  
En mi caso, devuelve lo siguiente:  
obey:/home/muammar# grep vbox /etc/group  
vboxusers:x:119:muammar  
El devgid en este caso, corresponde al número 119.  
Ahora procedemos a editar el archivo fstab. En este paso, tenemos que hacer uso del número del devgid obtenido en el paso anterior. Agregamos la siguiente línea:  
none /proc/bus/usb/ usbfs devgid=**119**,devmode=664 0 0  
***Nota: *** Deben usar el número que les corresponda para sustituirlo en el devgid.  
El último paso consiste en modificar **/etc/init.d/mountkernfs.sh**. Tienes que buscar cerca de la línea 74 de dicho archivo la línea:  
**domount usbfs usbdevfs /proc/bus/usb usbfs -onodev,noexec,nosuid**  
Y modificarla para que quede así:  
**domount usbfs usbdevfs /proc/bus/usb usbfs -onodev,noexec,nosuid,devgid=119,devmode=664**  
Luego de estos cambios, puedes reiniciar el Virtualbox y en teoría el USB debe funcionar. Yo lo he probado y ha funcionado. En caso de que no te funcione, trata reiniciando tu computador.