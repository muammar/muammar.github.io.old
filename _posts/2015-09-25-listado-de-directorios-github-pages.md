---
title: Listado de directorios en github pages
author: Muammar El Khatib
layout: post
categories:
  - Ciencias
  - Linux
  - Debian
tags:
  - jekyll
  - migration
  - wordpress
  - github
---

Recientemente decidí migrar mi sitio web a [github
pages](https://github.com/muammar/muammar.github.io). El proceso es muy
sencillo y perfectamente descrito en
[https://pages.github.com/](https://pages.github.com/). Los dos únicos bemoles
de este servicio son:

1. [No hay soporte
   HTTPS](https://help.github.com/articles/what-are-github-pages/).
2. No es posible listar contenido de un directorio (al menos en la
   investigación que hice no encontré nada).

Hay algunos plugins hechos en liquid  para listar el contenido usando Jekyll,
pero aparentemente github pages no soporta cualquier plugin presente en el
directorio `_plugins`. La manera más sencilla para solucionar parcialmente este
problema es crear un script que genere archivos `index.html` en los directorios
(y subdirectorios) cuyo contenido quiere ser listado. Conseguí uno que funciona
bastante bien:

<script
src="https://gist.github.com/muammar/6444f3c269280ca12d243cd49488d9a7.js"></script>

Puedes [descargarlo
aquí](https://raw.githubusercontent.com/muammar/muammar.github.io/master/files/listing.sh)
(créditos:
[http://blog.kaltepoth.de/posts/2010/09/06/github-maven-repositories.html](http://blog.kaltepoth.de/posts/2010/09/06/github-maven-repositories.html)).
Este script debe ser ejecutado en el `root` del directorio al que quieres
listar su contenido. Esto creará una serie de archivos index.html que lucen así
-> [ver aquí](http://muammar.me/files). Espero sea de utilidad para algunos.


