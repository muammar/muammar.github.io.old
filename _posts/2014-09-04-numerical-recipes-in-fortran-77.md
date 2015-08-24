---
title: Numerical Recipes in Fortran 77
author: Muammar El Khatib
layout: post
permalink: /blog/2014/09/numerical-recipes-in-fortran-77/
categories:
  - Ciencias
tags:
  - book
  - create
  - fortran
  - numerical
  - recipes
  - science
---
So, I have read parts of this book called Numerical Recipes in Fortran 77, and it is very good. There is an on-line version at <a href="http://www.haoli.org/nr/bookfpdf.html" target="_blank">http://www.haoli.org/nr/bookfpdf.html</a>. If I am not blind (I hope not), there is no unique pdf to download, so you have to click on each pdf to read what you want. I have created a **VERY VERY VERY** simple BASH script  (did I say it is a simple script?) that download all the pdf files with wget, and then using ghostscript creates an unique PDF. This may be trivial (it is indeed) for some people, and not that trivial for others.

You just have to execute:

`$ sh takeit.sh`  
Once the process is finished (I suggest you to take a coffee, because it takes time to build the pdf), a file called NumericalRecipes.pdf of about 13MB is created.

You can download the script below:

**md5sum:** dbdb0790571974809479c65ae438671f

**File:** [numericalrecipes-1.0][1]

Enjoy.

 [1]: http://muammar.me/blog/wp-content/uploads/2014/09/numericalrecipes-1.0.zip