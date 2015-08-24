---
title: Cómo hacer funcionar Wake On Lan en Debian Lenny
author: Muammar El Khatib
layout: post
permalink: /blog/2010/04/como-hacer-funcionar-wake-on-lan-en-debian-lenny/
categories:
  - Debian
---
Wake On Lan es un estándar de las redes ethernet de las computadoras que permite encenderlas remotamente enviando un mensaje a través de la red. Para más información pueden [leer aquí][1]. Me he visto en la necesidad de implementarlo, ya que los cortes de luz en Maracaibo no me dejan mantener mi servidor arriba :-/.  
Lo primero que se debe hacer, es percatarse que la tarjeta madre tenga en el BIOS soporte para Wake On Lan. Dependiendo de el fabricante de la tarjeta a veces conseguir dicha función puede ser muy divertido&#8230;  
Una vez que se haya activado la función en el BIOS, el paso siguiente consiste en instalar el paquete ethtool:

> apt-get install ethtool

Una vez instalado, ejecuta ethtool utilizando el nombre de tu dispositivo ethernet actual:

> root@xxxxx:~# ethtool eth0  
> Settings for eth0:  
> Supports Wake-on: g  
> Wake-on: d  
> Link detected: yes 

En este caso se puede observar que el soporte Wake-On ha sido activado y es soportado, pero sin embargo, a nivel de software no ha sido activado aún. Para ello ejecutamos:

> root@lappy:~# ethtool -s eth0 wol g

Ahora, es momento de verificar si la interfaz está lista, y volvemos a ejecutar ethtool en la interfaz que nos corresponda:

> circa:/home/muammar# ethtool eth0  
> Settings for eth0:  
> Supported ports: [ MII ]  
> Supported link modes: 10baseT/Half 10baseT/Full  
> 100baseT/Half 100baseT/Full  
> Supports auto-negotiation: Yes  
> Advertised link modes: 10baseT/Half 10baseT/Full  
> 100baseT/Half 100baseT/Full  
> Advertised auto-negotiation: Yes  
> Speed: 100Mb/s  
> Duplex: Full  
> Port: MII  
> PHYAD: 1  
> Transceiver: external  
> Auto-negotiation: on  
> Supports Wake-on: g  
> Wake-on: g  
> Link detected: yes 

Vemos que ahora, además de tener el soporte disponible, el Wake-on se encuentra activado por software debido a que Wake-on tiene ahora una g en vez de una d. Hasta este punto, teóricamente ya podrías apagar el PC y encenderlo remotamente. Sin embargo, hace falta agregar un par de cosas para poder hacer funcionar WOL, y es lo siguiente:  
a) Agregar la directiva NETDOWN=no en /etc/default/halt  
b) Agregar estas dos líneas a tu /etc/network/interfaces:

> post-up /usr/sbin/ethtool -s eth2 wol g  
> post-down /usr/sbin/ethtool -s eth2 wol g

En mi caso, el archivo interfaces luce así:

> circa:/home/muammar# cat /etc/network/interfaces  
> \# This file describes the network interfaces available on your system  
> \# and how to activate them. For more information, see interfaces(5).  
> \# The loopback network interface  
> auto lo  
> iface lo inet loopback  
> \# The primary network interface  
> allow-hotplug eth0  
> iface eth0 inet dhcp  
> post-up /usr/sbin/ethtool -s eth0 wol g  
> post-down /usr/sbin/ethtool -s eth0 wol g

¿Por qué debo agregar esas dos líneas? porque hay que asegurar que ethtool es ejecutado activando la interfaz para escuchar el paquete mágico que la encenderá. Antes de hacer la prueba de apagar el PC para encenderlo remotamente, asegúrense de saber la dirección MAC de la interfaz. Ejecutando ifconfig debería ser suficiente.  
Ejemplo:

> sistema:~# ifconfig  
> eth0 Link encap:Ethernet HWaddr 00:1e:90:ec:38:59  
> inet adr:10.0.60.3 Bcast:10.0.60.255 Masque:255.255.255.0  
> adr inet6: fe80::21e:90ff:feec:3850/64 Scope:Lien  
> UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1  
> RX packets:403270 errors:0 dropped:0 overruns:0 frame:0  
> TX packets:284934 errors:0 dropped:0 overruns:0 carrier:0  
> collisions:0 lg file transmission:1000  
> RX bytes:467661611 (445.9 MiB) TX bytes:34344462 (32.7 MiB)  
> Interruption:28 Adresse de base:0xe000 

La dirección Mac es: 00:1e:90:ec:38:59  
Bien, puedes apagar el PC ahora.  
**¿Cómo enciendo el PC remotamente?**  
Instala en otra computadora el paquete wakeonlan:

> apt-get install wakeonlan

Una vez instalado ejecuta:  
$IP = Ip de la PC que vas a encender remotamente.  
$HWaddr = Dirección Mac de la tarjeta.

> wakeonlan -i $IP $HWaddr

***Nota:*** Leí que era suficiente ejecutar: **wakeonlan $HWaddr** pero a mi personalmente no me funcionó. Utilizando la dirección IP de la máquina, funcionó rápidamente.

 [1]: http://en.wikipedia.org/wiki/Wake-on-LAN