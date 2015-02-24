---
layout: book
title: git 本地操作
---
<!-- http://happycasts.net/episodes/4 git-init 参考完毕 -->


本节就讲
  - 如何初始化项目， git init
  - 如何添加内容，git add file / rm file /mv file  == git add -A
    - git add -p 挺好玩的
  - git commit
    - 写 message 的时候配置一下 EDITOR=vim
    - -v 参数的功能 gfmac 中也有，所以也要引出来
    - alias ci 也要有，因为这个都是实际的流程
  - 如何查看修改历史 git log
  - 就是这些，用 githubformac 演示，然后图示原理，然后给出对应的命令
  - 回滚等其他内容后面再讲

# git 本地操作

没有安装 git 并不妨碍我使用 github 的基本功能，同样，即使我不能联网，没有 github 账户，也可以在本地进行 git 的版本控制操作。

### 安装 git 和 基本使用


查看版本信息

    git log -p

### github for mac

除了可以敲 git 的各种命令来获取版本信息，也可以通过前端工具来比较容易且更加美观的展现出版本信息。如果是在命令行界面，可以安装 tig 。

GUI 图形界面的工具当然会更美观一些，种类有很多，如果用 Mac 系统，可以安装 github for mac 

确实美观，可否每操作一下 GUI 就给出对应的命令行操作？以及图示，比如 sync 的意思是 push，但是 push 什么到什么地方，这个可以用 slide 展示一下