---
title: 浏览器中使用 github
---

<!-- 还要多截图，很好看：http://happypeter.github.io/gitbeijing/github_in_browser.html -->


尽管 git 的深度用户比较多的是用 Unix 命令行来操作 git 的，Peter 本人也是这样。但是如果你还没有来得及学会使用命令行，那也不用担心，Gitbeijing 的第一部分带你使用 Github 网页和图形化的客户端来操作 Git 和 Github 。这样，几天下来就可以学会使用 Git 的大部分实用操作了。并且也会为后面学习使用命令行操作 Git 打下概念基础。

每个日出后都是全新的一天。今天 Peter 来带你做一件曾经改变我生活的一件事情，就是注册并使用 github.com 。不会用 git ，就不能用 github 吗? 不是这样的，Github 的网站上通过网页操作就已经能实现很多强大的功能了，来一起看一看。

### 故事从注册开始

来到 <http://github.com> 的首页，就可以看到下面的注册界面：

![](images/github_in_browser/signup.png)

填写自己的用户名邮箱，再设置一个妥妥的密码，点击 "Sign up for Github" 按钮，世界就属于你了。对于开源项目 github 是免费的，所以不用管付费相关的内容。
接下来初次注册的用户会看到一共四步的 github 使用教程。

![](images/github_in_browser/help4steps.png)

今天主要介绍第二步，其他几步回头另行介绍。所以这个四步走，稍微看一下，关了就行了。以后可以到 <help.github.com> 看到这些内容。另外还会看到要求新用户去验证一下邮箱地址的提示，到邮箱之中找到验证邮件，点一下里面的链接就可以了。

最后一步给自己添加一个头像吧，github 是一个真正的交朋友的地方，每次你发评论或者写代码都是代表一个活生生的人格。

![](images/github_in_browser/set_avatar.png)

如上图，登录后的用户都可以在1处找到”设置“的图标，是一个小齿轮，点一下，默认看到的就是2处的 `Profile` ，个人信息这一项，到3处选择图片上传就可以了。

### 创建项目仓库

一个项目其实就是一个文件夹，里面放着所有的项目文件，可以是代码，也可以是任意的文档。但是在 github 这里，就有一个新名称了，叫 ”仓库“ ( repo )，一个仓库就是一个用 git 进行了版本控制的项目。

点一下页面左上角的图标，就可以到达 dashboard ，控制面板，这个词本来的意思是汽车上的仪表板，日常所有的操作都在这里做。

![](images/github_in_browser/dashboard.png)


比如左侧，图标“1”处，可以看到相关项目的最近更新，右侧，图标“2”处，是我自己的项目列表。现在我要创建一个项目，也就是点“3”处这个按钮。

![](images/github_in_browser/github_dashboard.png)


这就到达了，这个新建项目的页面：

![](images/github_in_browser/new_project.png)

因为咱们没有付钱注意这次要勾选 “iInitialize this repository with a README” ，然后创建这个项目。也会看到 Create Repository 按钮的上方还有两个选择框，
一个是关于 .gitignore 的，后面会专门讲到，另一个是关于 LICENSE 的，任意选一个自己喜欢开源授权协议的就行，我比较喜欢 MIT License 。这两项如果选择了就是在项目中又多了两个文本文件，一个是 .gitignore 文件，另一个是 LICENSE 文件，都不选就可以。

### 编辑项目

创建项目完成后，就会跳转到 <https://github.com/happypeter/coco> 这个页面。这里的几乎每一个可以点按的地方都会涉及到一个新概念，不用着急，后面咱们都会介绍到。这里先来瞄准一个最为重要的，叫 commit，如图中所指：

![](images/github_in_browser/show_commit.png)

每次项目修改后，点击 "commit" 就可以生成一个新的版本。 版本，在 git 这里叫 commit 。commit 英文的基本意思是执行某个重要的事情，例如 commit suicide，自我了断。但是在 git 这里，做动词讲的时候就是“保存版本”，当名词讲就是版本。

现在就来编辑一下。点击上面图中，项目名 “coco” 右侧的加号，进入下面界面。

![](images/github_in_browser/add_new_file.png)

来新建一个文件叫 love.md，标号1。填写文件内容，标号2。下面 commit new file 部分填写的是“再版留言”，说明一下为什么要做这次修改。标号3处填写一个一行的留言，如果要详细描述可以到标号4处，也可以不填。
最后，点击 Commit new file 按钮，一个新版本就做好了。顺便提一下，github 的页面编辑器是经过特殊强化的，用起来非常舒服。可以进入全屏模式，编辑后还可以用 preview mode 查看一下修改内容。


自动跳转回项目页面之后，会发现原来 "1 commit" 的地方，现在已经变成了下图所示的 "2 commits"

![](images/github_in_browser/2_commits.png)

"2 commits" 这里是个链接，点进入就进入了项目历史的页面。

![](images/github_in_browser/history_view.png)

现在看到历史上有两个版本，点开上面的一个版本，或者说一个 commit，就可以看到一个 commit 所包含的信息了。

![](images/github_in_browser/4w_commit.png)

最重要的是 `版本号` 或者叫 commit id 。每个 commit 都有一个，是一个40位16进制数，可以用来定位每个版本。注意一下地址栏中 url 的格式，以后只要是拿到了一个 commit 的 id 就可以查看这次的修改的详细内容了。

<!-- 

这里可以给一个图，很多版本工具是 v1->v2->v3 这样网上走，git 这里是 12323->a2312->ba3b4 这样走版本号  

 -->

核心的内容就是这4个 `w` 了：

- Who 谁
- When 什么时间
- What 做了哪些修改内容，每次修改的内容叫做一个 patch，代码补丁，这个是后面经常会用到的概念。
- Why 为什么要改，就是刚才我自己写的”再版留言“，同一个项目中可能有多个开发者在工作，所以这个留言对于项目沟通非常重要

后面再聊 git 本地操作的时候，会涉及到相同的这些元素。

### 一条历史线

所有版本（ commit ) 组成了一条历史线。那么这条线是怎么串起来的呢？随便打开一个项目，打开具体一个 commit，通常（注意是通常，例外的情况回头会介绍到）会看到下图的内容：

![](images/github_in_browser/parent.png)


上面显示了这个 commit 的 id ，但是同时还显示了它之前的一个 commit 的 id，这个就是它的 parent。底层是这样，一个 commit 内部是保持了它的 parent 的版本号的，这样就把它和它的爹连在了一起，那这样爹还有自己的爹，就会形成下图的一条历史线。

![](images/github_in_browser/histroy_line.png)


有些版本工具是以 1，2，3... 作为版本号的，但是 git 这里每个版本号都是独一无二的哈希值，40位十六进制数。

### 总结
github 的功能还有很多，本节中只是介绍了最为核心的版本控制功能的一部分，后面对其他重要的功能还会有详细的介绍。
