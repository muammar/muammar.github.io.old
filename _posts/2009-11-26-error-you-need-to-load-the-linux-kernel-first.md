---
title: 'error: you need to load the linux kernel first'
author: muammar
layout: post
permalink: /blog/2009/11/error-you-need-to-load-the-linux-kernel-first/
categories:
  - Debian-English
---
If you are getting the problem which is written in the title of this post related to a recent upgrade in Debian SID of GRUB2 to version 1.97+20091125-1, then you have to modify your grub.cfg and remove the /boot/ part of the entries referred to the kernel image and initrd in the grub.cfg configuration file.  
For more info: <http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=558042>