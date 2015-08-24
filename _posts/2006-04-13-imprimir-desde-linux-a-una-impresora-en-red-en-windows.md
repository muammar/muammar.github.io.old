---
title: Imprimir desde linux a una impresora en red en windows.
author: Muammar El Khatib
layout: post
permalink: /blog/2006/04/imprimir-desde-linux-a-una-impresora-en-red-en-windows/
categories:
  - Linux
---
Todo tienes que hacerlo en modo super usuario.  
1) mv /etc/samba/smb.conf /etc/samba/smb.conf.back  
2) gedit /etc/samba/smb.conf  
Copias y pegas en el smb.conf nuevo la configuración que tengo debajo, y solo cambias el grupo de trabajo.  
\# Sample configuration file for the Samba suite for Debian GNU/Linux.  
#  
#  
\# This is the main Samba configuration file. You should read the  
\# smb.conf(5) manual page in order to understand the options listed  
\# here. Samba has a huge number of configurable options most of which  
\# are not shown in this example  
#  
\# Any line which starts with a ; (semi-colon) or a # (hash)  
\# is a comment and is ignored. In this example we will use a #  
\# for commentary and a ; for parts of the config file that you  
\# may wish to enable  
#  
\# NOTE: Whenever you modify this file you should run the command  
\# &#8220;testparm&#8221; to check that you have not many any basic syntactic  
\# errors.  
#  
#======================= Global Settings =======================  
[global]  
log file = /var/log/samba/log.%m  
dns proxy = no  
security=share  
passwd chat = \*Enter\snew\sUNIX\spassword:\* %n\n \*Retype\snew\sUNIX\spassword:\* %n\n  
server string = %h server (Samba, Ubuntu)  
socket options = TCP_NODELAY  
invalid users = root  
default = global  
workgroup = **TU\_GRUPO\_TRABAJO**  
os level = 20  
encrypt passwords = no  
syslog = 0  
panic action = /usr/share/samba/panic-action %d  
max log size = 1000  
wins support = yes  
[homes]  
comment = Home Directories  
browseable = yes  
\# By default, the home directories are exported read-only. Change next  
\# parameter to &#8216;yes&#8217; if you want to be able to write to them.  
writable = no  
\# File creation mask is set to 0700 for security reasons. If you want to  
\# create files with group=rw permissions, set next parameter to 0775.  
create mask = 0700  
\# Directory creation mask is set to 0700 for security reasons. If you want to  
\# create dirs. with group=rw permissions, set next parameter to 0775.  
directory mask = 0700  
\# Un-comment the following and create the netlogon directory for Domain Logons  
\# (you need to configure Samba to act as a domain controller too.)  
;[netlogon]  
; comment = Network Logon Service  
; path = /home/samba/netlogon  
; guest ok = yes  
; writable = no  
; share modes = no  
[printers]  
comment = All Printers  
browseable = yes  
path = /tmp  
printable = yes  
public = yes  
writable = no  
create mode = 0700  
\# Windows clients look for this share name as a source of downloadable  
\# printer drivers  
[print$]  
comment = Printer Drivers  
path = /var/lib/samba/printers  
browseable = yes  
read only = yes  
guest ok = yes  
\# Uncomment to allow remote administration of Windows print drivers.  
\# Replace &#8216;ntadmin&#8217; with the name of the group your admin users are  
\# members of.  
; write list = root, @ntadmin  
\# A sample share for sharing your CD-ROM with others.  
;[cdrom]  
; comment = Samba server&#8217;s CD-ROM  
; writable = no  
; locking = no  
; path = /cdrom  
; public = yes  
\# The next two parameters show how to auto-mount a CD-ROM when the  
\# cdrom share is accesed. For this to work /etc/fstab must contain  
\# an entry like this:  
#  
\# /dev/scd0 /cdrom iso9660 defaults,noauto,ro,user 0 0  
#  
\# The CD-ROM gets unmounted automatically after the connection to the  
#  
\# If you don&#8217;t want to use auto-mounting/unmounting make sure the CD  
\# is mounted on /cdrom  
#  
; preexec = /bin/mount /cdrom  
; postexec = /bin/umount /cdrom  
################################################  
3) Al terminar, salvas y reinicias el samba. ¿Cómo?  
de esta manera:  
#/etc/init.d/samba restart  
4) Antes de seguir, asegurate de que tienes correctamente instalada la impresora en windows, asegurate tambien que la tienes compartida (recuerda el nombre que sale de la impresora cuando la compartes).  
Al checar eso, entonces vamos a configurar la impresora.  
En System>Administration>Printing, le das click y te saldra el dialogo de configuración.  
5)Escoges, network printer, windows printer (SMB). Te pedira autenticación, alli colocas la clave que tengas en el windoze, si no tienes, lo dejas en blanco. Asegurate de escoger de forma adecuada el driver para tu impresora.  
6) En host, colocas el nombre del equipo en donde esta la impresora, es decir, el nombre del equipo windoze.  
7) En printer colocas el nombre de la impresora (este es el nombre que se crea cuando compartes la impresora, nombre de recurso compartido en la red [en mi caso lo cambie por hp920])  
8) http://localhost:631/printers con esa dirección checas el estado de la impresora. En mi caso sale esto:  
Description: DeskJet-920C  
Location:  
Printer State: idle, accepting jobs.  
Device URI: smb://PC-P4/hp920  
9) si no te sale ningun error, imprime tu primera página de prueba 😉  
10) NOTA: en caso de que no funcione, entonces haz:  
mv /etc/samba/smb.conf.back /etc/samba/smb.conf reinicias samba y todo quedará como antes 😀  
De esa manera me ha funcionado en debian y ubuntu. Espero que les sea de ayuda.  
Muammar El Khatib.