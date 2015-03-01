---
layout: book
title: 分支
---

不介绍分支 branch 的概念，下面的操作是没办法介绍了。


### 什么是分支。
默认仓库创建的时候就是一个分支，名字叫 master，但是用户可以自己创建其他的分支的。

![](images/branch/branch_master.png)

其实 master 就只是一个指针，但是 git 怎么通过一个指针就确定一个分支的呢？这个就要说到上图中的 parent 这个概念，因为一个 commit 有它 parent，也就是能找到他的上次 commit，这样只要把 master 指向最新的一个 commit 这个分支就能确定了。另外默认还会创建一个挺看重挺傻的指针叫做 HEAD，它指向 master 本身。稍后咱们一起创建一个新的分支，就知道 HEAD 其实妙不可言。

想象一下历史线上又很多节，每一节就是一次再版，好像一根竹子。 一个分支相当于一跟竹子，一节节的往上长。每个版本就是一节。

![](images/branch/bamboo.jpeg)

### 创建新分支

跟 master 一样，新创建的分支也只是一个指针。比如运行

    cd GUI
    git checkout -b idea_a

就创建了一个名字叫 idea_a 的指针。到 Github for Mac 客户端里看一下，发现确实多了一个分支。


但是怎么解释，这个 idea_a 分支和 master 分支拥有相同的版本历史呢？看看下面的图示就清楚了。



### 分支的原理


- http://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
纯粹讲讲理论，让大家理解 HEAD master idea_x 这几个符号链接的关系，其实也很重要。
不然后面 merge 和 rebase 也没法讲。

- http://happycasts.net/episodes/60
  - 有图解


### 实际操作演示

现在来设计一个网页，开新的分支来开发新的功能：改变背景色和添加 logo，切换分支可以看到页面的变化，merge 分支可以得到所有的功能。但是 merge 放到下一课来讲。

working tree 会随着每次的切换而变化 ~/html_demo


<!-- 录视频的时候可以用 scoot schcon 演讲时候用的那个 html 的例子 -->
### 总结

只开测试分支，调好代码 commit 了之后，如果不把代码搞到 master 分支上是没有太大意义的，这就涉及到分支合并的问题了，这个是 git 最大最强的一块功能，后面再介绍。