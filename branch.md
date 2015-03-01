---
layout: book
title: 分支
---

不介绍分支 branch 的概念，下面的操作是没办法介绍了。

默认仓库创建的时候就是一个分支，名字叫 master，但是用户可以自己创建其他的分支的。


想象一下历史线上又很多节，每一节就是一次再版，好像一根竹子。 一个分支相当于一跟竹子，一节节的往上长。每个版本就是一节。

![](images/branch/bamboo.jpeg)

### 分支的原理


- http://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
纯粹讲讲理论，让大家理解 HEAD master idea_x 这几个符号链接的关系，其实也很重要。
不然后面 merge 和 rebase 也没法讲。

- http://happycasts.net/episodes/60
  - 有图解


### 实际操作演示

现在来设计一个网页，开新的分支来开发新的功能：改变背景色和添加 logo，切换分支可以看到页面的变化，merge 分支可以得到所有的功能。但是 merge 放到下一课来讲。

working tree 会随着每次的切换而变化
<!-- 录视频的时候可以用 scoot schcon 演讲时候用的那个 html 的例子 -->
### 总结

只开测试分支，调好代码 commit 了之后，如果不把代码搞到 master 分支上是没有太大意义的，这就涉及到分支合并的问题了，这个是 git 最大最强的一块功能，后面再介绍。