---
title: 'Xlib: No protocol specified'
author: muammar
layout: post
permalink: /blog/2013/01/xlib-no-protocol-specified/
categories:
  - Ciencias
  - Debian
  - Linux
tags:
  - linux
---
En una instalación reciente que hice de Debian, al intentar ejecutar cualquier aplicación gráfica utilizando sudo o el usuario root, obtuve siempre el error:

> No protocol specified  
> Can&#8217;t open display :0

Esto se puede resolver de manera temporal utilizando el comando:

> xhost +

Pero si quieres evitar el problema en futuras sesiones, debes agregar lo siguiente a tu .bashrc o .zshrc

> export XAUTHORITY=$HOME/.Xauthority

Por ahora no he investigado exactamente la fuente del problema, y por qué ocurre esto. Si alguien puede comentarlo, sería excelente.

<pre></pre>

<pre></pre>

<pre></pre>

<pre></pre>

<pre></pre>

&nbsp;