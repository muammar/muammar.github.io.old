---
title: Apagar Display LCD de una laptop desde el terminal en Linux
author: Muammar El Khatib
layout: post
permalink: /blog/2011/11/apagar-display-lcd-de-una-laptop-desde-el-terminal-en-linux/
categories:
  - Debian
  - Linux
tags:
  - apagar
  - consola
  - encender
  - laptop
  - linux
  - monitor
  - servidores
  - terminal
  - vbetool
---
Este post es más una nota personal, porque por alguna razón siempre olvido este comando. Es útil apagar el display LCD cuando por ejemplo se está utilizando un laptop como servidor y se desea ahorrar energía (obviamente, como servidor que es, no hay instalación de servidor de X, si no, solamente acceso a las TTY).

Con este pequeño preámbulo, introduzco a [vbetool][1]. Y como se desprende de su descripción: **vbetool** utiliza lrmi en orden de correr código desde el video del BIOS. Actualmente, es capaz de alterar estados DPMS, tales como guardar y recuperar estados de la tarjeta de vídeo y atentar iniciar la tarjeta de vídeo &#8220;from scratch&#8221;.

Ahora, si quisiéramos apagar el display LCD ejecutamos como super usuario:

> \# vbetool dpms off

Y obviamente, si se quisiere hacer lo contrario se ejecuta:

> \# vbetool dpms on

En lo personal, desconozco si habrán otros métodos para llevar a cabo esto, pero por los momentos, este me funciona a la perfección. Puede ejecutarse accediendo remotamente al servidor y así poder encender y apagar el LCD.

Espero que sea de ayuda para algunos.

 [1]: http://linux.die.net/man/1/vbetool