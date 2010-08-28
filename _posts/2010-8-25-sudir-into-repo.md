---
layout: post
---

originally posted at
[help.github.com](http://help.github.com/splitting-a-subpath-to-a-new-repo/)

basiclly it is just one command:

    git filter-branch --prune-empty --subdirectory-filter sudir master

if there is a file outside `sudir`, now you move it into `sudir`. with all its historybe kept?
NO, as my test shows, all the commits out of `sudir` is lost. if you want all the commits, try to use

    git log --follow -p filename

but if you issue:

    git log --follow -p sudir/

you will still lose all the commits of the file when it was out of sudir
