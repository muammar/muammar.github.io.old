---
title: 'Regresiones en Gnome-terminal: The working directory. (1)'
author: Muammar El Khatib
layout: post
permalink: /blog/2013/06/regresiones-en-gnome-terminal-the-working-directory-1/
categories:
  - Ciencias
  - Debian
  - Linux
---
Cuando finalmente gnome-terminal se actualizó en Debian, mi primera expresión fue: imaginaquítodaslasmalaspalabrasnecastellano&#8230; A continuación  la solución al problema encontrado con el working directory.

  1. Instala el paquete libvte-2.90-common.
  2. Agrega la siguiente línea en tu .zshrc o .bashrc:

> . /etc/profile.d/vte.sh

Una vez que la terminal es reiniciada, tenemos el comportamiento esperado. Cada vez que se abre una nueva pestaña o ventana, el prompt se localizará en el working directory actual (por defecto ~ cuando se inicia la terminal por primera vez). A medida que vaya teniendo tiempo y encontrando más regresiones molestas iré publicando las soluciones.