---
layout: post
title: Spotify And Local Files
author: Muammar El Khatib
date: 2019-03-08 15:38 -0800
categories:
  - Linux
  - Debian-English
tags:
  - Spotify
---

My favorite music player is undoubtedly Spotify. It is not a secret that its
Linux support might not be the best and that some artists have just decided not
to upload the music in the service. One of them is Tool, one of my favorite
bands, too. I recently decided to play my Tool mp3 files with Spotify as local
files and they were not playing. In order to fix that one has to:

1. Add `deb http://ftp.us.debian.org/debian jessie main ` to
   `/etc/apt/sources.list`.
2. Install the following packages:

```
sudo apt install libavcodec-extra-56 libavformat56
```

Problem solved. This is working for me with Debian unstable in 2019.
