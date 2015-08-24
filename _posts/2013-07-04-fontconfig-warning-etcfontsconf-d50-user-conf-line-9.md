---
title: 'Fontconfig warning: &#8220;/etc/fonts/conf.d/50-user.conf&#8221;, line 9'
author: Muammar El Khatib
layout: post
permalink: /blog/2013/07/fontconfig-warning-etcfontsconf-d50-user-conf-line-9/
categories:
  - Ciencias
  - Debian
  - Linux
---
Todo está dicho en el título. La manera de solucionar ese warning es:

&nbsp;

> <span style="font-family: Consolas, Monaco, monospace; font-size: 12px; line-height: 18px;">mkdir -p $HOME/.config/fontconfig</span>
> 
> <span style="font-family: Consolas, Monaco, monospace; font-size: 12px; line-height: 18px;">mv $HOME/.fonts.conf $HOME/.config/fontconfig/fonts.conf</span>