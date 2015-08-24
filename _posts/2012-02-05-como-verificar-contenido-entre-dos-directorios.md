---
title: ¿Cómo verificar contenido entre dos directorios?
author: muammar
layout: post
permalink: /blog/2012/02/como-verificar-contenido-entre-dos-directorios/
categories:
  - Ciencias
  - Debian
  - Linux
tags:
  - diferencias
  - diff
  - directorios
  - linux
  - terminal
---
En estos últimos dos años, he estado en contacto con varios clusters dentro de la universidad donde hago mis estudios de posgrado. La solución que he escogido para mantener sincronizados mis directorios de trabajo ha sido **rsync**. Esto, básicamente porque está instalado en todas las estaciones generalmente (cosa que no ocurre con git, que no está siempre instalado).

Sin embargo, a veces he tenido que dejar andando ciertos cálculos por semanas y seguir haciendo trabajos en otros clusters que tienen más hardware por nodo que me son de utilidad. Pero, ¿qué pasa si tengo un directorio centralizado y he borrado ciertos sub directorios en otros clusters y quiero saber cuáles han sido borrados? Aunque parezca básico, es aquí donde **diff** entró al rescate. (Si alguien conoce otra forma más apropiada, por favor no dude en hacerla saber :)). La utilidad está si cuando sincronizas sueles usar la opción &#8211;delete en rsync.

Si queremos comparar dos directorios ejecutamos lo siguiente:

> diff $DIRECTORIO1 $DIRECTORIO2

Por ejemplo:

muammar@circa:~$ diff hyperion hyperion.21012012/  
Subdirectorios comunes: hyperion/elkhatib y hyperion.21012012//elkhatib  
Sólo en hyperion.21012012/: homework  
Sólo en hyperion.21012012/: old

La salida no necesita explicación. Queda demás decir, que se pueden utilizar las opciones habituales relacionadas al comando diff. Para más información, lee el manual (man diff).