---
title: Remover dangling commits
author: Muammar El Khatib
layout: post
categories:
  - Ciencias
  - Linux
  - Debian
tags:
  - git
  - dangling
---
Escribo este artículo, porque es otra de esas cosas que olvido y siempre
termino buscando repetidas veces (aunque tenga en mi `zsh` los 10.000 últimos
comandos guardados). Voy a escribir brevemente sobre los `dangling blobs`
o `dangling commits`.

Lo primero, es entender qué es un _dangling commit_. Para ello, les recomiendo
[leer
aquí](http://stackoverflow.com/questions/18514659/git-what-is-a-dangling-commit-blob-and-where-do-they-come-from),
[aquí](https://git-scm.com/book/es/v1/Los-entresijos-internos-de-Git-Mantenimiento-y-recuperaci%C3%B3n-de-datos)
o incluso [aquí](http://osdir.com/ml/git/2009-04/msg01863.html). En líneas
generales, cada vez que hacemos un `commit` y `HEAD` se mueve, `git` "rastrea"
esto en el `reflog` (o [Reference logs](https://git-scm.com/docs/git-reflog)).
En el caso de que algunos `commits` sean removidos de un repositorio, se
crearan los `dangling commits` que son aquellos `commits` que están aún siendo
referidos por `reflog` por un máximo de ~30 días. Estos `commits` existen como
medida de seguridad en caso de que borres algo por accidente.

## ¿Cómo los borro?

Hay hacer un `git fsck` para verificar el estado del repositorio:

```
 ± % git fsck
Checking object directories: 100% (256/256), done.
Checking objects: 100% (42285/42285), done.
dangling blob 6d095cdcf74030b411b522e440f52c892253e813
dangling blob 891dae15869cea89a80f3e366a49007845645fbc
dangling blob a6ec8a729bb7c8e484fd0b42d4d8a632a3b39351
dangling blob 609eb77b7ae23bcbbf020997e55830aa8a8502a1
dangling blob f6d031422ef9d23b7225080a57c612d7f4e1ae51
```

Como se puede observar, hay un total de 5 `dangling blobs`. Podemos observar el
contenido con `git show`. Para eliminarlos, ejecutamos:

```
± % git reflog expire --expire=now --all

± % git gc --prune=now
Counting objects: 42308, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (19655/19655), done.
Writing objects: 100% (42308/42308), done.
Total 42308 (delta 20150), reused 42274 (delta 20126)
```

Y de esta manera, dichos blobs son borrados:

```
± % git fsck
Checking object directories: 100% (256/256), done.
Checking objects: 100% (42308/42308), done.
```
