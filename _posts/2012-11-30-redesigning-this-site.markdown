---
layout: post
title: Redesigning this site
---

My website was in sore need of an overhaul. I hadn't really looked at it seriously in more than a year, and I won't go into all the embarassing problems. But suffice it to list: the site was not responsive (still on the 960px grid system of yore), it had an unmanageably long front page displaying every post, I hadn't fixed a broken implementation of Twitter's API, and the site, overall, was set up like any out-of-the-box blog + static pages concoction.

![Ew](/img/posts/old-site-homepage.png)
<small class="caption">This is what it looked like</small>

![Double ew](/img/posts/old-site-unresponsive.png)
<small class="caption">This is what it looked like on a smaller screen</small>

![Triple ew](/img/posts/old-site-resume.png)
<small class="caption">And this is what my resume page, on the same site, looked like. Completely different!</small>

Firstly, I wanted to learn about my site's few visitors. A glance at my analytics dashboard revealed that the vast majority of visitors were new, and most spent a few seconds on the home (blog) page before going to /about or /resume. So I could pretty safely conclude what I suspected all along: that most people who came to my site were looking for more information about me and not coming regularly to read my fascinating, and very occasional, blog posts. Clearly, my resume and other professional information needed to be front and center. But more than this, the content of my website should all be roughly focused around things I've done for work or for school. My blog really does not have a following (sorry, mom).

I only had one real idea when it came to re-designing my site: my content is and will be mostly text, not images, so typography would be important. There was a problem: I know nothing about type. So I decided to just pick one that I liked and take it from there.

[![Adobe's Source Sans Pro](http://blogs.adobe.com/typblography/files/2012/07/SourceSplash.png)](https://github.com/adobe/Source-Sans-Pro)

[Adobe's Source Sans Pro](https://github.com/adobe/Source-Sans-Pro) is a pretty simple sans-serif font that also has some nice character spacing, so it works well both in short labels (i.e. on buttons or nav links) and longer blocks of text. This made figuring out the typography for my site _much_ simpler. I could use one font to do it all.

Having found the central element of my re-design, I now was ready to start laying things out. After two months with the frontend team at OFA, I had a healthy fear-of-god kind of appreciation for responsive, mobile-first design. But I was still in the clutch of old habits and had difficulty conceptualizing a design that was fluid across screen sizes. At best I could think of three different views: mobile, tablet, and desktop. But that is an onerous way to think of making a website. It's actually thinking of making three. 

So I stepped back. At this point the only thing my website had was its __content__. That is, all I wanted it to do was present information, all of which could be presented in text or images. So I decided to put all of my "content" into an HTML document to see what I had, how it actually looked in a browser, and decide how it should look. In other words, I would give [designing in-browser](http://www.alistapart.com/articles/responsive-comping-obtaining-signoff-with-mockups/) a shot. Well the going was slow. I stared at a prototype of a layout for about a week, not really understanding what was wrong with it or what needed to be changed. I even opened Photoshop in a few moments of desperation thinking that making some mockups would help me move forward. Thankfully, I was too lazy to make any real headway.

Eventually I had a breakthrough. I removed the grid that I had initially put my content into in the prototype and just looked at how the unstyled page flowed. It suddenly made a lot more sense. Naturally, I had written my "content" in the order it was meant to be presented. What I wanted the reader to see first I put first, and followed that also, in the logic of the presentation, followed that. So messing up this sequence with sidebars and other stuff just wasn't a good idea. Then it became incredibly simple to find colors and accent links and buttons.

So the two small lessons I learned this time around: __design in broswer__ and __design around content__.