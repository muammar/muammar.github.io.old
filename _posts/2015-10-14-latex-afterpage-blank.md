---
title: Agregar página en blanco en documento latex
author: Muammar El Khatib
layout: post
categories:
  - Ciencias
tags:
  - book
  - create
  - science
  - afterpage
---

Para poder agregar una página en blanco dentro del cuerpo de un documento
latex, hace falta agregar el siguiente paquete al preámbulo:

~~~
\usepackage{afterpage}
~~~

Luego, antes de generar la página nueva usando el comando `newpage`, hace falta
agregar lo siguiente:

~~~
\afterpage{\null\newpage}
\newpage
~~~

Esto creará una página adicional en blanco respetando todas las características
del documento y aumentando el número de la página. Espero que  este tip sea de
ayuda.
