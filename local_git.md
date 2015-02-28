---
layout: book
title: git 本地操作
---

本课来把，前面在 github 上实现的那些版本控制操作在本地重新来一遍。会有很多新的秘密浮出水面。

### Git 是分布式的

分布式，英文叫做 Distributed 。这个是个能够改变世界的概念，远的就不扯了，说说在版本控制这里，分布式和集中式（英文叫 Centralized）的区别。

git 是分布式的版本管理工具，意思是每一个 git 控制的项目仓库中都保留整个项目的历史，各个仓库是对等关系。

图 分布式

不像 svn/cvs 那些是中心式的工具。只有服务器上的项目才有整个历史，每个开发者本地都只是最新的版本。

图 集中式

分布式的架构优势是非常明显的，比如大部分的操作都不需要联网，速度会比集中式的快几个数量级。这个分布式的图，麻烦你一定要记在脑子里，这样后面很多 git 的特性就都可以理解了。

### 在自己的机器上使用 git

来到 [git 官网的首页](http://git-scm.com/) 就可以下载适合自己操作系统平台的 git 安装包了。git 是一个命令行工具，或者说是一套工具箱，有下图所示的这些命令：

图 一百多个命令

好消息是，最长用的只不过是其中很小的一部分。

Peter 平时主要是用命令行，但是我觉得初学者如果用一下图形化的客户端工具 [Github for Mac](https://mac.github.com/index.html) ，来掌握 git 的基本操作也是很好的，简单而直观。图形化工具中之提供常见操作，真正灵活使用 git 还是要用命令行的。如果你对命令行使用还不熟悉可以看看我以前录的[这门课程](http://happypeter.github.io/LGCB/) 。

![](images/local_git/heart_git.png)

但是常用的也就那么几十个，并且如果你不想成为 git 的高级用户，可以尽量多用 GUI 工具，不碰命令行。因为 GUI 工具中很多操作都确实方便，直白


Git is a 
- stupid content tracker
- directory content management system
- tree histroy store system
- a toolkit 

Git 是一个很傻瓜式的文件夹内容跟踪管理系统，版本历史存储系统，git 有很多子命令的命令行工具箱。


    - git 的术语
      - 先要初始化 git 项目，就是创建 .git 目录，所有的再版信息都往里面存
      - commit -- 运行 git commit 就对代码状态的做一个快照，存到版本仓库之中了
      - working tree -- 这个如果没有必要可以不说
      - git blame 很有意思

- 用 githubformac 应该是直接可以 push 的
  - https://help.github.com/articles/generating-ssh-keys/#platform-mac
  - >Forget the terminal. Download our native app instead.

本节就讲
  - 安装
  - 如何初始化项目， git init
  - 如何添加内容，git add file / rm file /mv file  == git add -A
    - git add -p 挺好玩的
  - git commit
    - 写 message 的时候配置一下 EDITOR=vim
    - -v 参数的功能 gfmac 中也有，所以也要引出来
    - alias ci 也要有，因为这个都是实际的流程
  - 如何查看修改历史 git log
  - 就是这些，用 githubformac 演示，然后图示原理，然后给出对应的命令
  - 

# git 本地操作

没有安装 git 并不妨碍我使用 github 的基本功能，同样，即使我不能联网，没有 github 账户，也可以在本地进行 git 的版本控制操作。

### 安装 git 和 基本使用


查看版本信息

    git log -p

### github for mac

除了可以敲 git 的各种命令来获取版本信息，也可以通过前端工具来比较容易且更加美观的展现出版本信息。如果是在命令行界面，可以安装 tig 。

GUI 图形界面的工具当然会更美观一些，种类有很多，如果用 Mac 系统，可以安装 github for mac 

确实美观，可否每操作一下 GUI 就给出对应的命令行操作？以及图示，比如 sync 的意思是 push，但是 push 什么到什么地方，这个可以用 slide 展示一下

### 总结

这里只是最基本的版本控制操作，历史回滚等其他内容后面再讲。