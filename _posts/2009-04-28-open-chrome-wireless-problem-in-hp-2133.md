---
title: Open Chrome = Wireless problem in HP 2133?
author: muammar
layout: post
permalink: /blog/2009/04/open-chrome-wireless-problem-in-hp-2133/
categories:
  - Debian-English
---
I had almost two weeks without Wireless connection in my HP 2133. Due of the fact of being busy doing other stuff, it was today until I had time to try something. So, I proceeded to google it and I found a bug in Launchpad about it. There was said that the problem was caused by Open Chrome driver. I have to accept that when I read it I was kind of skeptic. I thought: What has to do a Video Driver with a Wi Fi microcode not responding? (real translation: WTF is this?)  
So, I open a terminal. I went to /etc/X11/xorg.conf and I change the only line in xorg.conf (new version of XORG was able to recognize the Video Card and it was working right without using the bunch of options and sections as you can see in <http://wiki.debian.org/InstallingDebianOn/HP/HP2133> , except the fact that Wi Fi stopped working) to this:

> Section &#8220;Device&#8221;  
> Identifier &#8220;VESA&#8221;  
> Driver &#8220;vesa&#8221;  
> BusID &#8220;PCI:1:0:0&#8221;  
> Screen 0  
> Option &#8220;ActiveDevice&#8221; &#8220;LCD,CRT&#8221;  
> Option &#8220;ForceLCD&#8221;  
> Option &#8220;SWCursor&#8221; &#8220;True&#8221;  
> EndSection

I restarted the machine, because I had fucked off Wicd trying to get connected to the Wireless Router and there wasn&#8217;t any way to get it work again, and when I entered my XFCE4 session and tried the Wireless it just worked again&#8230; shit.. I can&#8217;t understand. That was weird. So for the record. If you are getting this problem to get connected with your HP 2133 using either Debian or Ubuntu, given that you got it working before, so change the driver in the Device section from Open Chrome to VESA and you should get the problem solved. I tested it in Debian Unstable.