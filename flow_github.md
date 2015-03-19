---
title: 团队合作流程
---


前几天还都是一个开发者唱独角戏。但是尽管如此也可以看出 git 带来的便利了。但是 git 更大的威力在于协作。

聊了这门多天的 github，有必要稍微停下来，再想想究竟什么是 github 。没错，前面的使用中也看到了，github 是 github 的托管平台，让我们的项目可以方便的备份同步和做版本控制。但是其实也许比这个还要重要的是，github 是一个大家一起协作做项目的平台。

就像 github 的创始人 Chris 在演讲中提到的。

>It's not about git

在 How Github Use Github To Build Github 的演讲中，Zach Holman 说，

>多年来我一直在寻找什么样的方式做软件才是正确的方式，现在我想我找到了，github 就是这种方式。


究竟 Github 是什么的问题从它的标语中也可以看出，早期是“Git Hosting No Longer Pain In The Ass"，可见最早 Github 的目标确实是想成为一个好的代码托管平台。但是现在首页的标语却是

![](images/flow_github/better_together.png)


所以说，Github 最核心的点，是要实现一套软件开发的协作流程。这个流程叫做[github Flow](https://guides.github.com/introduction/flow/index.html) ，而要了解一个流程，没有什么比跑一个最简单的实际例子更好的方式了，官方给出的[Hello World](https://guides.github.com/activities/hello-world/)就是服务于这个目的，不过这个 Hello World 用的是纯粹的网页来实现整个流程。咱们今天用网页配合 Github For Mac 客户端来完成这个流程。

<!-- 
官方的 hello world 就是把 Github Flow 用网页上的工具走了一遍，没什么，解释的很少

后面还会有网页配合命令行来完成同样的流程 -->



<!-- 写到目前，读者还只能感受到 git 带来的麻烦，感受不到 git 带来的便利，所以单兵作战的部分还要给大家梳理一下，用了 git 到底有哪些好处，不然，如果我不是跟团队开发，那么是否就没有必要学 git 了
- 代码回滚，这样就写错了就不怕了
- 开心分支开发，master 上的代码不会被影响，这样就不用 file-v1.md file-peter.md file-billie.md 这些弱智的备份方法了
- check happycasts git workflow for more
 -->


用 git 和他人协作开发项目有多种形式。就像 Progit 书中[列出的]。今天来聊 [github 公司的流程](https://guides.github.com/introduction/flow/index.html)。就是同一个仓库中，大家都有写权限的流程。这个流程显然是自己的团队，自己的项目。


### 什么是 Github Flow ？

创建新的话题分支。

![](images/flow_github/new_branch.png)

不断实现功能，做成一个个新版本。

![](images/flow_github/make_changes.png)

发起 PR 。
![](images/flow_github/open_pr.png)

大家讨论。
![](images/flow_github/discuss.png)

把话题分支的内容合并到 master 。
![](images/flow_github/merge_in.png)


这些图都是我从[官方的 Github Flow 页面](https://guides.github.com/introduction/flow/index.html) 摘下来的，我们还整个的翻译了这个页面，放在了[这里](http://gitbeijing.com/flow) 。流程的细节你可以到这个页面上去看。下面主要跑一个实际例子。从上面的图中也能看出来，PR 在整个流程中起着核心位置。

<!-- http://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project 的例子就挺好 -->

### 给队友添加写权限

用 collaborator 

添加完 collaborator 之后，我的队友也有对这个仓库的写权限了。

### 网页上发 PR

<!-- 先说最正常的流程，然后再告诉大家，如果你只是改一个文件中的一个小地方，完全可以使用  https://github.com/blog/1945-quick-pull-requests

说实话，即使是老手，你让我切换到命令行，再跑一遍整个的这个发 PR 的流程，我也会觉得挺麻烦挺分心的。
-->
Billie 做好了修改之后，就会给我发 PR ，其实发 PR 的目的主要就是为了讨论一下。跟一般的讨论不同的地方在于整个讨论过程是围绕着实打实的代码。



好，上面咱们也看到了什么是 PR 了，其实发 PR 的目的就是引发讨论。 一个 pull request 发出之后，如果大家查看之后认为我的代码还需要调整，这样，我可以继续向同一个 PR 上面 push 代码的，所以在 github 的这个 PR 的页面，就形成一条非常清晰的讨论主线。


每一个 PR 都是开发历史上的一次小事件，很长事件过去之后，再看看当时的 PR 就可以看到当时为什么要开发这个功能，大家都是什么意见，都写了哪些代码。所以是项目发展的珍贵资料。


### 客户端中发 PR

<!-- 注意，不要为了照顾全面而让用户在本文中看到两套操作方式，只细聊一套，走一条线就行了，其他的方式稍微一提就行 -->

尽管网页中发 PR 很方便，但大部分时候可能要修改的内容比较多，所以还是本地用自己喜欢的编辑器来干活比较快，而且很多代码还要测试一下的。所以大部分时候还是会在本地写代码，写完了之后，可以用[客户端来发 PR](https://github.com/blog/1946-create-pull-requests-with-github-for-mac)。

现在在浏览器中，新建删除编辑文件都很方便，而且可以新建 branch 可以说 web 界面对于 Pull Request 的支持已经是很严肃了。
[参考](https://github.com/blog/1557-github-flow-in-the-browser) 。

更多内容可以参考 <http://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project> 。
