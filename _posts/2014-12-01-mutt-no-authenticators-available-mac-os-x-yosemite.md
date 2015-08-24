---
title: 'Mutt &#8220;No Authenticators Available&#8221; Mac OS X Yosemite'
author: Muammar El Khatib
layout: post
permalink: /blog/2014/12/mutt-no-authenticators-available-mac-os-x-yosemite/
categories:
  - Mac
  - Off topic
tags:
  - authenticators
  - configuration
  - mac
  - mutt
  - os
  - smtp
  - x
  - yosemite
---
So you have installed Mutt in Mac OS X Yosemite, because you know  &#8220;[*All mail clients suck*. This one just sucks less][1]&#8220;. You use GMail, because you like it, and you configured it with Mutt (of course). You have just finished to compose your mail, and when you hit &#8216;*y&#8217; *to send it, you get the following message:

> &#8220;No Authenticators Available&#8221;

What the f&#8230;.????

Add the following to your .muttrc:

>     set <a href="http://www.mutt.org/doc/devel/manual.html#smtp-authenticators">smtp_authenticators</a> = 'gssapi:login'
>     

Then, you are good to go.

&nbsp;

Source: <https://github.com/Homebrew/homebrew/issues/33419>

 [1]: http://www.mutt.org/