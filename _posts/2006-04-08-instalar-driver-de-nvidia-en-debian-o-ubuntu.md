---
title: Instalar driver de nvidia en debian o ubuntu
author: muammar
layout: post
permalink: /blog/2006/04/instalar-driver-de-nvidia-en-debian-o-ubuntu/
categories:
  - Linux
---
![][1]  
Primero:(quizás algunos paquetes sean innecesarios pero a mi me funciona con 100 % de efectividad de esa manera).  
$ sudo apt-get install nvidia-glx  
$ sudo apt-get install nvidia-kernel-common  
$ sudo apt-get install nvidia-settings  
Nota: Puedes instalarlo si lo deseas con el synaptic utilizando como parámetro de búsqueda nvidia.  
Luego ejecutas:  
$ sudo dpkg-reconfigure xserver-xorg (coloco el xorg porque es el que viene por defecto, allí colocas el servidor de X que utilices)  
Configuras todo de acuerdo a tu entorno, y escoges nvidia como controlador (no hay necesidad de editar el archivo xorg.conf a mano a mi no me funcionó, no me levantaban las X) (asegurate de elegir glcore cuando configuras el xserver) Al terminar de configurar tu entorno con el dpkg-reconfigure xserver-org, ejecutas el siguiente comando:  
$ sudo nvidia-glx-config enable  
Para debian te logeas como root y haces todo lo anterior sin el sudo.  
Luego, pulsas Ctrl + Alt + Backspace y listo de esta forma esta activada la aceleración de nvidia.  
Nota: Es normal que no te salga la pantalla de bienvenida de nvidia para cuando haces esto la primera vez (es decir cuando matas las X de esta forma), pero cuando reinicies tu máquina te aseguro que sale la pantalla de nvidia.  
Esto fué probado en ubuntu breezy, ubuntu hoary y debian sarge y funcionaba.  
Muammar.

 [1]: http://cache.gizmodo.com/gadgets/images/nvidia_logo.jpg