---
title: Instalar Debian en Macbook Pro 8,1 2011
author: Muammar El Khatib
layout: post
permalink: /blog/2011/08/instalar-debian-en-macbook-pro-81-2011/
categories:
  - Debian
  - Linux
---
Este procedimiento fue probado utilizando la imagen de Debian testing y es una instalación para un esquema Dual boot (Mac OS X – Debian).

Primero que todo es importante leer la sección de instalación [MacBook Install][1] del Wiki de Debian para entrar en contexto con los términos y proceder con la instalación.

Hasta los momentos, el instalador de Debian no puede instalar correctamente en la Macbook pro, la razón, es que no es posible cargar todos los componentes del CD-ROM ya que este no es detectado correctamente. Sin embargo, es posible proceder con la instalación utilizando un pen drive (adicionalmente al disco de instalación) en el cual copiarás bit a bit la misma imagen ISO que utilizaste para quemar el disco de instalación de Debian. De esta manera se logra “burlar” el Debian installer ya que podremos montar el USB en /cdrom como explicaré a continuación:

Prepara el pen drive. Para ello, copiaremos bit a bit la misma ISO de Debian que has utilizado para quemar el CD. Para ello, ejecuta lo siguiente:

`dd if=debian.iso of=/dev/sdbX<br />
`

Donde, /dev/sdbX corresponde al pendrive y X es el número que tiene el device cuando es detectado en Linux . Nota que puedes hacer esto ya sea en Linux o en Mac OS X. Si lo haces en Mac OS X, el device es nombrado como /dev/disk1. Eso que puedo también agregar es que para saber exactamente el nombre del dispositivo lsusb (en Linux) y disk utility (en Mac OS X) son tus amigos.

Una vez preparado el pen drive, procede con la instalación que se muestra en el Wiki de Debian [MacBook Install][1]. Para la instalación debes usar el CD y no el pen drive.

Cuando el instalador de Debian trata de cargar todos los componentes en el cdrom, fallará. Sigue las instrucciones hasta que seas devuelto a la lista de tareas de instalaciones. En este momento vas a abrir un TTY pulsando las teclas Ctrl + Alt + F2, y procederás a montar el pen drive en el directorio /cdrom que fue creado por instalador como muestro a continuación:

`mount /dev/sdX /cdrom<br />
`

Donde de nuevo, sdX debe corresponder con tu pen drive. En ocasiones, montar el pen drive puede fallar. Para ello, desconecta el dispositivo y vuelve a conectarlo. Debería funcionar. En mi experiencia, cuando falla el montaje, es debido a que no has finalizado de contestar las preguntas que te hace el instalador de Debian cuando no puede cargar los componentes del CD. por lo que recomiendo responder todas las preguntas al instalador antes de hacer el montaje.

Ve de nuevo al instalador, para ello presiona Ctrl + Alt + F1, y continúa el proceso de instalación hasta el punto de instalar GRUB o LILO. Si instalas sea LILO o GRUB sin sincronizar las particiones en refit, Linux no va a iniciar. Por lo tanto, no instales aún el bootloader.

En este punto, vamos a sincronizar las particiones con gptsync. Si no tienes internet al momento de instalación, descarga los paquetes gptsync y refit desde <http://packages.debian.org> en otro pen drive e instala con dpkg.

Si no cuentas con internet, monta el pen drive que contiene los paquetes en /mnt:

`mount /dev/sdX /mnt`

Copia los archivos *.deb en /target/tmp:

`cp /mnt/path/*.deb /target/tmp`

Haz Chroot en /target y procede a instalar refit y gptsync, y sincroniza el MBR y GPT:

`chroot /target<br />
dpkg -i /tmp/*.deb<br />
refit`

Si cuentas con internet, solo debes hacer Chroot en /target y cargar el módulo tg3 e instalar con apt-get o aptitude. Para ello, abre de nuevo el TTY (Ctrl + Alt + F2) e instala refit y gptsync.

`modprobe tg3<br />
apt-get install gptsync refit`

En ocasiones, ejecutar solo refit no funciona. Si es tu caso, procede a ejecutar en vez:

`gptsync /dev/sda`

Una vez que haz sincronizado, vuelve al instalador (Ctrl + Alt + F1) y procede a instalar GRUB (Para mi funcionó bien con GRUB, no he intentado con LILO. Es muy importante que cuando vas a instalar GRUB selecciones como partición /dev/sdX3 (Donde de nuevo X corresponde a tu esquema de partición cuando instalaste Debian. Si instalas GRUB en el MBR, este procedimiento no va a funcionar. De todas maneras, si lo haces por error luego es posible borrar el MBR desde Mac OS X.

Para configuraciones posteriores a la instalación visita:

<http://wiki.debian.org/MacBookPro>

 [1]: http://wiki.debian.org/MacBook#Install_Debian