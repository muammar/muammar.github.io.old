---
title: 'Gnome, gnome, gnome&#8230;'
author: muammar
layout: post
permalink: /blog/2013/10/gnome-gnome-gnome/
categories:
  - Debian
  - Linux
tags:
  - awesome
  - debian
  - gnome
  - libre
  - linux
  - software
---
<p lang="es-VE">
  Desktop environments (DE). Hoy me gustaría hablar de Gnome y los cambios que están llevando a cabo últimamente y por qué los veo como imposiciones. Tal vez este ensayo llega tarde, pero Gnome 3.8 llegó tarde a Debian que es lo que utilizo como SO primario. Cuando incursioné al mundo de Linux comencé utilizando KDE. Como era lo que había en el Laboratorio instalado, no tenía otra opción mas sin embargo me parecía bastante emocionante utilizar algo diferente a Windows hace 10 años. Luego recuerdo haber cambiado a Gnome, y ahí me quedé por varios años. Gnome era diferente, simple y sobre todo funcional. Gnome hacía estas actualizaciones graduales, y eso me parecía excelente. Claro, en algún momento Gnome lo hizo mal, estos cambios graduales no tenían un impacto alto y se estaban quedando atrás. A pesar de ser tan estable, luego pasé por Fluxbox, Open Box, hasta que llegué a Awesome WM hace ~4 años, y literalmente no me moví más de ahí.
</p>

<p lang="es-VE">
   Awesome WM era (y es) un entorno que me permite modificar a mi gusto, y antojo el ambiente y por sobre todo dejarlo INMUTABLE hasta que YO decida que es momento de cambiarlo. Adicionalmente es bastante minimalista y serio, sin dejar de notar que cuando alguien te pide el laptop prestado al ver “esta cosa” simplemente te dicen: No gracias :). Lo malo que ha tenido, tiene y al parecer tendrá Awesome (nada es perfecto maldita sea), es cuando viene una actualización y toda tu configuración se la lleva la mierda porque ya no es compatible. Pero bueno, se puede vivir con ese dolor porque no ocurre de cada rato, digamos que es como una basurita en el ojo (muy esporádico). Pero Gnome, Gnome con este Gnome-Shell lo está haciendo muy mal. Gnome con esta nueva versión de su DE está forzando al usuario (sin opción a cambios) a utilizar cosas como: efectos maricones que no necesitas, pulseaudio (me da igual la verdad mientras que mi laptop me de audio), systemd (también me da igual, pero muchos se quejan), no transparencias en el shell, no current directory en el shell, etc. Mucha gente puede argumentar que está la sesión fallback&#8230; Pero vamos a ser claros, dicha sesión es como cuando le pones un parche a una llanta (por decirlo de alguna manera, ya que se me vienen a la cabeza solo malas y malas palabras).
</p>

<p lang="es-VE">
   En este punto muchos se podrían preguntar por qué me quejo de Gnome si supuestamente estoy usando awesome. Mi respuesta personal sería: porque puedo quejarme como usuario, porque quiero y porque me da la gana. Pero una mejor respuesta argumentada sería la siguiente: porque Gnome solía ser cool, me dejaba utilizar el gnome-power-manager (que lo renombraron y ofuscaron porque yo creo que ya ni ellos saben cómo se llama), el sound-applet y el componente que necesitara en awesome pero en este momento no es el caso. Entonces me comienzo a cuestionar tantas cosas que están pasando en la comunidad de software libre, es ahora una especie de carnicería y competencia en donde todos fuerzan e imponen lo que creen que es mejor (tal cual las grandes privativas) y lo peor del caso, rompen el workflow de los demás y comienzan a ser egoístas sin dejar de forma fácil que uno se pueda beneficiar de las aplicaciones que producen y que funcionan bien. Al parecer toda esta carnicería es solo para ver quien es el más <a href="http://i0.kym-cdn.com/photos/images/original/000/001/582/picard-facepalm.jpg?1240934151" target="_blank">Popular</a> . Luego que se actualizó GDM <a href="https://twitter.com/muammar/status/391338774552399872" target="_blank">, no pude hacer que awesome utilizara gnome-session</a>, solo veía una pantalla que me decía que <a href="http://opensourcewin.files.wordpress.com/2012/12/fedora_error.jpg" target="_blank">todo estaba wrong</a>. Solo hasta hace 3 días logré hacer funcionar awesome en gnome-session porque no tengo mucho tiempo para perderlo en esto, pero resulta que el power-managment no está funcionando. Ahora para poder iniciar gnome-session, no basta solo con ejecutarlo desde el shell, pero crear 4 diferentes archivos para definir una sesión que por supuesto si falta algún Required Component, no sirve.
</p>

<p lang="es-VE">
  He perdido ya casi 10 días de utilizar awesome por esta serie de babosadas que han introducido los de Gnome y un impacto a mi forma de trabajo. ¿Por qué necesito estos componentes de Gnome?. Hay dos respuestas, pero solo daré una: Porque puedo hacer que toda mi macbook pro funcione aceptablemente con el power-managment de gnome, las hotkeys, etc (y la macbook pro la compré porque tenía el dinero y porque quería :), así que no acepto argumetnos en contra de mi hardware). Llevo varios días utilizando ahora Gnome shell pero de verdad que no me gusta para nada. Escribo estas líneas desde ahí con el gran malestar y odio que genera en mi esta nueva versión de Gnome. No entiendo por qué coño de alguna manera me he visto forzado a tener que cambiar mi workflow por esto. No, el awesome tal cual está ahora sin los componentes que necesito es inútil porque: el brillo del teclado me vacea los ojos, porque no puedo gobernar el audio con las hotkeys. Sí, todo esto se puede hacer desde la línea de comandos, pero últimamente no tengo mucho tiempo de andar con esas jodencias, necesito una máquina que funcione y que no me haga perder tiempo con estos detalles que deberían funcionar (y funcionaban) antes de que vinieran otros y empezaran a romper todo.
</p>

<p lang="es-VE">
  Finalmente, nada es gratis, el software libre aparentemente tiene un precio y es este. Cuando al upstream se le da la gana de cambiar todo drásticamente lo hará y como usuario tienes opciones claro, que son: acostumbrarte, hacer un fork, o migrar. Yo no estoy en contra del cambio, que se hagan los cambios que sean necesarios (por muy en desacuerdo que esté con algunos), pero al menos no sean egoístas con la usabilidad que le pueden dar los demás. Eso no es espíritu de cooperativismo, esa es la misma actitud de gente como Apple o Windows. FO Gnome FO !
</p>