---
layout: book
title: Github Without Git
---

<!-- 本课介绍在网页上使用 github 来进行项目的版本控制。幻灯片中要展示清楚版本控制这个概念：什么是项目仓库 repo，版本 commit，什么是 patch，对应的这些概念在 github 网页上当然也能看得非常清楚。
 -->

不会用 git ，就不能用 github 吗? NO! Github 的网站上通过网页操作就已经能实现很多强大的功能了，来一起看一看。

### 故事从注册开始

来到 <http://github.com> 的首页，就可以看到下面的注册界面：

![](images/without_git/signup.png)

填写自己的用户名邮箱，再设置一个妥妥的密码，点击 "Sign up for Github" 按钮，世界就属于你了。对于开源项目 github 是免费的，所以不用管付费相关的内容。
接下来初次注册的用户会看到一共四步的 github 使用教程。

![](images/without_git/help4steps.png)

本课中就是介绍第二步步，其他几步回头另行介绍。稍微看一下，关了就行了。以后可以到 <help.github.com> 看到这些内容。另外还会看到要求我去验证一下邮箱地址，到我的邮箱之中找到验证邮件，点一下里面的链接就可以了。

最后一步给自己添加一个头像吧，github 是一个真正的交朋友的地方，没有头像怎么行！可以到 Settings->Profile 这里来添加。

### 创建项目

一个项目其实就是一个文件夹，里面放着所有的项目文件，可以是代码，也可以是任意的文档。但是在 github 这里，就有一个新名称了，叫 ”仓库“ ( repo )，一个仓库就是一个用 git 进行了版本控制的项目。

点一下页面左上角的图标，就可以到达 dashboard ，控制面板，这个词本来的意思是汽车上的仪表板，日常所有的操作都在这里做。

![](images/without_git/dashboard.png)


比如左侧，图标“1”处，可以看到相关项目的最近更新，右侧，图标“2”处，是我自己的项目列表。现在我要创建一个项目，也就是点“3”处这个按钮。

![](images/without_git/github_dashboar.png)

勾选 “initailze project with a REAME” 然后创建这个项目。

### 编辑项目

每次项目修改后，点击 "commit" 就可以生成一个新的版本。commit 这个词有时候当动词就是”记录当前的版本“，当名词时候可以认为它就[代表一个版本](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html
) 。每个 commit 都有一个 commit 号，可以用来定位每个版本，例如 <https://github.com/happycasts/happycasts.github.com/commit/2727fd13f6> 。


删除文件 [参考这里](https://github.com/blog/1545-deleting-files-on-github) 。
一个版本就是当前代码状态的一个快照。



github 的页面编辑器是经过特殊强化的，用起来非常舒服。可以进入全屏模式，编辑后还可以用 preview mode 查看一下修改内容。

每次修改的内容叫做一个 patch，
后面再聊 git 本地操作的时候，会涉及到相同的这些概念。



### 总结
github 的功能还有很多，本节中只是介绍了最为核心的版本控制功能的一部分，后面对其他重要的功能还会有详细的介绍。

github 对 UI 的简约是有极为苛刻的要求的，所以很多功能是隐藏的， [参考](http://zachholman.com/talk/git-github-secrets/) 。
网页界面这里也能给别人的项目进行贡献，这个是通过 Pull Request 来实现的，这个后面要细聊，这里先过了。

更多内容可以参考 <http://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project> 。

如何在浏览器中使用 github 的说明，<https://github.com/blog/1557-github-flow-in-the-browser>