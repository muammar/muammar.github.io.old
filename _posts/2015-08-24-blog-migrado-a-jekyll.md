---
title: Blog migrado a jekyll
author: Muammar El Khatib
layout: post
categories:
  - Ciencias
  - Linux
tags:
  - jekyll
  - migration
  - wordpress
---

Finalmente he decidido migrar mi blog de Wordpress a *jekyll*. Siendo este el
primer post que escribo usando markdown. El proceso de migración no fue para
nada complicado, y de hecho procedo a describir brevemente. Antes de hacerlo,
algunas de la razones que me hicieron decantar a usar jekyll para el blog son
las siguientes:

1. Tengo una vida algo "nómada", y la idea de tener mi servidor casero se
   vuelve más difícil. Siempre me ha gustado tener en poder mis datos, pero el
   hecho de usar jekyll me abre la posibilidad de poder hostear mi página en
   [GitHub Pages](https://pages.github.com). Cosa que no he hecho aún, pero
   tendré que hacer pronto.
2. Puedo usar `Markdown`. Me gusta lo práctico que esto puede ser, y también
   que puedo utilizar mi editor de texto preferido para escribir mis posts. No
   más interfaces incómodas.  Para aquellos que no conozcan sobre esta
   herramienta de conversión, hay una buena [definición
   aquí](http://daringfireball.net/projects/markdown/).
3. Utilizar **git** lo que me permite tener una control más amplio así como una
   réplica exacta en al menos dos lugares distintos.
4. Ir con las nuevas tendencias. Un generador de sitios estáticos para generar
   un blog no es una idea tan descabellada después de todo, en realidad lo que
   puede llegar a ser más dinámico en un blog es la sección de comentarios.
5. Seguridad. Esto es html con algo de css, lo que minimiza el riesgo al no
   utilizar, por ejemplo, php.
6. No más bases de datos. No hace falta.
7. Puedo utilizar `jekyll serve` para subir el sitio localmente y trabajar sin
   necesidad de una conexión a Internet.

Luego de esta serie de razones, procedo a describir cómo hacer la migración.

Cómo migrar a Jekyll un blog de wordpress
-----------------------------------------

Hay que tener en cuenta dos cosas. La primera es que tenemos que buscar una
manera de exportar los posts desde wordpress sea en xml o en markdown (prefiero
la última opción), y la segunda es la exportación de los comentarios. En este
sentido, el hecho de tener que exportar los comentarios de wordpress
a [disqus](https://disqus.com) es algo que no me agrada mucho, pero al final
qué importa... siempre será posible descargarlos en algún formato utilizable en
otros medios.

Post de Wordpress
=================

Hay dos métodos posibles. Uno es el que está descrito en el sitio oficial de
jekyll sobre [cómo importar sitios](http://import.jekyllrb.com):

* Usando un archivo xml

En este método, basta con ir al panel de administración de wordpress,
y exportar los posts en formato xml. Una vez descargados, es posible importar
estos posts usando jekyll import:

~~~
$ sudo gem install jekyll jekyll-import

$ jekyll new yourname

$ cd yourname

$ ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordpressDotCom.run({
      "source" => "wordpress.xml",
      "no_fetch_images" => false,
      "assets_folder" => "assets"
    })'
~~~

Este método no me funcionó correctamente, así que no lo recomiendo.

* Usando el plugin **WordPress to Jekyll Exporter**:

Instalar el plugin [WordPress to Jekyll
Exporter](https://wordpress.org/plugins/jekyll-exporter/). Una vez que está
instalado, una nueva opción dentro de la sección herramientas queda habilitada. Procede a exportar los posts:

<img class="aligncenter size-large wp-image-1021" src="http://muammar.me/blog/wp-content/uploads/2015/08/wp-download.png" alt="works" />

Dentro del archivo `jekyll-export.zip` encontrarás todos los posts en formato
markdown dentro un directorio llamado `_posts` y otro llamado  `wp-content` con
todas los archivos multimedia de tu blog en wordpress.

Ahora solo es cuestión de copiar el directorio `_posts` dentro de la raíz que
contiene tu sitio jekyll. En lo personal, me gusta la configuración del blog
como un subdirectorio adicionado a mi dominio:

Ejemplo:

`http://muammar.me/blog`

Y los posts los organizo por */año/mes/día/títulodelpost*. Aquí hay que tener
cuidado, puesto que el plugin Jekyll exporter, se agregan también los permalinks (o
enlaces permanentes) que hay en wordpress, por lo que es necesario **escoger de
antemano el tipo de permalink antes de exportar los posts**. En mi caso, tuve
que cambiar en `Custom structure` la configuración de los permalink a lucir de
la siguiente forma:

~~~
/blog/%year%/%monthnum%/%day%/%postname%/
~~~

<img class="aligncenter size-large wp-image-1021" src="http://muammar.me/blog/wp-content/uploads/2015/08/permalink-settings.png" alt="permalink" width="70%" height="70%" />

Así, los archivos markdown tenían esta información en los permalinks:

Ejemplo:

~~~
permalink: /blog/2006/04/el-hermitismo/
~~~

Y finalmente, en `_config.yml`, agregué:

~~~
permalink: /blog/:year/:month/:day/:title/
~~~

Finalmente, crea un directorio dentro de la raíz de tu sitio que se llame blog
y copia el directorio `wp-content` que generamos con jeyll export en wordpress:

~~~
$ cd yourname

$ mkdir blog

$ mv /path/to/wp-content blog
~~~

Esto debería ser suficiente.

Comentarios
===========

En este caso solo desarrollo el caso de Disqus. Hay que por supuesto
registrarse en Disqus y generar un nuevo "sitio" en
[https://disqus.com/admin/create/](https://disqus.com/admin/create/). Una vez
creado, copia el código que se encuentra en
[https://disqus.com/admin/universalcode/](https://disqus.com/admin/universalcode/)
al final del archivo (o donde quieras que los comentarios aparezcan) en
`yourname/_layouts/post.html`.

~~~
<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    // Required: on line below, replace text in quotes with your forum shortname
    var disqus_shortname = 'FORUM SHORTNAME GOES HERE';

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
~~~

Una vez que has hecho esto, los comentarios estarán activos. Es posible también
instalar el plugin `disqus` en tu wordpress para exportar los comentarios
antiguos. O en su defecto, bajar el archivo xml del exportador y hacer un
import en disqus.

Creo que esto es todo. Si encuentras un error, o algo no es claro, por favor
escribe en los comentarios o contáctame para poder  mejorar esta información.
