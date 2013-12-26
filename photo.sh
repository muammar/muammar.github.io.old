#!/bin/bash

if [ -e photo.jpg ];
then
    rm photo.jpg
    wget https://lh5.googleusercontent.com/-FbRprNKQg38/AAAAAAAAAAI/AAAAAAAANYY/4fMlCZYcpr8/s250-c-k/photo.jpg
else
    wget https://lh5.googleusercontent.com/-FbRprNKQg38/AAAAAAAAAAI/AAAAAAAANYY/4fMlCZYcpr8/s250-c-k/photo.jpg
fi
