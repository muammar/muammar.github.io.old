---
title: Instalar Driver de ATI para breezy.
author: Muammar El Khatib
layout: post
permalink: /blog/2006/04/instalar-driver-de-ati-para-breezy/
categories:
  - Linux
---
$ sudo apt-get install xorg-driver-fglrx xorg-driver-fglrx-dev fglrx-control  
Luego que lo instales, haz:  
$sudo dpkg-reconfigure xserver-xorg  
En vez de seleccionar ati, selecciona fglrx, colocas 128000 (cantidad de memoria de tu tarjeta). Configuras lo demás de acuerdo a tu entorno, te aseguras de seleccionar glx en los modulos del servidor de las X. Al terminar la configuración, Ctrl + Alt + Backspace o reinicia tu computadora, eres libre de decidir.  
Luego abre un terminal y ejecuta:  
muammar@breezy:~$ glxinfo |grep direct  
direct rendering: Yes  
muammar@breezy:~$  
Y listo, de esta manera me ha funcionado. No tuve que bajarme el driver propietario.  
Yo tengo una portatil con una mobility radeon 9000.  
Aqui esta la prueba Eye-wink  
muammar@breezy:~$ lspci  
0000:00:00.0 Host bridge: Intel Corp. 82855PM Processor to I/O Controller (rev 0 3)  
0000:00:01.0 PCI bridge: Intel Corp. 82855PM Processor to AGP Controller (rev 03 )  
0000:00:1d.0 USB Controller: Intel Corp. 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) US B UHCI Controller #1 (rev 01)  
0000:00:1d.1 USB Controller: Intel Corp. 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) US B UHCI Controller #2 (rev 01)  
0000:00:1d.2 USB Controller: Intel Corp. 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) US B UHCI Controller #3 (rev 01)  
0000:00:1d.7 USB Controller: Intel Corp. 82801DB/DBM (ICH4/ICH4-M) USB 2.0 EHCI Controller (rev 01)  
0000:00:1e.0 PCI bridge: Intel Corp. 82801 PCI Bridge (rev 81)  
0000:00:1f.0 ISA bridge: Intel Corp. 82801DBM LPC Interface Controller (rev 01)  
0000:00:1f.1 IDE interface: Intel Corp. 82801DBM (ICH4) Ultra ATA Storage Contro ller (rev 01)  
0000:00:1f.5 Multimedia audio controller: Intel Corp. 82801DB/DBL/DBM (ICH4/ICH4 -L/ICH4-M) AC&#8217;97 Audio Controller (rev 01)  
0000:00:1f.6 Modem: Intel Corp. 82801DB/DBL/DBM (ICH4/ICH4-L/ICH4-M) AC&#8217;97 Modem Controller (rev 01)  
0000:01:00.0 VGA compatible controller: ATI Technologies Inc Radeon R250 Lf \[Rad eon Mobility 9000 M9\] (rev 02)  
0000:02:00.0 Ethernet controller: Broadcom Corporation NetXtreme BCM5705M Gigabi t Ethernet (rev 01)  
0000:02:01.0 CardBus bridge: O2 Micro, Inc. OZ711EC1 SmartCardBus Controller (re v 20)  
0000:02:01.1 CardBus bridge: O2 Micro, Inc. OZ711EC1 SmartCardBus Controller (re v 20)  
muammar@breezy:~$  
Espero que te sirva de ayuda.  
Muammar El Khatib.  
Linux user: 403107.