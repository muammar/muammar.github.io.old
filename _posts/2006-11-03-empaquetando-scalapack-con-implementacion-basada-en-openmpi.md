---
title: Empaquetando Scalapack con implementación basada en OpenMPI
author: muammar
layout: post
permalink: /blog/2006/11/empaquetando-scalapack-con-implementacion-basada-en-openmpi/
categories:
  - Debian
---
Hace unos cuantos días me llegó un correo con una petición de un alemán llamado Oliver Bock de la [University of Applied Sciences Braunschweig/Wolfenbuettel][1], en donde me preguntaba si pensaba hacer una implementación basada en [OpenMPI][2] para Scalapack. La posible aplicación que le daría Oliver sería a un estudio óptico en la rama de astronomía. Dicha noticia me hizo sentir bastante contento, puesto que yo trabajo en óptica no lineal en la rama de la química cuántica y que existe interés en el paquete que mantengo.  
Ya en trabajo conjunto, logramos siguiendo el FAQ de la página oficial de OpenMPI, compilar Scalapack utilizando el Wrapper compiler de OpenMPI.  
En estos momentos me encuentro fuertemente trabajando en el rules del paquete. Ya logré que compilara parcialmente, salvo algunos problemas que he tenido. Las pruebas son un poco tediosas, ya que el paquete dura una hora y 15 minutos aproximadamente en compilarse.  
Espero terminar esto la semana que viene, si las condiciones me lo permiten, para poder realizar las pruebas de la implementación en un cluster, y próximamente sería revisado por mi sponsor y el paquete será subido.

 [1]: http://www.fh-wolfenbuettel.de/cms/en/
 [2]: http://www.open-mpi.org/