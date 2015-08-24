---
title: Closed clamshell macbook pro Debian
author: muammar
layout: post
permalink: /blog/2012/12/closed-clamshell-macbook-pro-debian/
categories:
  - Ciencias
  - Debian
  - Linux
tags:
  - clamshell
  - debian
  - linux
  - macbook pro
  - xrandr
---
[Closed clamshell][1] es la capacidad que tienen la macbook pro de funcionar con un monitor externo mientras que el lid está cerrado (tal vez todas las laptops la tienen, pero en verdad no lo se y si alguien pudiera confirmarlo por favor escriban en los comentarios). Hacer closed clamshell en la macbook pro usando Mac OS X es muy fácil, solo cierras el lid y ya está. En Debian, hice la misma prueba y podría decir que también &#8220;funcionó &#8220;(aunque gnome-session no le gustó mucho la cosa, y la máquina a los minutos se congeló). No sabría si el congelamiento fue debido al hecho de que utilizo awesome WM con gnome-session así que no tengo por seguro que lo mismo pasa utilizando solo Gnome o KDE. Así pues, no se puede hacer mucha confianza de que todo marchará bien, ya que el soporte para estas máquinas en Linux hasta es precario porque son un PITA. La mejor opción que vi, fue apagar el monitor de la macbook pro y dejar funcionando la salida del monitor externo. Es bastante sencillo, solo hace falta hacer:

> xrandr &#8211;output LVDS1 &#8211;off &#8211;output VGA1 &#8211;auto

Y luego configurar la resolución de la pantalla externa con:

> xrandr -s $resolucióndetumonitorexterno

Las resoluciones puedes obtenerlas ejecutando xrandr sin argumentos, y la salida luce así:

> @iHackyou ⮀ ~/bin ⮀ xrandr
> 
> Screen 0: minimum 320 x 200, current 1440 x 900, maximum 8192 x 8192  
> LVDS1 connected (normal left inverted right x axis y axis)  
> 1280&#215;800 60.2 +  
> 1024&#215;768 60.0  
> 800&#215;600 60.3 56.2  
> 640&#215;480 59.9  
> VGA1 disconnected (normal left inverted right x axis y axis)  
> HDMI1 disconnected (normal left inverted right x axis y axis)  
> DP1 connected 1440&#215;900+0+0 (normal left inverted right x axis y axis) 410mm x 256mm  
> **1440&#215;900 59.9*+**  
> 1280&#215;1024 75.0 60.0  
> 1280&#215;960 60.0  
> 1152&#215;864 75.0  
> 1152&#215;720 60.0  
> 1024&#215;768 75.1 60.0  
> 832&#215;624 74.6  
> 800&#215;600 75.0 60.3  
> 640&#215;480 75.0 60.0  
> 720&#215;400 70.1  
> HDMI2 disconnected (normal left inverted right x axis y axis)  
> HDMI3 disconnected (normal left inverted right x axis y axis)  
> DP2 disconnected (normal left inverted right x axis y axis)  
> DP3 disconnected (normal left inverted right x axis y axis)

En mi caso, la resolución completa de mi monitor externo es 1440&#215;900 59.9*+, así que configuré la resolución con:

> xrandr -s 1440&#215;900

Como esto sería muy fastidioso de hacer cada vez, cree un pequeño script en bash que lo hace por mi:

> #!/usr/bin/env bash  
> xrandr &#8211;output LVDS1 &#8211;off &#8211;output VGA1 &#8211;auto  
> sleep 1  
> xrandr -s 1440&#215;900  
> sleep 1  
> exit 0

Hay que dejar dormir por al menos 1 segundo cada xrandr porque si no gnome-session no maneja bien la situación. Espero que este post sea de ayuda para algunos. Aquí una foto del quasi closed clamshell:

<div id="attachment_854" style="width: 640px" class="wp-caption aligncenter">
  <a href="http://muammar.me/blog/2012/12/closed-clamshell-macbook-pro-debian/tmp/" rel="attachment wp-att-854"><img class="size-large wp-image-854" title="Quasi closed clamshell" src="http://muammar.me/blog/wp-content/uploads/2012/12/tmp-1024x764.jpg" alt="" width="630" height="470" /></a>
  
  <p class="wp-caption-text">
    Quasi closed clamshell
  </p>
</div>

 [1]: http://support.apple.com/kb/HT3131