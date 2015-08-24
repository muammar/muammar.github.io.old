---
title: Flash player in Google Chrome for Linux
author: muammar
layout: post
permalink: /blog/2009/07/flash-player-in-google-chrome-for-linux/
categories:
  - Debian-English
---
I have downloaded today last version of Google chrome for 32 bits , in the machine I use at work, via APT using the http://dl.google.com/linux/deb/ repository. In the about:linux-splash there said:  
*Plugins (e.g. Flash) are partway implemented and will cause frequent crashes. Use&nbsp;&nbsp;to turn them on if you&#8217;re ok with that; the browser is otherwise quite stable.*  
I created a directory called plugins/ into /opt/google/chrome/ then I made a symlink to libflashplayer.so:

> \# ln -s ~/.mozilla/plugins/libflashplayer.so . 

After doing that, I launched it:

> $ google-chrome &#8211;enable-plugins

<!-- s9ymdb:43 -->

<img class="serendipity_image_left" width="658" height="411" style="float: center; border: 0px; padding-left: 5px; padding-right: 5px;" src="/blog/uploads/bjorkyoutube.png" alt="" />  
Nice&#8230;