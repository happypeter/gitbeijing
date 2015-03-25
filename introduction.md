---
title: 简介
---

这是一本带初学者学会使用 git 版本控制工具和 github.com 社交化编程平台的书。用爱打造。你好，我是 Peter，今天是咱们见面的第一天，我想跟你聊的是一些故事和一些关于 git 北京学习安排的一些想法。

### 我和 git 的罗曼史

git 和 github 两个词初学者经常搞不清谁是谁？Git 是一个版本控制工具，是一个可以安装在你自己机器上的软件。Git 这个单词的中文意思是傻x。关于软件为何以 git 命令，它的作者 Linus Torvalds 曾经这样调侃：

> “I’m an egotistical bastard, and I name all my projects after myself.
First Linux, now git.” – Linus

不过，也有人认为 Git 是 Global Information Tracker 的缩写形式，我认为这个说法非常能说明 git 的用途，就是对一个文件夹中的所有数据信息做跟踪，通过记录版本的形式来对内容的变化做记录。

你可能也已经知道，Linus 也是 Linux 操作系统之父。那时候我正在北京念书，搞 Linux，所以应该是 2007 年的时候就知道了 git，那时候 github 还没有诞生。


![](./images/introduction/linus_gittalk.jpg)

上面这张图片是 Linus 在 google 演讲介绍 git 。这个我下载到自己的手持设备上，非常喜欢，听了有100遍。 [可以在这里找到视频](http://git-scm.com/doc/ext) 。

Git 的魅力在于开源，在于人本和去中心化，2008 年 github 的诞生把这些价值更好的进行了推广。

![github](./images/introduction/github_cat.jpg)

Github 首先是一个公司，<https://github.com> 网站是他们的产品，提供 Git 仓库的托管服务，但是更重要的，它是世界上最大的开源软件分享协作平台。我是2009年开始用 Github 的，那时候我还是 C/C++ 程序员，但是发现太喜欢 Github 公司的文化和他们的那些工具了，而这些人都是来自 Ruby 社区，这些工具都是 Ruby 语言开发的，所以我就逐渐学习了 Ruby，也正是因为 Ruby 我理解了 Web 开发，理解了互联网的开放和自由，所以很快就成了全职的网站开发者。另外一个原因是我在2010年的时候，开始在一家教育机构作 Linux 培训讲师，所以那时候也更有动力利用课余时间做网站，因为网站可以很好的用来分享知识。

Git 和 Github 改变了我的职业发展路线，多年过去了，依然感觉当年遇见 Git 是如此的幸运。

### Git 和 Github 如何改变生活

>Programming is not just code and computers. It's about people. It is decision making, information sharing, and the tools and mental models we use to solve problems and iterate on the solutions.

上面这段话来自 [gotealeaf.com](http://www.gotealeaf.com/books/git/read/introduction#gettingstarted) 。学习 Git 和 Github 的使用，其实主要是学习一种新的工作和和他人协作的方式，一种极大区别于传统工业化思想的，轻便灵活，人人平等，创业文化的氛围。

如果说 google 的出现改变了开发者写代码的方式，那么 Github 的出现也是对软件开发有着革命性的影响。在 Github 上面，你可以找到很多高手，follow 他们，参与他们项目的开发，大量的精品的开源项目可以直接拿来用，重造轮子的时代已经过去了。对于新手，Github 不仅仅是一个学习的地方，也同样是一个展示自己成长的地方。在你的 Github 个人主页上，不仅能看到你所有开源项目的代码，而且能看到你每一天的进展。我自己当时找工作的时候，Github 其实就是我的简历。实际的项目，详细的改版历史中都可以看到心思和汗水，这个要比简历上空洞的写“我精通xxx"要有舒服力的多。

### 本书内容

git 是一个很大的话题，《Git 北京》这本书围绕这几个核心来组织内容：

- 面向初学者。 一个反例就是 [Progit](http://git-scm.com/book/en/v2) 这本书，质量虽然高，但是内容比较全面深入，所以不适合初学者。gitbeijing 的读者不需要有版本控制的基础知识。如果读者对命令行操作有一定的了解是最完美的了。
- 结合实际应用情形。很多时候演示要比讲解好一千倍。我觉得，技术如果脱离开实际应用场景来讲，就会很空洞枯燥。每一天 Peter 会跟你一起完成一些 git 相关的任务，过程中如果需要介绍理论了，就会穿插进来讲。
- 深入讲解最重要的点。本书并不只是一本快速上手的教程。对于不懂会直接影响日常使用那一部分知识点，会做比 Progit 更为详细的讲解。

这是一本给普通开发者的书（不是培养 git 专家），所以我会从日常开发工作的实际图景把握各个知识点的轻重，让大家花20%的时间掌握80%最常用的操作。