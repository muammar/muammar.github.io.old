---
title: Envolver texto a 80 caracteres en VIM (wrap)
author: Muammar El Khatib
layout: post
permalink: /blog/2011/12/envolver-texto-a-80-caracteres-en-vim-wrap/
categories:
  - Ciencias
  - Debian
  - Linux
---
Este post es también una nota personal (a veces solo lo olvido), parecida al post que hice previamente de [apagar el LCD de una laptop desde la consola][1].  En esta oportunidad, esta información es útil cuando tienes un archivo de texto, o tal vez algunos de esos correos en format=flowed (que aparecen en tu cliente como una línea que no tiene final) y quieres crear un párrafo que esté envuelto a 80 caracteres.

Como una imagen vale más que mil palabras, me refiero a este &#8220;chorizo&#8221; que muestro a continuación:

<p style="text-align: center;">
  <a href="http://muammar.me/blog/2011/12/envolver-texto-a-80-caracteres-en-vim-wrap/antes/" rel="attachment wp-att-780"><img class=" wp-image-780 aligncenter" title="Chorizo" src="http://muammar.me/blog/wp-content/uploads/2011/12/antes-300x68.png" alt="chorizo" width="340" height="108" /></a>
</p>

<p style="text-align: left;">
  Lo que tenemos que hacer para envolver ese texto es lo siguiente. Primero, configuramos el wrapping:
</p>

> <p style="text-align: left;">
>   :set textwidth=80
> </p>

<p style="text-align: left;">
  Pulsamos la combinación <strong>Shift + V </strong>(modo Visual Line en VIM para seleccionar texto), y procedemos a &#8220;sombrear&#8221; las líneas de interés (en mi caso, como pueden ver solo es una, pero vaya línea, ¿no?), y debería lucir como muestro en la próxima figura:
</p>

<p style="text-align: left;">
  <a href="http://muammar.me/blog/2011/12/envolver-texto-a-80-caracteres-en-vim-wrap/shiftv/" rel="attachment wp-att-781"><img class="alignnone size-large wp-image-781" title="shiftv" src="http://muammar.me/blog/wp-content/uploads/2011/12/shiftv-1024x79.png" alt="" width="584" height="45" /></a>
</p>

<p style="text-align: left;">
  Y por último pulsamos la siguiente combinación de teclas: <strong>gq</strong>. Esto, trae como consecuencia, que el &#8220;chorizo que se mostraba previamente&#8221; luzca descentemente:
</p>

<p style="text-align: left;">
  <a href="http://muammar.me/blog/2011/12/envolver-texto-a-80-caracteres-en-vim-wrap/descente/" rel="attachment wp-att-782"><img class="alignnone size-full wp-image-782" title="descente" src="http://muammar.me/blog/wp-content/uploads/2011/12/descente.png" alt="" width="605" height="142" /></a>
</p>

<p style="text-align: left;">
  Et voilà!
</p>

<p style="text-align: left;">
  PD. ¡Muerte a los que no siguen la <a href="http://es.wikipedia.org/wiki/Netiquette">netiquette</a>!
</p>

<p style="text-align: left;">

 [1]: http://muammar.me/blog/2011/11/apagar-display-lcd-de-una-laptop-desde-el-terminal-en-linux/