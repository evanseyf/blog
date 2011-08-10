---
layout: post
title: A Note on RVM on Macs
---

I'm just diving into Rails (great tutorials on Ruby <a href="http://pine.fm/LearnToProgram/">here</a>, on Rails <a href="http://www.railsforzombies.org">here</a> and <a href="http://ruby.railstutorial.org/ruby-on-rails-tutorial-book">here</a>) and ran into a very small bump in the road this morning that some Mac users might have. It's an easy problem to troubleshoot, but I thought I would put my Google findings in one place for anyone who is also running into this issue.

Apparently the version of Ruby that ships with Snow Leopard has some trouble compiling and also is a bit older so can't support Rails 3. You can deal with this by installing multiple versions of Ruby on your machine using <a href="https://rvm.beginrescueend.com">Ruby Version Manager</a> (RVM). There are some very straightforward installation instructions on RVM's site, but for Mac users there are a few extra steps you'll need to do to tell your machine where RVM is, and to tell it how to find RVM, and consequently which version of Ruby you choose, each time you open Terminal.

First you'll want to install RVM from Terminal by running

<code>
	bash &lt; &lt;( curl http://rvm.beginrescueend.com/releases/rvm-install-head)
</code>

You'll then have to tell Terminal where to find RVM by running

<code>
	[[ -s "$HOME/.rvm/scripts/rvm" ]] &amp;&amp; . "$HOME/.rvm/scripts/rvm"
</code>

This will tell Terminal where to find RVM for this session you're in, but to tell Terminal to find RVM each time you open a shell, you'll have to add it permanently to your .bash_profile. If, like me, you don't have a .bash_profile (Terminal doesn't create one for you by default), no worries. Just create one by typing

<code>
	touch .bash_profile
</code>

to create the file and edit it using any old text editor or run

<code>
	open -e .bash_profile
</code>

to open it in Text Editor. Add our line

<code>
	[[ -s "$HOME/.rvm/scripts/rvm" ]] &amp;&amp; . "$HOME/.rvm/scripts/rvm"
</code>

to .bash_profile, save it, and now Terminal will know where to find RVM each time you start a new session.

So, now you've downloaded some exciting new versions of Ruby using RVM. Want to use one by default? RVM can do that for you, too. Just run 

<code>
	rvm use 1.9.2 --default
</code>

and now you're humming along on Ruby 1.9.2 (if you have installed it, of course). Check it by running 

<code>
	ruby -v
</code>

Most of this I learned from <a href="http://seanbehan.com/mac-os-x/installing-and-using-rvm-on-mac-os-x-creating-gemsets-and-reverting-to-original-environment/">this post</a>. It has some more helpful info, so check it out if you have any questions.