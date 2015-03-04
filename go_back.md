---
layout: book
title: 回到过去
---


既然在 git 仓库中已经记录了各个时间点的版本，那么必然是可以像时光机器一样来回到过去的，这次来看看如果操作，更重要的是说说什么情况下需要执行这些操作。

### throw/throwh

实际的情形往往是这样，为了实现一个功能，我来到项目中，改动了三个文件的五个地方，但是测试之后觉得这个想法不靠谱，想要会到刚才的干净的状态，怎么弄？
手动改回去肯定是又慢又容易改错，那如果我这个项目用 git 控制了，而且刚才那个干净的状态也做成了 commit 那就很容易操作了。

运行

{% highlight console %}
git diff
{% endhighlight %}

可以看到所有的修改内容。如果想要把单个文件还原，可以用

{% highlight console %}
git checkout filename
{% endhighlight %}

那如何把所有改动都回滚呢？reset 命令登场。

{% highlight console %}
$ git reset --hard HEAD
{% endhighlight %}

`HEAD` 表示最新的那个版本，也就是干净的状态。`reset` 的意思是重置，所以这个命令达成的效果是可以知道了。 但是为什么要加 `--hard` 参数呢？是因为 reset 只负责重置 commit，但是修改内容默认不删除，所以要 `--hard`。更多信息可以 `man git-reset` 看一下。

就可以把项目退回到上一个版本的状态，也就是扔掉了所有的修改。但是对于没有跟踪的文件和文件夹，要 

{% highlight console %}
$ git clean -f
{% endhighlight %}

才可以清除。如果有未被跟踪的文件夹，要用

{% highlight console %}
$ git clean -d
{% endhighlight %}

<!-- http://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning#_git_stashing -->


但是如果我自己刚刚做的一个愚蠢的 patch，但是同时有 commit 了呢？这个也简单

{% highlight console %}
$ git reset --hard HEAD^
{% endhighlight %}

就是把当前代码重置到 `HEAD` 之前的一个版本的状态。

<!-- http://happycasts.net/episodes/59 08:30 有图解 -->

在我的 .gitconfig 文件中又这样的别名设置

{% highlight ini %}
[alias]
  throw = reset --hard HEAD
  throwh = reset --hard HEAD^
{% endhighlight %}

throwh 就是砍去一节竹子。当然砍去的肯定没用的 patch 。`h` 代表 HEAD，throwh 就是把最新版本给扔了的意思。

如果我在 master 分支上做了一些修改，没用 commit，但是忽然不想要了，那就运行

{% highlight console %}
$ git throw
{% endhighlight %}


![](images/go_back/cut_history.png)


throwh 操作对于未公开的仓库是非常好用的，但是一旦一个有问题的 commit 已经发布到了 github 之上了，大家都已经看到了并且有可能已经 pull 到了自己的本地仓库中，这样如果还是直接 throwh 了，将会给大家的后续操作带来很多麻烦。但是如果我就是脑子犯晕，把一些错误的修改直接 commit 并 push 到 github 之上了，这时候应该怎么办呢？解决方法是

{% highlight console %}
$ git revert HEAD
{% endhighlight %}

用一个新的 commit 把前面那个错误的 commit 中的内容给覆盖掉。另外，也不一定非得是最新的 commit，任何一个都可以

{% highlight console %}
$ git revert (commit_id)
{% endhighlight %}

### 回到过去再回来

其实是这样，既然 git 仓库中记录了那么多的 commit ，那么理论上只要拿到了 commit_id 就可以回到那个版本。实际上这个操作也很简单

{% highlight console %}
$ git checkout (commit_id)
{% endhighlight %}

这样项目状态就到了那个版本。要回到当前状态，只需要

{% highlight console %}
$ git checkout  master
{% endhighlight %}




