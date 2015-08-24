---
title: CPU Power Saving/Frequency Scaling
author: muammar
layout: post
permalink: /blog/2007/03/cpu-power-savingfrequency-scaling/
categories:
  - Debian
---
Esto es una traducción y a la vez una paráfrasis de un how to que conseguí en la red. Quiero compartirlo por su utilidad. Con activar el CPU Frequency Scaling, logré que la batería de mi laptop durara casi una hora más. Este método, al menos en mi caso, resultó satisfactorio. Esto fue probado en Debian inestable en un laptop Toshiba Satellite M115-S3144 con procesador Intel Core 2 Duo Mobile. Veamos de que se trata:  
1.- Asegurarse de que en el BIOS las opciones Cool&#8217;n&#8217;Quiet (AMD) o SpeedStep (Intel) estén activadas. En algunos casos el BIOS no trae las opciones por lo cual se puede suponer que están activadas por defecto e incluso pueden aparecer con otros nombres distintos a los mostrados arriba.  
2.- Desinstalar el software de escalado de espacio de usuario:  
apt-get remove powernowd cpudyn  
3.- Instalar el módulo para el CPU  
Lo primero es identificar el tipo de CPU que se posee:  
cat /proc/cpuinfo  
A continuación se muestran los posibles módulos para algunos de los procesadores más populares:  
AMD Sempron/Athlon/MP ( K7 )  
Tipo de Socket: A, Slot A  
modprobe powernow-k7  
AMD Duron/Sempron/Athlon/Opteron 64 ( K8 )  
Tipos de Socket: 754, 939, 940, S1 ( 638 ), AM2 ( 940 ), F ( 1207 )  
modprobe powernow-k8  
Intel Core Duo  
modprobe speedstep-centrino  
Intel Pentium M  
modprobe speedstep-centrino  
Otros (Desconocido)  
Si tu procesador no funciona con ninguno de los módulos mostrados arriba, puedes intentar, aunque no se puede asegurar que funcione, el siguiente módulo:  
modprobe acpi-cpufreq  
4.- Montando los módulos de escalamiento :  
modprobe cpufreq_conservative  
modprobe cpufreq_ondemand  
modprobe cpufreq_powersave  
modprobe cpufreq_stats  
modprobe cpufreq_userspace  
5.- Probando y configurando  
Para mostrar los gobernadores disponibles:  
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling\_available\_governors  
La salida que deberías observar es como la que se muestra debajo:  
powersave conservative ondemand performance  
6.- Ejecutar los módulos al inicio  
Dependiendo el modo que escojas, agrega una o todas las línes al final de /etc/modules  
cpufreq_conservative  
cpufreq_ondemand  
cpufreq_powersave  
cpufreq_stats  
cpufreq_userspace  
Agrega también el módulo que se nombra en el paso 3.  
7.- Instalar cpufrequtils  
Esta es una simple herramienta que permite hacer uso de los módulos y controlarlos desde la consola:  
apt-get install cpufrequtils  
Para probarlo:  
cpufreq-info  
8.- Seleccionar un gobernador.  
Los diferentes gobernadores controlan cómo las velocidades del procesador son escaladas. Las opciones son:  
ondemand  
Frecuencia de procesamiento basada en la carga.  
conservative  
Este modo es parecido al gobernador ondemand, el procesador se configura de alguna manera dependiendo del uso. Difiere en que el comportamiento del conservative hace el escalado de manera mucho más gradual que ondemand que realiza saltos a la máxima velocidad en el momento en que un proceso lo requiera.  
performance  
La CPU funciona solamente en la frecuencia máxima sin importar carga.  
powersave  
La CPU funciona solamente en la frecuencia mínima sin importar carga.  
Prueba los gobernadores:  
cpufreq-set -g ondemand  
Nota: Puedes usar el gobernador que desees.  
En sistemas con más de un procesador, necesitas repetir el último comando para cada procesador que tengas especificando el parámetro -c (CPU). Por tanto el comando que se mostró arriba aplica para un solo procesador. En caso de tener un procesador de doble núcleo:  
cpufreq-set -c 0 -g ondemand  
cpufreq-set -c 1 -g ondemand  
Para ver cuántos procesadores tienes, ejecuta:  
ls /sys/devices/system/cpu/  
9.- Configurar cpufrequtils para que automáticamente configure el gobernador escogido en el inicio:  
Edita el archivo /etc/default/cpufrequtils. Y cambia la línea:  
ENABLE=&#8221;false&#8221;  
a  
ENABLE=&#8221;true&#8221;  
Configura la variable GOVERNOR según el nombre del gobernador que escogiste en el paso 8.