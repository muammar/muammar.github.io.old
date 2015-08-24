---
title: Migración del repositorio de seguridad de Testing
author: muammar
layout: post
permalink: /blog/2006/05/migracion-del-repositorio-de-seguridad-de-testing/
categories:
  - Debian
---
<img width='89' height='110' style="float: left; border: 0px; padding-left: 5px; padding-right: 5px;" src="/uploads/pics/debian-noir-bordeau.serendipityThumb.png" alt="" />El equipo de seguridad de testing anuncia la integración del repositorio de seguridad de testing http://security.debian.org  
Invitamos a los usuarios de Debian que están actualmente corriendo Testing, o aquellos que les gustaria migrar a testing, suscribirse a la lista secure-testing-announce, la cual se utilizará para anunciar las actualizaciones de seguridad.  
También lo invitamos a que agregue las líneas siguientes a su archivo sources.list, y ejecute apt-get update && apt-get upgrade para disponer de las actualizaciones de seguridad.  
*deb http://security.debian.org etch/updates main contrib non-free  
deb-src http://security.debian.org etch/updates main contrib non-free*  
Estas últimas remplazan a las líneas previas http://secure-testing.debian.net/ que no deben utilizarse más. Habra un periodo de transición donde los paquetes estarán disponibles en ambos. Pero a partir de ahora deberia utilizar las líneas http://security.debian.org  
Observe que mientras todas las arquitecturas de Debian estan soportadas. podemos lanzar un aviso antes que los paquetes corregidos hayan sido compilados para todas las arquitecturas soportadas. Si es así las compilaciones que falten estaran disponibles cuando se completen.  
Los desarrolladores de Debian que deseen subir correcciones para los fallos de seguridad en testing al repositorio ya lo pueden hacer, siguiendo las instrucciones en nuestro sitio web.  
Finalmente, seguimos en el proceso de resolver cómo seria la mejor forma de servir a usuarios de testing y mantener sus sistemas seguro, esperamos sus comentarios acerca de la forma de realizarlo mejor. Usted puede contactarse con el equipo de seguridad de testing en secure-testing-team [at] lists.alioth.debian.org.  
Para más información sobre el equipo de seguridad de testing, vea nuestro <a href="http://secure-testing-master.debian.net/" target=blank">sitio web</a>.  
***Fuente: debian-devel-announce***  
***Traducción tomada de: http://www.esdebian.org/article.php/20060513010552264***  
*Muammar El Khatib.*