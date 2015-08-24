---
title: Configurando video en ubuntu breezy. 855resolution (Intel 915)
author: muammar
layout: post
permalink: /blog/2006/04/configurando-video-en-ubuntu-breezy-855resolution-intel-915/
categories:
  - Linux
---
<img width='108' height='110' style="float: left; border: 0px; padding-left: 5px; padding-right: 5px;" src="/uploads/pics/ubuntu_small.serendipityThumb.png" alt="" /> Para lograr resoluciones problematicas como 1280&#215;800 en video integrado intel i915 necesitas un paquete que se llama 855resolution.  
Para instalarlo asegurate de que tienes todos los repositios activos en tu lista en /etc/apt/sources.list  
Luego instalas el 855resolution:  
$ sudo apt-get install 855resolution  
Para poder ver cuáles son las resoluciones con las que cuentas debes ejecutar el siguiente comando:  
$ sudo 855resolution -l  
En caso de que no salga la resolución que deseas, entonces la agregas al archivo /etc/default/855resolution, con el editor de texto que prefieras, las siguientes líneas:  
**MODE=5a  
XRESO=1280  
YRESO=800**  
Para la aceleración 3D debes tener instalado el paquete xserver-xorg-driver-i810:  
$sudo apt-get install xserver-xorg-driver-i810  
Por último debes modificar el archivo /etc/X11/xorg.conf  
Tienes que fijarte que la sección Module glx este entre comillas  
Section &#8220;Module&#8221;  
Load &#8220;GLcore&#8221;  
Load &#8220;bitmap&#8221;  
Load &#8220;ddc&#8221;  
Load &#8220;dri&#8221;  
Load &#8220;extmod&#8221;  
Load &#8220;freetype&#8221;  
**Load &#8220;glx&#8221;**  
Load &#8220;int10&#8221;  
Load &#8220;type1&#8221;  
Load &#8220;vbe&#8221;  
Y en la sección device este el driver i810:  
Section &#8220;Device&#8221;  
Identifier &#8220;Intel Corporation i915 Integrated Graphics Controller&#8221;  
**Driver &#8220;i810&#8221;**  
BusID &#8220;PCI:0:2:0&#8221;  
VideoRam 128000  
Option &#8220;UseFBDev&#8221; &#8220;true&#8221;  
EndSection  
Muammar El Khatib.  
Linux user: 403107  
<img width='110' height='64' style="float: left; border: 0px; padding-left: 5px; padding-right: 5px;" src="/uploads/pics/403107.serendipityThumb.png" alt="" />