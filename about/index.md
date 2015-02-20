---
layout: page
title: About
---

<!-- # About -->
This is my home website. It contains information about my work and the things I find interesting. These are various, but I talk mostly about these things:

* Research in open source and social informatics (software studies, information systems, media)
* The web
* The occasional dash of programming I can manage

## Who I Am
I am a PhD candidate at the LSE, researching requirements in open source software. I particularly like the multi-disciplinarian approach to study technology that the LSE allows for. In some ways, I'm looking at the dark side of software: the complicated, unclear aspects, and the social consequences of technology use. 

You can find out more in the [research](/research) section. 

## How This Web is Built
This website uses a number of technologies, and was inspired in its looks and construction by adapting the work of a number of people. 

### Base
For the general possibility of holding a static blog, I have to thank the people behind the [Jekyll](http://www.jekyllrb.com) framework. Jekyll parses files and generates a static structure. The Jekyll server just relates the various in real time. There is no dynamic computation, which is much simpler than dynamic java scripting languages. 

The basic look and feel (and the really fast implementation) is adapted from Barry Clarks' [Jekyll Now](http://www.jekyllnow.com). 

### Typography
I have been giving this a lot of thought. Originally, I went for Fira---a _sans serif_ font commissioned by Mozilla for its OS---but I found it too bold and striking. I then went for its lighter version which I found too light. The light version did not work well, especially with the titles; there was not enough difference between the weight of the title and the text. It left too much blank between the letters and did not stand out as much as I wanted them too. 

I finally settled for the _Spartan_ font from the [League of Moveable Type](https://www.theleagueofmoveabletype.com/league-spartan), and _Andada_ from [Huerta Tipografica](http://www.huertatipografica.com/). _Spartan_ gives big, bold letters, while _Andada_ manages to be a classic _serif_ while providing more modern, rounder shapes. Because this site is intended for very low amounts of traffic, I opted for open licenses (both fonts are under the [SIL Open Font License](https://duckduckgo.com/l/?kh=-1&uddg=http%3A%2F%2Fscripts.sil.org%2FOFL)).

### Commenting (Turned Off At The Moment)
The commenting system is the work of Phil Hawkworth and Alberto Aguilera, who created the [Poole app](http://pooleapp.com). 

### Plugins
The ability to use plugins is possible thanks to [ixti's](http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html) work. I had thought of creating another branch with the source, but did not know enough of Git to write a small Rake task. I translated he rake task into a gulp file, because that is what the commenting system use. Other options, such as [Charlie Park's](http://charliepark.org/jekyll-with-plugins/), were to create two separate repos and emulate the functionality of the GitHub pages. 

I am in the process of adding other plugins which allow me to curate a bibliography on the blog directly. [Jekyll-Scholar](https://github.com/inukshuk/jekyll-scholar), by Sylvester Keil, takes care of the details of referencing and citing. 

### No Analytics
I have not implemented any web analytics, so absolutely nothing about you is recorded by me. GitHub will probably be analysing some small aspect of your traffic, but as far as I know, they do not use any cookies. 

It is interesting, though, to record some traffic details: the number of visits, the posts most read, etc.; this can help learn what and how to better present information. I might, at one point, implement a really basic analytics, but nothing cloud, and nothing either invasive or purely psychopathic: things like operating system used, browser, what gets clicked on, etc. I do not care about IPs or anything personal (and don't understand why people would...). 