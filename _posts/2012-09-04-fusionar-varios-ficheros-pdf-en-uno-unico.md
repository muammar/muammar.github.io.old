---
title: Fusionar varios ficheros PDF en uno único
author: Muammar El Khatib
layout: post
permalink: /blog/2012/09/fusionar-varios-ficheros-pdf-en-uno-unico/
categories:
  - Ciencias
  - Debian
  - Linux
tags:
  - fusionar
  - ghostscript
  - linux
  - pdf
---
Otro post de cosas que puede ser que no recuerde. Ayer, tuve la necesidad de hacer un scan de varios documentos en PDF para aplicar a un puesto que me interesa. Para enviar la solicitud era necesario fusionar esos documentos en un único archivo PDF. La solución más rápida que encontré fue con  Ghostscript (para más información: **man gs**).

En distribuciones basadas en Debian, para instalar ghostscript solo basta con ejecutar:

> \# apt-get install ghostscript
> 
> &nbsp;

Una vez que está instalado, ubicas todos los archivos PDF deseados en el mismo directorio (no es necesario, pero es más fácil que luego tener que estar dando los paths para cada archivo) y ejecutas:

> $ gs -dNOPAUSE -sDEVICE=pdfwrite -sOUTPUTFILE=archivosalida.pdf -dBATCH 1.pdf 2.pdf 3.pdf

Esto generará un archivo llamado archivosalida.pdf que contiene los PDF: 1.pdf 2.pdf y 3.pdf (obviamente estos últimos son los PDF que quieres fusionar en uno solo y debes especificarlos). Espero que sea de ayuda a otros. Si alguien conoce formas más sencillas, no duden en comentar.

**Nota**: el símbolo *# *significa que necesitas ser super usuario para poder instalar la aplicación. Por el contrario, el símbolo *$ *significa que un usuario común puede ejecutar la aplicación.

&nbsp;