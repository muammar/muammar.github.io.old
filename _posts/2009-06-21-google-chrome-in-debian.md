---
title: Google Chrome in Debian
author: muammar
layout: post
permalink: /blog/2009/06/google-chrome-in-debian/
categories:
  - Debian-English
---
There are some deb packages at:  
<http://dev.chromium.org/getting-involved/dev-channel>  
<!-- s9ymdb:39 -->

<img class="serendipity_image_left" width="880" height="600" style="float:center; border: 0px; padding-left: 5px; padding-right: 5px;" src="/blog/uploads/pics/google-chrome.png" alt="" />  
The problem I am facing is related to the accents (for Spanish) and with apostrophes (for English). I have to add, that I am running amd64 and when you install Google Chrome it depends on these packages: ia32-libs-gtk lib32asound2 lib32gcc1 lib32nss-mdns lib32stdc++6 lib32z1 so it is not a 64 bit native version at all. Well, it is not a secret that they do not support 64 that much. Maybe this is not a news, but I had not stumbled into those deb packages until some minutes ago.