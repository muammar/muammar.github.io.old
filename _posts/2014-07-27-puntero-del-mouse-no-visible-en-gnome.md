---
title: Puntero del mouse no visible en gnome
author: muammar
layout: post
permalink: /blog/2014/07/puntero-del-mouse-no-visible-en-gnome/
categories:
  - Ciencias
  - Debian
  - Linux
tags:
  - fuck
  - gnome
  - invisible
  - puntero
  - trackpad
---
Si por alguna razón utilizando alguno de los componentes de gnome (como gnome-settings-daemon en mi caso porque gnome-terminal todavía me gusta) el puntero del mouse no es visible pero aún funcional, entonces lo más probable es que tengas que ejecutar:

`dconf write /org/gnome/settings-daemon/plugins/cursor/active false<br />
`

Este problema se da puesto que Gnome esconde el puntero cuando se detecta algún dispositivo touch¹ (vaya estupidez cuando lo touch no es la pantalla, pero el trackpad). Así pues, es necesario hacer entender al !@#$%&*@# Gnome que no se trata de una !@#$%^ pantalla touch pero de un !@##$%%^ multi-touch trackpad. 

1. [https://bugs.archlinux.org/task/34901][1]

 [1]: https://bugs.archlinux.org/task/34901 "https://bugs.archlinux.org/task/34901"