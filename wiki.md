---
layout: book
title: wiki
---

- 我在北航科技园的演讲
  - 什么样的人适合学习 git?
    - git 基本使用并不难，而且超级有用，代码初学者就可以学，甚至不写代码的人也可以学
      - 比如 github.com/presidentobama 和 gitbook 台北市政白皮书
    - what is git?
      - man git
    - 理解版本控制工具的第一步是理解什么是版本
      - 要控制的对象就是一个文件夹
      - 可以画出一张图示，一开始的文件夹内容，上面加个 patch 就有了下一个版本，再加一个 patch 就又有了下一个版本
        - 版本控制工具可以让咱们方面的查找各个 patch，有必要的话，可以回到过去的某个版本，相当于有了后悔药可以吃了
      - 世界上最简单的版本控制工具，就是拷贝粘贴 cp -r 
      - 一次版本 commit 中包含这些信息，谁，在什么时间，改动了那些内容，为什么。
    - git 的术语
      - 先要初始化 git 项目，就是创建 .git 目录，所有的再版信息都往里面存
      - commit -- 运行 git commit 就对代码状态的做一个快照，存到版本仓库之中了
      - working tree -- 这个如果没有必要可以不说
      - git blame 很有意思
      - 回到过去


- 课程内容 big roadmap
  - 说话
    - 面一点，柔一些，抑扬顿挫
  - 动手带理论
    - 而不是理论带动手
    - 理出一套清晰的动手的线，分割成由浅入深的各个点
      - 理论即使重讲漏讲不讲都可以
      - 动手的过程要给大家列清楚
  - 简约而实用
    - progit 是学习 git 的权威著作，但是权威的代价就是内容写得要全面深入，但是仅就这一点就带来了初学者学习的困难
      - 另外权威著作举例子不能太偏颇，所以很多地方不能说的太 opinionated ，比如就不太适合用 github for mac 来举例子，因为这个意味着其他的客户端就被秒杀了
    - gitbeijing 瞄准的时最常用的技巧，用实际的操作流程来，实际的工具，opinionated 的工具和流程，可以让讨论更生动
      - 同时由于瞄准的知识范围略窄，对于具体的知识点也可以比 progit 讨论的更详细深入
      - 总之，就是降低入门难度，Pro Git 当然会比较 professional 一些，我这个可以叫 Beginnner's Git
    - 会用一个功能是一回事，知道什么情况下用这个功能是另一回事，看清盈利很重要
      - progit 中没有实际的开发情形，不能讲到这一层

  - 凡是涉及 index staging area 等需要了解底层结构才能理解的操作一律不讲，或者放到一期 happycasts 中
  - git ls-files 这种命令就不要提了，提了也记不住，还是要给大家上最常用的功能，同时把功夫下在如何让大家透彻理解这些功能上
  - 先用 github 的网页，展示清楚 git 版本控制的基本概念，commit，patch，
    - 对应 github 上的一个关键术语和图标的含义，要努力介绍一下，不然是直接影响使用的
  - 然后图示一下版本控制的基本原理
  - 这样在本地安装 githubformac 执行纯本地机器上的版本控制
    - 完全按照 gfmac 的使用思路，来对应各个命令行命令，配以图示
  - 瞄准 gfmac，这上面有的功能就将，没有的就先不讲。
- happycasts.net
  - idev talk http://happycasts.net/episodes/60
    - 有很详细的图解，值得参考
  - http://happycasts.net/tag/git
    - 所有的内容都有参考价值
    - 基础的，核心的内容都放到 gitbeijing 中，拓宽性的知识点都单独录 happycasts
  - github-init http://happycasts.net/episodes/7
    - 添加协作者
    - 添加 ssh key
    - 如何删除项目，用户，等这些常用操作
    - 这个视频的内容就是这些了，没有必要再重看了
  - git-init http://happycasts.net/episodes/4
    - git 命令行的基本操作 add commit log -p
    - gitbeijing 中应该尽少的讲解这些命令，教大家多用 tig githubformac 这些工具
    - 命令还是很多，参数也有很多，所以还是以 githubformac 的各项功能为直观演示，演示完了，直接上图示，图示中配上命令就好了
      - 就像 idev talk 中那样的
   - pull-rebase http://happycasts.net/episodes/10
     - 这个是开发中随时都会出现的内容，所以肯定要讲
     - git pull --rebase 解决 rejected 的问题
  - git add http://happycasts.net/episodes/33
    - git reset/diff 这几期都没法给初学者看，就是讲得太深了
    - gitbeijing 中保证不讲这么深入，会给大家带来挫败感的
    - 后面如果讲到这些特别深入的内容也是因为一个实际需求，用户躲不掉了，自然花多少时间也都愿意了
      - 到那个时候，从浅到深一股脑都讲出来就行了，理论上讲全面，不然用户也听不懂
      - 但是 gitbeijing 中要极力避免这么难理解的操作，真正用到了，也不能往深处讲

- Progit http://git-scm.com/book/zh/v1
  - 很多地方讲得还是比较深，我弄本简单的小书
  - staging area 这个还是要图示给大家，太重要了
  - 分支开发工作流--这个可以不讲，只是一个 master 就能满足日常需求了
    - 试想，我自己都多长时间没用到分支开发工作流了
    - 但是，分支的基本概念和使用肯定是要覆盖的
    - progit 3.4 中介绍的这个工作流当然是分支实用的一种情况，我虽然不讲这个，但是讲分支也一定是从更简单的实用场景出发
      - 比如 gh-pages 分支，可以用来放页面
      - 比如 ... 反正我就是学英语的思路，就整最常用的

    - 3.5 远程分支
      - 这个肯定要讲

    - merge vs rebase
      - 这个要细讲，不然 git pull --rebase 就理解不了
      - rebase 之后，好像我是在 jessica 的工作的基础之上继续开展的我的修改，而不是并行工作的
      - conflict 的情况肯定要 cover

    - http://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server
      - 这个确实是我自己每天都用得到，但是也可以不讲
      - 也可以演示一下实际用法，对于理解 github 有一定的好处，比如为何要添加 ssh key

    - http://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project
      - 如何贡献项目当然是重点
      - 但是我面对的观众是大学生，不是公司
      - progit 这里太专业了，我要讲得都是最基础的 PR 流程

    - github
      - github 对于开源项目是免费的，但是如果你想拥有私有项目也就是把代码封闭起来，就是要付费订阅了
      - https 的那个 clone 链接还是有实际用途的，就是给那些没有添加 ssh key 的人
      - 给出详细的注册步骤的截图演示，不要跳过，说“注册是很简单的”，会被打的
      - v2 的 progit 对 github 的讲解是非常详细的，甚至包括了 markdown 在 issue 中怎么写
        - http://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project

      - http://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
        - reset 必须讲，但是要讲清原理不容易PP

    - 全书都扫了一遍，跟我要用的思路完全不一样


- http://gitref.org/
  - 首页的 how to think like a git 很实用

- gittalk 2008
  - https://www.youtube.com/watch?v=nPzJESC-fag
  - http://s3.amazonaws.com/chacon/git-talk.pdf

- how github use github to build github
  - https://www.youtube.com/watch?v=qyz3jkOBbQY
  - 12:44 有对 PR 的精炼解释，很白话
    master -> branch -> pr -> master
    17:00 一个 PR 的整个生命流程，用一个实例演示，再好不过了，比直接抽象聊好一千倍
    - 要有 snapshot 有 markdown 的 code ...
  - zach 的观点很喜欢：软件行业有各种开发方式，敏捷，瀑布，BDD，TDD，非常复杂，但是重要的时你找到一种自己喜欢的方式，github 就是这种方式。
  - 整个的异步工作流程，如此的重要，但是对于新人只是空话
  - 但是可以提一下，zachholman.com 很值得一看
  - 也谈到了 branch model 这些问题，所以 holman 可以在最后作为 next step 推荐给大家，真的是很重要
  - github 的流程应该是大家应该下一步学的，因为 github 的流程是企业中应用的流程中最简单的，跟个人开发流程没有什么大的差别
  - 整个流程中体现了对开发者的尊重，真正像一个创作者一样对待他们，而不是当打杂的。




