---
title: Cast mac os x audio to your google cast devices with mkchromecast
date:  2016-04-20 02:00:00
author: Muammar El Khatib
layout: post
categories:
  - Mac
tags:
  - music
  - google
  - chromecast audio
  - mac os x
  - cast
  - python
  - ffmpeg
---

In a previous post I wrote about the [google cast audio, and how to cast audio
from Linux](http://muammar.me/blog/2016/02/29/cast-all-audio-chromecastaudio/).
Now, I would like to write how to cast your audio from Mac OS X.

Casting from Mac OS X to a Google cast device
---------------------------------------------
As I didn't find any satisfactory solution for this, I decided to write
[mkchromecast](https://github.com/muammar/mkchromecast). This is an application
written in Python, that uses two backends to stream audio to your google cast
devices: `node` or `python flask + ffmpeg`. Moreover, you can modify the
`bitrates`, `sample rates` and `audio coding formats` (the latter one is
available provided that you use `ffmpeg`). To communicate to the google cast
devices it uses `pychromecast`.

To install it, just clone from github:

```
git clone https://github.com/muammar/mkchromecast.git
```

Then, you have to install the dependencies:

```
pip install -r requirements.txt
```

You will also need
[soundflower](https://github.com/muammar/mkchromecast/blob/master/README.md#soundflower).
These are the minimal requirements to stream to your google cast using the
`node` backend (mp3 audio format by default). If you would like to use `ffmpeg`
check the [instructions
here](https://github.com/muammar/mkchromecast#installing-and-updating).

I am also working in providing a system tray menu, which in fact works decently
right now. I have written it using the `Qt5` python bindings.

List of supported encoders
==========================

When using `ffmpeg`, the following audio coding formats are available:

**Audio coding format** | **Description**                   | **Notes**
------------------------| ----------------------------------|------------------
  `mp3`                 | MPEG Audio Layer III (default)    | Lossy compression format (default bitrate: 192k)
  `ogg`                 | Ogg Vorbis                        | Lossy compression format (default bitrate: 192k)
  `aac`                 | Advanced Audio Coding (AAC)       | Lossy compression format (default bitrate: 192k)
  `wav`                 | Waveform Audio File Format        | Lossless format (HQ sound)
  `flac`                | Free Lossless Audio Codec         | Lossless format (HQ sound)


To use **mkchromecast** it is very easy. Just get into the cloned directory and
execute the program as follows:

```
python mkchromecast.py
```

**Note**: you can use **mkchromecast** with Python3 if you want to.

Using `aac` with a selected `bitrate` of `256k`:

```
python mkchromecast.py --encoder-backend ffmpeg -c aac -b 256
```

Using `flac` with the system tray:

```
python mkchromecast.py --encoder-backend ffmpeg -c flac -t
```

For more help:

```
python mkchromecast.py -h
```

Complete instructions and information can be found at:
[https://github.com/muammar/mkchromecast](https://github.com/muammar/mkchromecast).
