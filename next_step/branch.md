---
title: 进阶内容
---


<!-- https://help.github.com/articles/why-did-my-changes-disappear-when-switching-branches/ -->

https://help.github.com/articles/branching-out/

https://help.github.com/articles/merging-branches/

### 什么是分支？

![](images/branch/branch_master.png)

说说 master 这个名字，一般中文叫主分支

其实 master 就只是一个指针，但是 git 怎么通过一个指针就确定一个分支的呢？这个就要说到上图中的 parent 这个概念，因为一个 commit 有它 parent，也就是能找到他的上次 commit，这样只要把 master 指向最新的一个 commit 这个分支就能确定了。另外默认还会创建一个挺看重挺傻的指针叫做 HEAD，它指向 master 本身。稍后咱们一起创建一个新的分支，就知道 HEAD 其实妙不可言。


所以，虽然本质上每次新创建一个 git 的分支，其实就是创建了一个新的包含分支名字的指针。但是从用户的角度来看，每一个分支就相当于一根独立的竹子了。非常巧妙。而在很多传统版本控制工具那里，每次你开一个新分支，就会真的把当前整个项目拷贝一份出来，会很慢。

### 创建新分支

比如我在 master 分支上正在干活，但是忽然有个新想法要试一下，这个时候我就可以开一个新分支了，新分支上做任何修改都不会影响到 master 分支。

跟 master 一样，新创建的分支也只是一个指针。比如运行

{% highlight console %}
$ cd GUI
$ git checkout -b idea
{% endhighlight %}

就创建了一个名字叫 idea 的指针。
这时候如果运行

{% highlight console %}
$ git branch
{% endhighlight %}

就会看到当前分支已经是 idea 了。因为 idea 和 master 都指向相同的地方，所以此刻，这两个分支是相同的。


![](images/branch/new_branch.png)

有意思的是，如果新建分支上面继续做开发，新添加一个 commit，就是下面这样的情况

![](images/branch/new_branch_commit.png)

注意这个时候 master 分支是没有动的。要想切换回 master 分支

{% highlight console %}
$ git checkout master
{% endhighlight %}

这样，HEAD 指针就又指向了 master 。

![](images/branch/head.png)

HEAD 永远指向当前分支的最新的版本。
stash 的报错情况很不好描述，用到得又不是挺多，所以偷懒不讲了

如果 idea 的代码我想要引入 master，那就涉及到合并分支了，后面会作详细介绍。否则，删除分支就要

{% highlight console %}
$ git branch -D idea
{% endhighlight %}

注意，被删除的分支不能是当前分支。

### 切换分支

如果你在 idea 分支上有了修改但是还没有来得及 commit，这时候如果切换分支，那么 git 会替你保存这部分修改，也就是在切换到的分支上是看不到这部分修改的。但是不要担心，只要你切换会老分支，修改又回来了。

<!-- https://help.github.com/articles/why-did-my-changes-disappear-when-switching-branches/ -->


### 删除分支

Github For Mac 客户端中的行为是这样，你想删除一个分支，那么这个分支如果已经 `Publish` 了，也就是已经存在于 github.com 上了，那么远端分支也一样会被删除。但是如果远端分支恰好是默认分支，那么删除就会失败。

### 实际操作演示
<!-- 这部分应该跟前面的图示融入到一起，不然自己出现太干瘪了 -->

前面把道理都说了，下面动手来做一下。新建一个仓库

    mkdir cool
    cd cool
    git init

然后创建一个文件叫 index.html 里面写一行内容：

    AAA

保存这个文件，然后做出 master 上的第一个版本

    git ci

然后输入版本留言 "first commit" 。接下来切换到一个 idea 分支上开展一个新想法

    git checkoout -b idea

把 index.html 中的内容改为

    AAA
    BBB

再来运行 `git ci` 版本留言为 "new idea"，这样就可以切换到 master 上来 merge 这个新想法的代码了。

<!-- 录视频的时候可以用 scoot schcon 演讲时候用的那个 html 的例子 -->

### Stashing and Cleaning

如果在 idea 上的修改没有 commit，这时候想切换回 master

{% highlight console %}
$ git checkout master
{% endhighlight %}

就会 ...

### 总结

只开测试分支，调好代码 commit 了之后，如果不把代码搞到 master 分支上是没有太大意义的，这就涉及到分支合并的问题了，这个是 git 最大最强的一块功能，后面再介绍。关于 branch 分支原理的深度解剖，可以参考 [Pro Git 的对应章节](http://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) 。
