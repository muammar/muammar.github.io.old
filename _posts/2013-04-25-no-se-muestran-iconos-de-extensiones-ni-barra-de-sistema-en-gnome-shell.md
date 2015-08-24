---
title: No se muestran iconos de extensiones ni barra de sistema en gnome shell
author: muammar
layout: post
permalink: /blog/2013/04/no-se-muestran-iconos-de-extensiones-ni-barra-de-sistema-en-gnome-shell/
categories:
  - Ciencias
  - Linux
---
Hace unos días decidí actualizar algunos paquetes de gnome que están en Debian experimental (entre ellos gnome-terminal, que ahora no soporta transparencias, vaya mierda, pero eso es otro cuento). Luego de ver todo el desastre que viene en gnome 3.8, me arrepentí y decidí hacer un downgrade. Todo funcionó muy bien, pero ¿Dónde quedaron los íconos de las extensiones, aplicaciones de gnome y de la barra de sistema?. Por ejemplo, el gnome-sound-applet se agregaba correctamente y hacía sus funciones, pero no mostraba ningún ícono. Si abría el gnome-control-center habían una serie de íconos perdidos también.

Luego de buscar un rato en google, encontré una<a href="https://bbs.archlinux.org/viewtopic.php?pid=1054054" target="_blank"> respuesta en un foro de archlinux</a>, donde entre las muchas cosas que proponían, la primera que utilicé funcionó:

> $ sudo /usr/bin/gdk-pixbuf-query-loaders &#8211;update-cache

Bien, todos los íconos fueron refrescados y ahora las cosas a la normalidad.

&nbsp;