---
title: Installing Adobe Air in Debian AMD 64 (TweetDeck can be used)
author: muammar
layout: post
permalink: /blog/2009/12/installing-adobe-air-in-debian-amd-64-tweetdeck-can-be-used/
categories:
  - Debian-English
---
I love twitting using TweetDeck. So that, I started to investigate how to install Adobe Air in Debian AMD64 and, it was a real pain in the ass. I have found a way of installing it in Debian AMD64.  
First of all, you need to install the following packages:

> $ sudo apt-get install ia32-libs lib32nss-mdns lib32asound2 lib32gcc1 lib32ncurses5 lib32stdc++6 lib32z1 libc6 libc6-i386 lib32nss-mdns libcanberra-gtk-module

After installing them, we have to create some symlinks from the location of some of those libraries in /emul/ia32-linux/usr/lib/ to /usr/lib32/. For accomplishing it, do the next:

> $ cd /usr/lib32/  
> $sudo ln -s /emul/ia32-linux/usr/lib/libnss3.so .  
> $sudo ln -s /emul/ia32-linux/usr/lib/libssl3.so .  
> $sudo ln -s /emul/ia32-linux/usr/lib/libsmime3.so .  
> $sudo ln -s /emul/ia32-linux/usr/lib/libnspr4.so .  
> $sudo ln -s /emul/ia32-linux/usr/lib/libnssutil3.so.1d .  
> $sudo ln -s /emul/ia32-linux/usr/lib/libplc4.so.0d .  
> $sudo ln -s /emul/ia32-linux/usr/lib/libplds4.so . 

In the case that you have problems with libplds4.so.0d, create the symlink like this:

> $sudo ln -s /emul/ia32-linux/usr/lib/libplds4.so.0d libplds4.so.0d

Now, it is time to download Adobe AIR (in this case version 1.5).

> $wget http://airdownload.adobe.com/air/lin/download/latest/AdobeAIRInstaller.bin

Once it is downloaded, we have to make the .bin file an executable:

> $ sudo chmod +x AdobeAIRInstaller.bin

Then, we can proceed to install it:

> $ sudo ./AdobeAIRInstaller.bin

If you get an error like this:

> Error loading the runtime (libnss3.so: wrong ELF class: ELFCLASS64)

It means that you haven&#8217;t done the symlink from /emul/ia32-linux/usr/lib/libnss3.so to /usr/lib32/ correctly or that you haven&#8217;t installed the library which is missed (&#8216;apt-file search&#8217; is your friend).  
If everything goes fine, then the last steps are:

> sudo cp /usr/lib/libadobecertstore.so /usr/lib32

Note: make a symlink if you prefer.  
And for TweetDeck I had to do this:  
Download libgnome-keyring0 for 32 bits (in this example I used the one from SID, if you are using testing, download the one from that release that you are using), extract it with dpkg and copy the libraries to /usr/lib32:

> $ wget http://ftp.us.debian.org/debian/pool/main/g/gnome-keyring/libgnome-keyring0\_2.28.2-1\_i386.deb  
> $ sudo dpkg-deb -x libgnome-keyring0\_2.28.2-1\_i386.deb libgnome-keyring0_2.28.2-1  
> $ sudo cp libgnome-keyring0_2.28.2-1/usr/lib/* /usr/lib32/

Then install TweetDeck (http://tweetdeck.com/download/) and Enjoy <img src="http://muammar.me/blog/wp-includes/images/smilies/simple-smile.png" alt=":)" class="wp-smiley" style="height: 1em; max-height: 1em;" />  
Note: If you find any problem, please do not hesitate to write a comment so that I can help you or we can improve this post.