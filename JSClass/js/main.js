/*
 * Name: Noah Broyles
 * Email: broylend@mail.uc.edu
 * Assignment: Midterm
 * Due Date: 10/18/2020
 * Description: This script controls a picture slideshow
 * References: https://stackoverflow.com/a/5638827/12442137
 */


'use strict';

// easy id function
function id(e){return document.getElementById(e)}


// Slideshow class
class Slideshow {
    position;
    imgURLs;

    constructor(urls) {
        this.imgURLs = urls;
        this.position = -1;
    }

    nextImgURL() {
        this.position += 1;
        return this.imgURLs[this.index()];
    }

    prevImgURL() {
        this.position -= 1;
        return this.imgURLs[this.index()];
    }

    index() {
        if (this.position > this.imgURLs.length) {
            while (this.position > this.imgURLs.length) {
                this.position -= this.imgURLs.length;
            }
        }
        if (this.position < 0) {
            // The index is negative
            while(this.position < 0) {
                this.position += this.imgURLs.length;
            }
        }
        if (this.imgURLs.length == this.position) {
            this.position = 0;
        }
        return this.position;
    }

}



let show = new Slideshow(['images/1.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/10.png', 'images/11.png', 'images/se.png', 'images/12.png']);
let picture = id('current-img');
let interval = false;

// auto slidshow function
function autoSlideshow() {
    if (interval) {
        id('auto').innerHTML = "Start Slideshow";
        clearInterval(interval);
        interval = false;
    } else {
        interval = setInterval(nextImg, 1000);
        id('auto').innerHTML = "Stop Slideshow";
    }
}

// forward and backward slidshow options
function nextImg() {
    picture.src = show.nextImgURL();
}
function prevImg() {
    picture.src = show.prevImgURL();
}

// reset the slideshow
function reset() {
    show.position = -1;
    picture.src = show.nextImgURL();
    clearInterval(interval);
    interval = false;
    id('auto').innerHTML = "Auto Slideshow";
}


// function to be run on page load
function init() {
    picture.src = show.nextImgURL();
    id('disWay').onclick = prevImg;
    id('datWay').onclick = nextImg;
    id('reset').onclick = reset;
    id('auto').onclick = autoSlideshow;
}

window.onload = init;

