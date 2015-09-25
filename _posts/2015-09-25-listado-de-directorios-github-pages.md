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

~~~
#!/bin/bash

for DIR in $(find ./ -type d); do
  (
    echo  "<html>\n<body>\n<h1>Directory listing</h1>\n<hr/>\n<pre>"
    ls -1pa "${DIR}" | grep -v "^\./$" | grep -v "^index\.html$" | awk '{ printf "<a href=\"%s\">%s</a>\n",$1,$1 }'
    echo  "</pre>\n</body>\n</html>"
  ) > "${DIR}/index.html"
done
~~~

Puedes [descargarlo
aquí](https://raw.githubusercontent.com/muammar/muammar.github.io/master/files/listing.sh)
(créditos:
[http://blog.kaltepoth.de/posts/2010/09/06/github-maven-repositories.html](http://blog.kaltepoth.de/posts/2010/09/06/github-maven-repositories.html)).
Este script debe ser ejecutado en el `root` del directorio al que quieres
listar su contenido. Esto creará una serie de archivos index.html que lucen así
-> [ver aquí](http://muammar.me/files). Espero sea de utilidad para algunos.


