---
layout: book
title: rebase
---


### 什么是变基

git 的变基（ rebase ）操作是非常有用的。首先来用图解的形式说说它和 merge 的区别。

- github for mac 的 sync 按钮相当于 git pull --rebase
  - git push --force 有什么后果

  progit: If you are using git pull and want to make --rebase the default, you can set the pull.rebase config value with something like git config --global pull.rebase true.

  - 直接 git pull 下来是不是就是一个 merge commit 了？这样之后再 push 的时候应该就会失败了，可能要 --force 了

### 获取最近更新

最好的方式是 git pull --rebase


### 合并多个 commit 

参考 [这个视频](http://happycasts.net/episodes/92) 。

git rebase -i HEAD~~~

rebase
To reapply a series of changes from a branch to a different base, and reset the head of that branch to the result.

https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html


>It works by going to the common ancestor of the two branches (the one you’re on and the one you’re rebasing onto), getting the diff introduced by each commit of the branch you’re on, saving those diffs to temporary files, resetting the current branch to the same commit as the branch you are rebasing onto, and finally applying each change in turn.

progit
