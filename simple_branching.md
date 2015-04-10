---
title: 简单分支操作
---

今天的主角是分支，因为不介绍分支（ branch ）的概念，下面的操作是没办法介绍了。可以这样说，Git 最核心的操作对象是版本（ commit ），最核心的操作技巧就是分支。

<!-- https://help.github.com/articles/branching-out/ -->

### 什么是分支？

仓库创建后，一旦有了新 commit，默认就会放到一个分支上，名字叫 master。前面咱们一直看到的多个版本组成的一条历史线，就是 master 分支。但是一个仓库内，用户可以自己创建其他的分支，可以有多条历史线。

说说 master 这个名字，一般中文叫“主分支”，其实从技术底层来讲它跟其他我们自己要创建的分支没有区别，只不过它是天生的默认分支。实际工程项目中会人为的给它一个重要的使命，存放稳定代码。就像 github 公司[倡导](http://scottchacon.com/2011/08/31/github-flow.html)的。

> master 分支上的所有代码都应该是可以部署的

意思就是 master 分支上的代码是随时可以放到产品服务器上跑的代码。这样，如果想开发一个新功能，可以新开分支。 想象一下历史线上有很多节，每个版本就是一节。一个分支相当于一跟竹子，一节节的往上长。

![](images/simple_branching/bamboo.jpeg)

但是实际上在底层并不是每个分支都拷贝出自己独立的一条历史线。其实 master 本身只是一个指针，指向 master 分支上最新的一个版本。这样由于每个 commit 都可以顺藤摸瓜找到自己的前一个 commit，那么这条历史线就可以确定了。

![](images/simple_branching/master_branch.png)

### 创建新分支

什么时候需要开一个新分支，这个后面讲各种工作流程的时候会介绍，今天先把基本操作学会。
到客户端的 `Branches` 这一项

![](images/simple_branching/create.png)

点击1处的加号，就会弹出2处的对话框。`Create a new branch off master` 就是来创建一个分支。在对话框中填入 `idea`，创建了 idea 分支的。所谓 `off master` 意思是“基于 master ”分支，所以此刻 idea 分支并不为空，而是拥有和 master 一样的历史。如下图，箭头所指的小对勾表示“当前分支”（ current branch ）已经自动切换到 idea 分支。

![](images/simple_branching/idea_branch.png)

但是，在底层这个的实现是非常巧妙的，就是又创建一个新的 idea 指针，跟 master 指针指向同一个版本，根本没有拷贝历史线。

![](images/simple_branching/new_branch.png)

如果现在我对项目做一下修改，然后 commit 了。那么移动的只是 idea 指针，master 不变。就成了这样：

![](images/simple_branching/new_branch_commit.png)

现在 master 分支包含两个版本 C1 和 C2，idea 分支包含三个版本 C1，C2，C3 。

默认情况下这个 idea 分支只是存在于本地，如果想在远端仓库上发布这个分支，就点一下 idea 分支右侧的 `Publish` 按钮。

这样，到远端仓库看一下，点击下图1处，发现果然2处多了一个 idea 分支，3处的输入框中，不但能搜索已有分支，还能创建新分支，看到了吧，很多操作在本地客户端和 github.com 上都能进行。

![](images/simple_branching/github_idea_branch.png)

### 切换分支
到 branches 标签下，相中哪个分支了，双击一下就切换过去了。时间长了你会觉得这个也不够快，还是纯键盘操作快。敲 Cmd-B 可以打开分支切换框，输入名字回车，就切换成功了。

如果你在 idea 分支上有了修改但是还没有来得及 commit，这时候如果切换分支，那么 git 会替你保存这部分修改，也就是在切换到的分支上是看不到这部分修改的。但是不要担心，只要你切换回老分支，修改内容又回来了。

注意，每次切换分支，项目代码，术语叫工作树（ Working Tree ）是会随着变化的，在编辑器中看看就知道了。

<!-- https://help.github.com/articles/why-did-my-changes-disappear-when-switching-branches/ -->

### 删除分支

首先当前分支是不能删除的。什么意思？到客户端的 `Branches` 标签下，左侧有对勾的就是当前分支，打开右侧小箭头的下拉菜单，可以看到 `delete` 这一项是禁用的。想删除它，就先要切换到其他分支，例如 `master` 。这样就可以删除 idea 分支了，如果执行本地删除 github.com 上对应分支也会同时被删除。

在客户端把分支切换到 idea，现在试图去删除 master 。点开 master 分支的小箭头，发现 `delete` 一项可以点，所以点一下，但是报错了：“"master" is the repository's default branch and cannot be deleted.` 要到 github.com 上修改默认分支（ default branch 注意跟当前分支是不同的），就像这样。

在远端仓库，也就是 github.com 上如何切换默认分支呢？到 `settings` 下面就更改 `Default branch` 就可以了。

![](images/simple_branching/default_branch.png)

如果只想删除远端分支，保留本地分支，可以在客户端中使用每个分支右侧的 `Unpublish` 这个选项。

![](images/simple_branching/unpublish.png)

### 总结

只开测试分支，调好代码 commit 了之后，如果不把代码搞到 master 分支上是没有太大意义的，这就涉及到分支合并的问题了，这个是 git 最大最强的一块功能，后面介绍。
