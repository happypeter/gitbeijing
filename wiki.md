---
title: wiki
---

- 单兵作战
  - 这部分还有 git pull --rebase 这个每有讲
    - 涉及到 remote branch 概念的讲解
    - 不过这部分也可以放到团队开发中讲
    - git pull && git push 是不是也能解决 rejected 的问题？Yes

- 团队协作
  - git blame 放到这里讲

- 深度内容
  - 不一定深度底层的内容就一定很难，也不一定深度的内容就只能服务高级操作
  - gitbeijing 中避免高级操作，但不一定避谈深度内容，因为很多深度内容对于理解日常概念非常有帮助
  - 凡是让人赞叹的精彩内容就是要分享给大家
  - 例如 scott schcon 20008 gittalk 或者是 linus git talk

- Progit http://git-scm.com/book/zh/v1
  - staging area 这个还是要图示给大家，太重要了
    - 删除远端分支
      - git push origin --delete tmp
    - http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
      - 非常重要

    - https://github.com/blog/1902-svg-viewing-diffing

    - http://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server
      - 这个确实是我自己每天都用得到，但是也可以不讲
      - 也可以演示一下实际用法，对于理解 github 有一定的好处，比如为何要添加 ssh key

    - http://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project
      - 如何贡献项目当然是重点
      - 但是我面对的观众是大学生，不是公司
      - progit 这里太专业了，我要讲得都是最基础的 PR 流程

- 图形界面操作没有 fast-forward 的情况，到命令行部分再介绍吧
  Progit 3.5
    - fast-forward
      - http://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
      - fast-forward 的意思应该是沿着 idea 分支把 master 指针快进到头
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
  - 也谈到了 branch model 这些问题，所以 holman 可以在最后作为 next step 推荐给大家，真的是很重要
  - github 的流程应该是大家应该下一步学的，因为 github 的流程是企业中应用的流程中最简单的，跟个人开发流程没有什么大的差别
  
