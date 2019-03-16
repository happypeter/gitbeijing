---
title: 团队合作流程
---

前几天还都是一个开发者唱独角戏。但是尽管如此也可以看出 git 带来的便利了，比如代码写错了可以回滚，为了新功能开发可以开新分支等等。但是 git 和 github 更大的威力在于协作，所以今天来聊团队协作流程。

聊了这么多天的 github，有必要稍微停下来，再想想究竟什么是 github 。没错，前面的使用中也看到了，github 是 git 仓库的托管平台，让我们的项目仓库可以方便的备份同步。但是其实也许比这个还要重要的是，github 是一个大家一起协作做项目的平台，是一种开发者的工作方式，引导一种看着不像流程的一种真正健康轻便的开发流程。

在 [How Github Use Github To Build Github](https://www.youtube.com/watch?v=qyz3jkOBbQY) 的演讲中，Zach Holman 说，

> 多年来我一直在寻找做软件正确的方式，现在我想我找到了，github 就是这种方式。


Github 多年来总结出来一套自己的团队协作流程，简单而且强大，叫做 [Github Flow](https://guides.github.com/introduction/flow/index.html) ，网站上的各个功能都是围绕着这个流程来开发的。

要了解一个流程，没有什么比跑一个最简单的实际例子更好的方式了，官方给出的[Hello World](https://guides.github.com/activities/hello-world/)就是服务于这个目的，不过这个 Hello World 用的是纯粹的网页来实现整个流程。咱们今天用网页配合 Github For Mac 客户端来完成这个流程。

### 什么是 Github Flow ？

来理解一下什么是 Github Flow 。说白了，就是给一个项目开发新功能要走的几步。整个过程的核心是“拉取请求” 。

第一步，创建新分支，拥有开发这个新功能。如下图所示

![](https://img.haoqicat.com/2019031601.jpg)

第二步，不断实现功能，做成一个个新版本。

![](https://img.haoqicat.com/2019031602.jpg)


第三步，发起”拉取请求“（ Pull Request ），后面简称 PR 吧。

![](https://img.haoqicat.com/2019031603.jpg)


第四步，大家讨论。这是一个代码审核的过程。

![](https://img.haoqicat.com/2019031604.jpg)

第五步，部署代码。

![](https://img.haoqicat.com/2019031604.jpg)

第六步，把分支的内容合并到 master 。

![](https://img.haoqicat.com/2019031606.jpg)

这就是整个 Github Flow 的几个步骤了。

### 给队友添加写权限

接下来跑一个实际的例子。首先一步是给队友添加写权限，注意这里的讨论的是团队共同开发自己公司的项目，对于开源项目，是不必给贡献者添加写权限的，后续小节中会有专门介绍。

现在我和 @billi66 要合作开发一个新项目。于是我就来创建这个项目，过程在[浏览器中使用 Github](github_in_browser)中已经介绍过了。下面就继续在 GUI 这个项目上做演示。

现在我要把 @billi66 添加进来，让她也具有项目的修改权限了。如何来做呢？把她添加成项目的“协作者”（ collaborator ） 就行了。 

首先到项目页面，点击 Settings 一项，可以看到 collaborators 选项，输入框中输入 `bi` 就可以自动补齐出 `billie66` 了

![](https://img.haoqicat.com/2019031607.jpg)

回车选中，然后点 `Add collaborator` 按钮，这样就完成了。

### 开话题分支并在上面开发

现在我和 @billie66 都对项目有写权限，对于非常有把握的代码，可以直接在本地 master 开发然后 Push 到远端 master 分支上面。但是如果是比较重要的功能，还是要发单独开”话题分支“（ Topic Branch ），这个是后面发 PR 的前提。

尽管所有的流程操作都可以在[浏览器中完成](https://github.com/blog/1557-github-flow-in-the-browser)。但是更为常见的情形是我和 @billie 会把代码 clone 到本地开进行新功能的开发，因为这样可以使用自己的编辑器以及测试工具。

现在我要对项目开发一个很大很大的功能，所以就先来开一个分支叫做 `describe-project` 。名字是越清楚越好的，这样队友比较能一眼看出我在干什么。注意开新分支一定要在刚刚更新过的 master 的基础上开。开好之后把这个分支发布到远端，以后这个分支上每次实现一点小功能就 push 到远端，这样的好处是队友可以随时看到我的进展。这部分的操作前面[客户端使用](github_for_mac.html)中都介绍了。

这样我做了两个版本，而且都同步到远端仓库了。所以到 `describe-project` 分支的历史上可以看到多了下面两个新 commit 。然后就可以到项目主页，选中 `describe-project` 分支，来给 master 分支发 Pull Request 了。具体过程之前我们已经介绍过了，这里不再重复。

### 讨论审核代码

这样，master 的维护者就可以就这个 Pull Request 来进行讨论和代码审核了。不一定是一个老大审核小弟们的代码，可以是队友之间的互相审核。

@billie66 看到这个 PR 之后，就会发表她的意见了。如果我看到之后觉得有道理，代码需要调整，那我现在是不是要撤销这 PR 重新发呢？不用。我只需要继续在 `describe-project` 分支上改代码然后再同步上来。

![](https://img.haoqicat.com/2019031608.jpg)

Pull Request 讨论不断继续，会形成一条由评论和代码穿插而成的一条线。最后达成一致，我或者 @billie 其中之一可以点一下上面的大大的 `Merge Pull Request` （ 融合拉取请求 ）的按钮，这样话题分支上的代码就合并到 master 之上了。接下来 `describe-project` 这个话题分支也就可以删掉了。然后关闭这个 PR 了。


==== To be Continued ===

### 快速 PR

走一遍 Github Flow 其实方式并不唯一。前面讨论的，在自己的机器上改代码，用客户端作 commit，然后在网页上发 PR 是一种常见的方式。如果我只是改一个文件中的一个小地方，完全可以使用 github 网页功能提供的[快速 PR](https://github.com/blog/1945-quick-pull-requests)这种方法。来演示一下。

网页界面中，找到我要修改的文件，点击 `edit`

![](https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/github_flow/quick_pr_view.png?raw=true)

然后在下面的界面中，可以直接填写一个 Topic 分支名，创建这个分支，并 commit 到这个分支上发 PR 了

![](https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/github_flow/quick_pr_view.png?raw=true)

说实话要只是一个小改动，即使是老手，你让我切换到编辑器和客户端，再跑一遍整个的这个发 PR 的流程，我也会觉得挺麻烦挺分心的。快速 PR 方法真的是非常方便。

### 总结

其实，每一个打开的 PR 都很类似于后面我们要讲的 Issue （ 事务卡片 )，比如二者都可以用 Markdown 格式来写评论。这些技巧会在 Issue 相关的那一部分来介绍。
