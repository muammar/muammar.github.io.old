---
title: Errores comunes en Gaussian
author: muammar
layout: post
permalink: /blog/2008/10/errores-comunes-en-gaussian/
categories:
  - Off topic
---
Este post lo encontré en la red en inglés por tanto lo pueden ver haciendo <a href="http://superbeton.wordpress.com/2007/07/08/gaussian-error-messages/" target=blank' title="Common Errors in Gaussian">click aquí.</a> Lo que hice fue traducirlo y de esta manera compartirlo. Como químico cuántico en ocasiones nos encontramos con errores en este paquete computacional que no sabemos que significan o cómo resolverlos. Espero que sea de utilidad.  
**Errores Físicos:**  
*Estimate disk for full transformation -677255533 words. Semi-Direct transformation. Bad length for file.*  
En este caso puedes configurar el uso del keyword **MaxDisk** (<a href="http://www.gaussian.com/g\_ur/k\_maxdisk.htm " target=blank">http://www.gaussian.com/g\_ur/k\_maxdisk.htm</a>) o puedes partir el archivo RWF usando:  
%RWF=loc1,size1,loc2,size2, …  
La palabra 1 significa 8 bytes.  
**Error debido al uso de memoria:**  
*IMax=3 JMax=2 DiffMx= 0.00D+00  
Unable to allocate space to process matrices in G2DrvN:  
NAtomX= 58 NBasis= 762 NBas6D= 762 MDV1= 6291106 MinMem= 105955841.  
*  
Esto muestra que Gaussian tiene 6 MW de memoria libre pero para computar requiere 106 MW. Coloca un valor más alto de memoria, (al menos 106 MW (848 Mbytes)) en el achivo de entrada en el input ‘mem’.  
**Errores de convergencia:**  
1. Error de terminación por petición procesada por link 9999.  
*Error termination via Lnk1e in /usr/local/intel/g03/l9999.exe at Thu =  
Jun 1 16:23:59 2006.  
Job cpu time: 0 days 5 hours 22 minutes 24.2 seconds. *  
Hay muchas razones que pueden causar este error. Usualmente, este error demuestra que no hay convergencia en las iteraciones. Lo primero que debes hacer, es chequear en número máximo de iteraciones, si el número es excedido, significa que las iteraciones no han finalizado aún para completar el cálculo. Puedes repetir las iteraciones desde la última geometría con el keyword Geom=check y agreagando maxcycle=100 por ejemplo.  
2. … Annihilation of the first spin contaminant:. S**2 before annihilation 1.0036, after 0.0288.  
Esto es casudo por un cálculo erróneo de espín. También hay muchas razones para que esto ocurra. Lo primero que debes hacer es chequear el método que usaste sea resctrictivo o no. En mi experiencia, este problema usualmente ocurre cuando uso pequeños métodos, por ejemplo HF para sistemas relativamente complejos. Lo segundo es que esto puede suceder debido a un mal input de geometría. Esto creará un peor cálculo guess inicual, y causa este problema.  
3. … Error termination in NtrErr:  
*NtrErr Called from FileIO.*  
Este error es común. Se da cuando el cálculo excede el límete máximo de ‘maxcycle’. Continuar la iteración con Geom=check o cambiar la estructura con un mejor calculo guess podría solucionar este problema.  
**Errores en el Archivo de Entrada:**  
1. QPERR — A SYNTAX ERROR WAS DETECTED IN THE INPUT LINE.  
Chequea el archivo de entra porque esto significa un error en el. Usualmente, Gaussian notificará alguna otra cosa debajo de esa línea.  
2. .. GFINPUT NOSY  
Chequea el método, o el conjunto base.  
3. Información pseudopotencial no encontrada en el archivo rwf.  
La combinación de multiplicidad 1 y 9 electrones es imposible. Hay dos errores en este caso, el primero está relacionado a un viejo archivo .chk que está siendo usado en el actual cálculo. El archivo .chk probablemente da una información diferente a la que tu necesitas. Lo segundo está relacionado a la multiplicidad y la carga escrita en el archivo de entrada podría estar mal.  
4. Error debido al número de variables en la estructura de entrada.  
\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***  
\*\* ERROR IN INITEF. NUMBER OF VARIABLES (111) \*\*  
\*\* INCORRECT (SHOULD BE BETWEEN 1 AND 50) \*\*  
\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***  
Esto se puede deber a que cuando usas CASSCF o opt(ES) y colocas demasiadas variables a la estructura de entrada. Esto es una de las limitaciones de la versión actual del algoritmo y puede ser resulta limitando tu número máximo de variables a 50, por ejemplo, hacer que las otras se congelen.