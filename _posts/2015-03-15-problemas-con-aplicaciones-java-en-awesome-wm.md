---
title: Problemas con aplicaciones java en Awesome WM
author: muammar
layout: post
permalink: /blog/2015/03/problemas-con-aplicaciones-java-en-awesome-wm/
categories:
  - Ciencias
  - Debian
  - Linux
tags:
  - awesome
  - java
  - jmol
  - suckless-tools
---
Ya he hablado en otros posts sobre mi [odio a Gnome][1], y de que ahora en Linux utilizo exclusivamente [Awesome WM][2] como mi Windows Manager preferido desde hace varios años. Por cuestiones de mi trabajo, empleo mucho una aplicación para dibujar orbitales moleculares y moléculas en general que se llama: [jmol][3]. Jmol está muy bien, y  me parece excelente el hecho de que posee una consola lo que me hace recordar un buen sistema Linux. Sin embargo, está escrita en java&#8230;

Últimamente, he tenido problemas para utilizar esta aplicación ya que cada vez que la iniciaba las ventanas no mostraban contenidos.

[<img class="aligncenter size-large wp-image-1019" src="http://muammar.me/blog/wp-content/uploads/2015/03/oops-1024x640.png" alt="oops" width="630" height="394" />][4]  
Al probar en otros DE, como XFCE4, me di cuenta de que la aplicación se mostraba sin problemas. Luego de hacer una pequeña investigación llegué a este link: [http://awesome.naquadah.org/wiki/Problems\_with\_Java][5]. Básicamente java reconoce una lista de DE entre los cuales Awesome WM no está. Para poder engañar a java, hace falta instalar *suckless-tools (me gustó mucho el nombre):*

&nbsp;

> ✘ muammar@ihacku ⮀ ~ ⮀ aptitude show suckless-tools  
> Package: suckless-tools  
> New: yes  
> State: installed  
> Automatically installed: no  
> Version: 40-1  
> Priority: optional  
> Section: x11  
> Maintainer: Vasudev Kamath <kamathvasudev@gmail.com>  
> Architecture: amd64  
> Uncompressed Size: 228 k  
> Depends: libc6 (>= 2.14), libfontconfig1 (>= 2.11), libfreetype6 (>= 2.2.1), libx11-6, libxext6, libxft2 (> 2.1.1), libxinerama1,  
> libxrender1, libxss1, zlib1g (>= 1:1.1.4)  
> Suggests: dwm, stterm, surf  
> Conflicts: suckless-tools  
> Provides: dmenu, lsw, lsx, slock, sprop, sselp, ssid, swarp, tabbed, wmname, xssstate  
> Description: simple commands for minimalistic window managers  
> This package provides simple commands designed to be used with a minimalistic window manager like dwm but they can be useful in scripts  
> regardless of the window manager used.

Una vez instalado, podemos hacerle creer a java que estamos corriendo otro WM ejecutando lo siguiente:

> ✘ muammar@ihacku ⮀ ~ ⮀ wmname LG3D

Y voilà, la aplicación ahora funciona correctamente:

[<img class="aligncenter size-large wp-image-1021" src="http://muammar.me/blog/wp-content/uploads/2015/03/works-1024x640.png" alt="works" width="630" height="394" />][6]

&nbsp;

Supongo que debe funcionar en otras muchas situaciones. Espero que esto sea de ayuda cuando tengan problemas con aplicaciones java que no se muestran correctamente debido al WM. Este es otro de esos posts de cosas que no quiero olvidar.

PD. Fuck off java..

&nbsp;

&nbsp;

 [1]: http://muammar.me/blog/2013/10/gnome-gnome-gnome/ "Gnome, gnome, gnome…"
 [2]: http://awesome.naquadah.org
 [3]: http://jmol.sourceforge.net/
 [4]: http://muammar.me/blog/wp-content/uploads/2015/03/oops.png
 [5]: http://awesome.naquadah.org/wiki/Problems_with_Java
 [6]: http://muammar.me/blog/wp-content/uploads/2015/03/works.png