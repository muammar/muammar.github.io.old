---
title: Git log para obtener commits de una branch específica
author: Muammar El Khatib
layout: post
categories:
  - Linux
  - Debian
tags:
  - git
---

Tengo un repositorio en el que estoy trabajando en unas 4 branches diferentes.
Y hoy retomando el trabajo en una, quería solamente mostrar el log de los
commits hechos en dicha branch. ¿Cómo se hace?.

Luego de investigar un poco, conseguí este comando:

```
git log mybranch --not $(git for-each-ref --format='%(refname)' refs/heads/ | grep -v "refs/heads/mybranch")

```

*Nota*: sustituir `mybranch` por el nombre de la branch de interés.

Ejecutando el comando que muestro más arriba, puedo efectivamente filtrar los
commits de branches específicas, e incluso agregar la opción `-p` para ver los
cambios introducidos.

Fuente: [http://stackoverflow.com/q/14848274/1995261](http://stackoverflow.com/q/14848274/1995261)
