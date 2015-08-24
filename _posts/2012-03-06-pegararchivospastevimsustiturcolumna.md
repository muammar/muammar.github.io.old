---
title: Pegar contenido de dos archivos con paste. Utilizar VIM para sustituir selección de una columna
author: muammar
layout: post
permalink: /blog/2012/03/pegararchivospastevimsustiturcolumna/
categories:
  - Ciencias
  - Debian
  - Linux
tags:
  - graficar
  - linux
  - paste
  - quimica
  - vim
---
Este es otro de esos posts. Sí, esos posts cortos de pequeñas utilidades que he encontrado, que son sencillas de implementar y que muchos deben conocer como muchos otros no deben conocer.  Igual, espero que sean de utilidad. Ahora que estoy incursionando en la [dinámica cuántica][1], la cual es una rama muy singular de la mecánica cuántica ya que no solo toma en cuenta la estructura electrónica de moléculas, si no también cómo estas evolucionan con el tiempo&#8230; bueno, esto no es una clases de mecánica cuántica :). Es necesario generar [superficies de energía potencial][2], lo que implica (Ahora si viene la parte computacional del asunto) hacer unos cuántos cálculos y generar valores para entonces hacer tablas. Bueno, digamos que utilizando grep (awk también y compañía) se pueden sacar los valores necesarios de distancias internucleares (vamos a llamarlos valores de la variable *a*) y por otro lado, usando de nuevo grep puedo obtener valores de energía (variable *b). *Entonces, tengo dos archivos con el mismo número de líneas, ¿cómo los pego en un mismo archivo como dos columnas para luego graficar?. Es ahí donde **paste **viene al rescate. Si suponemos que los archivos se llaman a.txt y b.txt y que *a.txt *contiene:

2.56168000  
2.75065260  
2.93962520  
3.12859780  
3.31757040  
3.50654299  
3.69551559  
3.88448819  
4.07346079

y b.txt:

-75.52133959  
-75.46050950  
-75.40088665  
-75.34642198  
-75.29927353  
-75.25976834  
-75.22698494  
-75.19963813  
-75.17657482

Solo basta con ejecutar:

> $ paste a.txt b.txt > data.tab

El contenido de data.tab luce así:

<img class="alignnone size-full wp-image-807" title="paste" src="http://muammar.me/blog/wp-content/uploads/2012/03/paste.png" alt="" width="303" height="333" />

Bien, ahora puedo utilizar Gnuplot o lo que quiera para graficar. Por los momentos no he nombrado a VIM, pero ya vamos a eso.

Ahora, lo anteriormente expresado funciona bastante bien. Pero: ¿Qué tal si quiero ingresar una columna entre los valores de *a *y *b *porque quiero hacer una superficie en 3D de una colisión? En castellano, solo agregar una columna de valores fijos en la mitad de *a *y b. Esto se hace de la siguiente manera. Ejecutamos **Ctrl+v** en VIM para entrar en modo VISUAL BLOCK. Luego, seleccionamos el espacio donde queremos hacer la sustición utilizando las flechas en el teclado:

<a href="http://muammar.me/blog/2012/03/pegararchivospastevimsustiturcolumna/visualblock/" rel="attachment wp-att-811"><img class="alignnone size-full wp-image-811" title="visualblock" src="http://muammar.me/blog/wp-content/uploads/2012/03/visualblock.png" alt="" width="313" height="177" /></a>

Una vez contento con la selección, se pulsa **Shift + i **para entrar en modo de inserción. A continuación, escribe la cantidad que quieras sustituir en toda esa columna seleccionada, en mi caso, quiero 1.000000. Como quería que el valor 1.00000 estuviera separado de la primera columna, en el modo de inserción solo luego de pulsar **Shift + i **agregué 6 espacios en blanco, luego escribí el valor (esto lo escribo para recalcar que en esa línea puedes editar lo que quieras) y por último pulsé la tecla **ESC**.

El resultado es el siguiente:

<a href="http://muammar.me/blog/2012/03/pegararchivospastevimsustiturcolumna/final_yeah/" rel="attachment wp-att-812"><img class="alignnone size-full wp-image-812" title="final_yeah" src="http://muammar.me/blog/wp-content/uploads/2012/03/final_yeah.png" alt="" width="428" height="176" /></a>

En este ejemplo es trivial. Pero para que los lectores tengan una idea, una superficie de potenciales para ser aceptable necesita **al menos** más de 1500 valores, hacer esto a mano (uno por uno) sería simplemente estúpido. Espero que les sea de ayuda.

 [1]: http://en.wikipedia.org/wiki/Quantum_dynamics
 [2]: http://www.chem.wayne.edu/~hbs/chm6440/PES.gif