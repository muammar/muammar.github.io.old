---
title: ¿Cómo graficar puntos aislados en Gnuplot?
author: Muammar El Khatib
layout: post
permalink: /blog/2013/12/como-graficar-puntos-aislados-en-gnuplot/
categories:
  - Ciencias
tags:
  - ciencia
  - comando
  - gnuplot
  - graficar
  - puntos
---
Esto es una traducción de un <a href="http://www.gnuplotting.org/plotting-single-points/" target="_blank">post en inglés</a>. Me pareció interesante proporcionar esta información traducida al español. Espero que sea de ayuda.

Si queremos graficar un solo punto, podemos hacerlo creando un archivo de data, que contenga sólo una línea:

> <pre># x   y
1   2</pre>

Pero existe un método más sencillo sin necesidad de crear este archivo de data adicional. En la Fig. 1 tres puntos con diferentes símbolos son graficados.

<div id="attachment_968" style="width: 360px" class="wp-caption aligncenter">
  <a href="http://muammar.me/blog/wp-content/uploads/2013/12/single_point.png"><img class="size-full wp-image-968" src="http://muammar.me/blog/wp-content/uploads/2013/12/single_point.png" alt="Fig. 1 Graficar tres puntos" width="350" height="262" /></a>
  
  <p class="wp-caption-text">
    Fig. 1 Graficar tres puntos
  </p>
</div>

Para lograr este gráfico, solo se necesita usar el siguiente comando:

> <pre>plot '-' w p ls 1, '-' w p ls 2, '-' w p ls 3
1 2
e
2 1
e
3 1.5
e</pre>

Empleamos la posibilidad de pedirle a Gnuplot, con el uso de &#8216;-&#8216;, que la entrada sea leída desde el standard input. En este caso, se le pide a Gnuplot hacerlo tres veces. Luego de ejecutar el comando para graficar, los datos son tomados. Cada dato de cada punto a graficar debe terminar con la línea *e* .  
En orden de obtener tres diferentes símbolos para los puntos se configuran antes de ser graficados:

> <pre>set style line 1 lc rgb 'black' pt 5   # square
set style line 2 lc rgb 'black' pt 7   # circle
set style line 3 lc rgb 'black' pt 9   # triangle</pre>

Nota: si deseamos usar el comando *replot *el comando mostrado anteriormente para graficar no va a funcionar. Pero lo mismo se puede lograr utilizando el siguiente comando:

> <pre>plot "&lt;echo '1 2'"   with points ls 1, \
     "&lt;echo '2 1'"   with points ls 2, \
     "&lt;echo '3 1.5'" with points ls 3</pre>