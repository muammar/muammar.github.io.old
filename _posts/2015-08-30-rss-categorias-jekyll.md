---
title: RSS filtrado por categorías en Jekyll
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

Como lo había comentado préviamente, [migré mi blog
a Jekyll](http://muammar.me/blog/2015/08/24/blog-migrado-a-jekyll/). Luego de
realizar algunos cambios, estoy bastante conforme con el resultado final. Pero
algo faltaba: los RSS. Como venía de utilizar Wordpress, estaba acostumbrado
a la siguiente estructura para proporcionar RSS disponible en ese
[CMS](https://en.wikipedia.org/wiki/WordPress):

1. Un RSS *general* que contiene todos los posts del blog sin importar las
   categorías: [http://muammar.me/blog/feed/](http://muammar.me/blog/feed/)
2. Ciertos RSS filtrados por categorias con la estructura siguiente:
   **http://muammar.me/blog/category/$nombre/feed** donde $nombre representa
   los nombres de las categorías.

En este post, describiré cómo generar dicho RSS general y el que está filtrado
por categorías. La estructura preferí mantenerla de esa manera, porque ya no
recuerdo el número de lugares donde mi blog está sindicado, por lo tanto, si
recupero la estructura previa todo debería volver a la normalidad.

# RSS general

En este caso, según la configuración de mi sitio, tuve que crear un directorio
llamado `feed`, dentro de `blog`:

~~~
$ mkdir -p /path/blog/feed/
~~~

Y se agrega un archivo `index.html` con el siguiente contenido:


<pre>
---
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ site.title | xml_escape }}</title>
    <description>{{ site.description | xml_escape }}</description>
    <link>{{ site.url }}{{ site.baseurl }}/</link>
    <atom:link href="{{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }}" rel="self" type="application/rss+xml" />
    <pubDate>{{ site.time | date_to_rfc822 }}</pubDate>
    <lastBuildDate>{{ site.time | date_to_rfc822 }}</lastBuildDate>
    <generator>Jekyll v{{ jekyll.version }}</generator>
    {% for post in site.posts limit:10 %}
      <item>
        <title>{{ post.title | xml_escape }}</title>
        <description>{{ post.content | xml_escape }}</description>
        <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
        <link>{{ post.url | prepend: site.baseurl | prepend: site.url }}</link>
        <guid isPermaLink="true">{{ post.url | prepend: site.baseurl | prepend: site.url }}</guid>
        {% for tag in post.tags %}
        <category>{{ tag | xml_escape }}</category>
        {% endfor %}
        {% for cat in post.categories %}
        <category>{{ cat | xml_escape }}</category>
        {% endfor %}
      </item>
    {% endfor %}
  </channel>
</rss>
</pre>
