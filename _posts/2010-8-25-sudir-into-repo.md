---
layout: post
---

originally posted at
[help.github.com](http://help.github.com/splitting-a-subpath-to-a-new-repo/)

basiclly it is just one command:

    git filter-branch --prune-empty --subdirectory-filter sudir master

_Q:_if there is a file outside `sudir`, now you move it into `sudir`. will all its historybe kept?

_A:_NO, as my test shows, all the commits out of `sudir` are lost. if you want all the commits, try to use

    git log --follow -p filename

but if you issue:

    git log --follow -p sudir/

you will still lose all the commits of the file when it was out of sudir
