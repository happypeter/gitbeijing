---
layout: book
title: 分支
---

不介绍分支 branch 的概念，下面的操作是没办法介绍了。

默认仓库创建的时候就是一个分支，名字叫 master，但是用户可以自己创建其他的分支的。


想象一下历史线上又很多节，每一节就是一次再版，好像一根竹子。 一个分支相当于一跟竹子，一节节的往上长。每个版本就是一节。


![](images/branch/bamboo.jpeg)


- http://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
纯粹讲讲理论，让大家理解 HEAD master idea_x 这几个符号链接的关系，其实也很重要。
不然后面 merge 和 rebase 也没法讲。

- 想想本地操作用到分支的一些情形
  - 比如我现在项目已经有了5个版本，我现在想再第二个版本上继续调试我自己的想法

   git checkout -b tmp
   git throwh # 3.times
   edit ...
   test ...
   git commit  # x.times
   git checkout master
   git br -D tmp

- 只开测试分支，调好代码 commit 了之后，如果不把代码搞到 master 分支上是没有太大意义的，这就涉及到分支合并的问题了，这个是 git 最大最强的一块功能，后面再介绍。