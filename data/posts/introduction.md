---
title: 简介
---

这是一本带初学者学会使用 git 版本控制工具和 github.com 社交化编程平台的书。用爱打造。你好，我是 Peter，今天是咱们见面的第一天，我想跟你聊的是一些故事和学习本书的思路。

### 我和 git 的罗曼史

git 和 github 两个词初学者经常搞不清谁是谁？Git 是一个版本控制工具，是一个可以安装在你自己机器上的软件。Git 这个单词的中文意思是傻 x 。关于软件为何以 git 命名，它的作者 Linus 曾经这样调侃：

> 我是个自负的混蛋，所有我的项目都以我自己的名字命名，先有 Linux，现在是 git 。

<!-- > “I’m an egotistical bastard, and I name all my projects after myself.
First Linux, now git.” – Linus -->

不过，也有人认为 Git 是 Global Information Tracker（全局信息跟踪器）的缩写形式，我认为这个说法非常能说明 git 的用途，就是对一个文件夹中的所有数据信息做跟踪，通过记录版本的形式来对内容的变化做记录。

你可能也已经知道，Linus 也是 Linux 操作系统之父。大概是 2007 年，那会儿我搞 Linux，对 Linus 本人很崇拜，所以就知道了 git，那时候 github 还没有诞生。

![](https://img.haoqicat.com/2019031416.jpg)


上面这张图片是 Linus 在 google 演讲介绍 git 。 [可以在这里找到视频](http://git-scm.com/doc/ext) 。

Git 的魅力在于开源文化，2008 年 github 的诞生把开源协作的理念更好的进行了推广，因为 Github 让 Git 变得更为易用。

![](https://img.haoqicat.com/2019031417.jpg)


Github 首先是一个公司，<https://github.com> 网站是他们的产品，提供 Git 仓库的托管服务，但是更重要的，它是世界上最大的开源软件分享协作平台。我是 2009 年开始用 Github 的，那时候我还是 C/C++ 程序员，但是发现太喜欢 Github 公司的文化和他们的那些工具了，而这些人都是来自 Ruby 社区，这些工具都是 Ruby 语言开发的，所以我就逐渐学习了 Ruby，也正是因为 Ruby 我理解了 Web 开发，理解了互联网的开放和自由，所以很快就成了全职的网站开发者。另外一个原因是我在 2010 年的时候，开始在一家教育机构作 Linux 培训讲师，所以那时候也更有动力利用课余时间做网站，因为网站可以很好的用来分享知识，也正是那个时候我开始做 Git 培训，我是我自己知道的最早在国内做 Git 商业培训的人。

Git 和 Github 改变了我的职业发展路线，多年过去了，依然感觉当年遇见 Git 是如此的幸运。

### Git 和 Github 如何改变生活

<!-- >Programming is not just code and computers. It's about people. It is decision making, information sharing, and the tools and mental models we use to solve problems and iterate on the solutions. -->

> 编程不仅仅光是有关代码和计算机，更重要的是有关人。做决定，分享信息，以及人们采用怎样工具和思维模式来解决问题和改进解决方案，这些都是编程的重要组成部分。

上面这段话翻译自 [gotealeaf.com](http://www.gotealeaf.com/books/git/read/introduction#gettingstarted) 。学习 Git 和 Github 的使用，其实主要是学习一种新的协作方式，一种极大区别于传统工业化思想的，轻便灵活，人人平等，创业文化的协作方式。

<!-- >GitHub.com might be the best thing that has happened to software development since the Internet.  -->

> Github 可能是自互联网以来出现的最有助于编程开发的事物了。

上面这段话也来自 [gotealeaf.com](http://www.gotealeaf.com/books/git/read/introduction#whatisgithub) 。如果说 google 强大的搜索功能的出现改变了开发者写代码的方式，那么 Github 的出现也是对软件开发有着革命性的影响。在 Github 上面，你可以找到很多高手，follow 他们，参与他们项目的开发，大量的精品的开源项目可以直接拿来用，重造轮子的时代已经过去了。对于新手，Github 不仅仅是一个学习的地方，也同样是一个展示自己成长的地方。在你的 Github 个人主页上，不仅能看到你所有开源项目的代码，而且能看到你每一天的进展。

![](https://img.haoqicat.com/2019031418.jpg)


我自己当时找工作的时候，Github 其实就是我的简历。实际的项目，详细的改版历史中都可以看到心思和汗水，这个要比简历上空洞的写“我精通 xxx"要有说服力。

### 本书内容

首先这本书是写给初学者的，是给没有任何版本控制经验的同学的。书中展示了使用 git 和 github 的一套最简单的方式，让新人能快速上手。Git 是一个命令行工具，但是对于很多不会命令行的人来说造成了入门困难。《搬进 Github》全部以 Github 的网站配合图形化客户端来讲解，这样学完，即使你不会用命令行，对于版本控制的最核心和重要的操作也一样会游刃有余。

![](https://img.haoqicat.com/2019031419.jpg)


全书内容以动手为主线来安排内容，但是我自己初学的时候也发现，其实有些概念不懂会直接造成使用上的困难，所以书中我画了很精美的原理图，来把最核心的知识点讲清楚。例如

![](https://img.haoqicat.com/2019031420.jpg)


总之，这是一本给普通开发者的书（不是培养 git 专家），所以我会从日常开发工作的实际图景把握各个知识点的轻重，让大家花20%的时间掌握80%最常用的操作。

### 反馈和改版

根据大家的反馈，我会随时更新。大家可以到本书的[源码仓库](https://github.com/happypeter/gitbeijing)去查看更新或者提意见。有任何勘误或者是我没讲清楚的地方，也可以直接发邮件到我的邮箱：happypeter1983@gmail.com 。或者微信联系我：happypeter1983 。

谢谢！
