---
title: Aceleración para ATI en debian.
author: muammar
layout: post
permalink: /blog/2006/04/aceleracion-para-ati-en-debian/
categories:
  - Debian
---
<img width='104' height='110' style="float: left; border: 0px; padding-left: 5px; padding-right: 5px;" src="/uploads/pics/debian_splash.serendipityThumb.png" alt="" />  
En este artículo pretendo explicar una forma sencilla de instalar el driver de ati en debian. Esta prueba fué realizada bajo debian etch en una ATI Radeon 9000.  
El primer paso es instalar los headers del kernel que utilices, pues lo que se pretende es compilar el driver.  
\# apt-get install linux-headers-$(uname -r)  
Vamos a hacer uso de una herramienta llamada module-assistant, en caso de que no la tengas instalada haz:  
\# apt-get install module-assistant  
A continuación para terminar de compilar nuestro driver necesitamos los siguientes 2 paquetes:  
a) El fglrx, para instalarlo:  
\# apt-get install fglrx-driver  
*Nota:* En caso de no tener el repositorio adecuado puedes <a href="http://www.debian.org/distrib/packages" target=blank" title="debian packages">bajarte el paquete haciendo click aquí.</a>  
b) Y el fglrx-kernel-src\_8.23.7-1\_i386.deb para este paquete se necesitan repositorios non-free contrib (al final del artículo les dejaré mis repositorios. En caso de querer anexarlos para no tener problemas antes de continuar, es hora de agregarlos ;))  
Ya al tener los repositorios en orden y haber instalado el paquete del driver lo que resta es hacer lo siguiente:  
\# m-a a-i fglrx  
La hora de la verdad 8). Si todo ha marchado bien, podemos entonces configurar las X.  
\# vi /etc/X11/xorg.conf  
Y la configuración, por lo menos en mi caso, quedó así:  
Recargo la importancia de que en la sección Module la opción glx se encuentre entre comillas.  
Section &#8220;Module&#8221;  
Load &#8220;bitmap&#8221;  
Load &#8220;dbe&#8221;  
Load &#8220;ddc&#8221;  
Load &#8220;dri&#8221;  
Load &#8220;evdev&#8221;  
Load &#8220;extmod&#8221;  
Load &#8220;freetype&#8221;  
**Load &#8220;glx&#8221;**  
Load &#8220;int10&#8221;  
Load &#8220;record&#8221;  
Load &#8220;type1&#8221;  
Load &#8220;v4l&#8221;  
Load &#8220;vbe&#8221;  
Para la sección Device y screen , debes de asegurarte que el identificador de device se corresponda con el device de la sección screen, es decir, que tengan el mismo nombre.  
Section &#8220;Device&#8221;  
**Identifier &#8220;ATI Technologies, Inc. Radeon R250 Lf [FireGL 9000]&#8221;**  
Driver &#8220;fglrx&#8221;  
BusID &#8220;PCI:1:0:0&#8221;  
VideoRam 64000  
Option &#8220;UseFBDev&#8221; &#8220;true&#8221;  
Section &#8220;Screen&#8221;  
Identifier &#8220;Default Screen&#8221;  
**Device &#8220;ATI Technologies, Inc. Radeon R250 Lf [FireGL 9000]&#8221;**  
Monitor &#8220;Generic Monitor&#8221;  
Como último paso para garantizar que el módulo que acabamos de crear cargue, editamos el archivo /etc/modules agregando las siguientes líneas:  
agpgart  
fglrx  
Por último, para reiniciar las X&#8217;s, puedes hacer Ctrl +Alt + Backspace ó:  
#/etc/init.d/gdm restart (para gnome)  
#/etc/init.d/kdm restart (para kde)  
Comprobación:  
laptop:/home/aenima# glxinfo |grep direct  
**direct rendering: Yes**  
laptop:/home/aenima#  
laptop:/home/aenima# lspci  
0000:00:00.0 Host bridge: Intel Corporation 82855PM Processor to I/O Controller (rev 03)  
0000:00:01.0 PCI bridge: Intel Corporation 82855PM Processor to AGP Controller (rev 03)  
0000:00:1d.0 USB Controller: Intel Corporation 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) USB UHCI Controller #1 (rev 01)  
0000:00:1d.1 USB Controller: Intel Corporation 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) USB UHCI Controller #2 (rev 01)  
0000:00:1d.2 USB Controller: Intel Corporation 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) USB UHCI Controller #3 (rev 01)  
0000:00:1d.7 USB Controller: Intel Corporation 82801DB/DBM (ICH4/ICH4-M) USB2 EHCI Controller (rev 01)  
0000:00:1e.0 PCI bridge: Intel Corporation 82801 Mobile PCI Bridge (rev 81)  
0000:00:1f.0 ISA bridge: Intel Corporation 82801DBM (ICH4-M) LPC Interface Bridge (rev 01)  
0000:00:1f.1 IDE interface: Intel Corporation 82801DBM (ICH4-M) IDE Controller (rev 01)  
0000:00:1f.5 Multimedia audio controller: Intel Corporation 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) AC&#8217;97 Audio Controller (rev 01)  
0000:00:1f.6 Modem: Intel Corporation 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) AC&#8217;97 Modem Controller (rev 01)  
**0000:01:00.0 VGA compatible controller: ATI Technologies Inc Radeon R250 Lf \[FireGL 9000\] (rev 02)**  
0000:02:00.0 Ethernet controller: Broadcom Corporation NetXtreme BCM5705M Gigabit Ethernet (rev 01)  
0000:02:01.0 CardBus bridge: O2 Micro, Inc. OZ711EC1 SmartCardBus Controller (rev 20)  
0000:02:01.1 CardBus bridge: O2 Micro, Inc. OZ711EC1 SmartCardBus Controller (rev 20)  
laptop:/home/aenima#  
\___\___\___\___\___\_\\_\_REPOSITORIOS\_\_\___\___\___\___\___\___\___\___  
deb http://security.debian.org/ etch/updates main contrib  
deb-src http://security.debian.org/ etch/updates main contrib  
deb ftp://ftp.nerim.net/debian-marillat/ etch main  
deb http://jeroen.coekaerts.be/debian/ unstable mirror  
deb http://vdeffontaines.free.fr/debian/dists/ unstable/  
deb http://debian.jones.dk sid misc  
deb http://www.stanchina.net/~flavio/debian/ ./  
deb-src http://www.stanchina.net/~flavio/debian/ ./  
**deb http://ftp.debian.de/debian/ sid main non-free contrib **  
\___\___\___\___\___\___\___\___\___\___\___\___\___\___\___\___\___\___\___  
***Escrito por Muammar El Khatib.***