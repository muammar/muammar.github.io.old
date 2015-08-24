---
title: Eliminar caracteres ocultos de archivos de texto plano con vim
author: Muammar El Khatib
layout: post
permalink: /blog/2015/01/eliminar-caracteres-ocultos-de-archivos-de-texto-plano-con-vim/
categories:
  - Ciencias
  - Linux
---
No todos usan el mismo editor de texto. No todos usan el mismo sistema operativo. No es un secreto para nadie. Cuando se trabaja en grupos bastante heterogéneos puede ocurrir que el editor de texto introduce estos caracteres ocultos que si se encuentran dentro de un script bash por ejemplo, generan esos famosos:* command not found*. Uno de los caracteres ocultos más comunes que he encontrado es ^M, pero imagino que se puede encontrar cualquier otro tipo de aberración. Estos son artefactos agregados por editores generalmente gráficos. Sin más preámbulo, la solución más rápida que he encontrado hasta el momento es cambiar el format file (ff) y guardar el archivo:

&nbsp;

> `:set ff=unix`
> 
> `:w`

De esta manera los !@#$%* caracteres ocultos son eliminados.

&nbsp;