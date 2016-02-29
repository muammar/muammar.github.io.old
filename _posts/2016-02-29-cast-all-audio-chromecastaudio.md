---
title: Cast audio from Debian to chromecast audio
author: Muammar El Khatib
layout: post
categories:
  - Debian-English
tags:
  - music
  - google
  - chromecast audio
  - debian
  - cast
  - pulseaudio
---

I recently decided to buy a chromecast audio (CCA) to use with my Harman Kardon
Soundsticks III. My main motivation was to avoid plugging the 3.5mm jack to
the phone or the computer when I wanted to switch devices. Bluetooth
connectivity was not an option given their poor quality of sound and short
range of the signal to connect (limited to 10m). There are many different
options in the market being Sonos the most widely spoken and known right now
because of its Hi-Fi Wifi solution. But Sonos is also very expensive
tech. For instance, the starting price of a connected speaker is around $200.
Another limitation going beyond price is the fact that you can only stream
using Sonos' application (as far as I investigated) something I don't find
appealing. As I already had my speakers, I was looking for something to cast
over them using wifi. Sonos also proposes a feature called *Connect* which is
like what CCA does but for a price which is 10 times more expensive!.

I am not rich (not yet, LOL), so after listening to some Sonos speakers in
a shop without getting surprised, I decided to buy the chromecast audio at 39€.

Setup and installation was straightforward. And the natural question was: how
to cast from Linux without using Google Chrome?.

Casting from Linux to CCA
-------------------------
There is a very interesting solution in github proposed by Massimo Mund using
pulseaudio called [pulseaudio-dlna](https://github.com/masmu/pulseaudio-dlna).
I was so amazed on how easy it was to use that [I uploaded it to
Debian](https://packages.debian.org/unstable/pulseaudio-dlna).

To install it, just do:

```
# apt-get install pulseaudio-dlna
```

Then, you have to start the application from console:

```
$ pulseaudio-dlna -e ogg
```

*Note*: I have used the `-e` option to set the audio encoder to ogg (for more
information `man pulseaudio-dlna`).

List of supported encoders
==========================

|---------|------------------------------|------------|
| Encoder |         Description          | Identifier |
|---------|------------------------------|------------|
| lame    | MPEG Audio Layer III         | mp3        |
| oggenc  | Ogg Vorbis                   | ogg        |
| flac    | Free Lossless Audio Codec    | flac       |
| sox     | Waveform Audio File Format   | wav        |
| opusenc | Opus Interactive Audio Codec | opus       |
| faac    | Advanced Audio Coding        | aac        |
| sox     | Linear PCM                   | l16        |
|---------|------------------------------|------------|

*Note*: the [faac dependency was
dropped](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=816224) to comply
with Debian policy.

When `pulseaudio-dlna` is launched, the output looks as follows:

<img class="aligncenter size-large wp-image-1021" src="http://muammar.me/blog/wp-content/uploads/2016/02/CCA1.png" alt="First launch" width="70%" height="70%" />

[Full size image](http://muammar.me/blog/wp-content/uploads/2016/02/CCA1.png)

If the device is detected correctly, then one has to execute `pavucontrol` and
look for the new created Pulseaudio sink that matches the name of the device as
seen in the figure below.

<img class="aligncenter size-large wp-image-1021" src="http://muammar.me/blog/wp-content/uploads/2016/02/CCA2.png" alt="Device detected" width="70%" height="70%" />

[Full size image](http://muammar.me/blog/wp-content/uploads/2016/02/CCA2.png)

It is important to note that `pulseaudio-dlna` has to be running in order to
cast to your devices. You can verify if your device has been tested in this
[list of tested
devices](https://github.com/masmu/pulseaudio-dlna#tested-devices).  Now, you
are good to go!.
