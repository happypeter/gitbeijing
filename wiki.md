---
title: wiki
---

- 单兵作战
  - 这部分还有 git pull --rebase 这个每有讲
    - 涉及到 remote branch 概念的讲解
    - 不过这部分也可以放到团队开发中讲
    - git pull && git push --force 是不是也能解决 rejected 的问题

- 团队协作
  - git blame 放到这里讲

- happysublime 课程因为用到命令行，让初学者感觉很有距离
  - 积极考虑本书，前面几章的内容，全部用 GUI 工具完成。
  - LGCB RAILS10 这几门课程，还是比较一致的反应难度太大，happycasts/laracasts 的通常用户不是初学者，而现在的成套课程是面向初学者的
  - 所以还是要有差异
  
- 深度内容
  - 不一定深度底层的内容就一定很难，也不一定深度的内容就只能服务高级操作
  - gitbeijing 中避免高级操作，但不一定避谈深度内容，因为很多深度内容对于理解日常概念非常有帮助
  - 凡是让人赞叹的精彩内容就是要分享给大家
  - 例如 scott schcon 20008 gittalk 或者是 linus git talk

- happycasts.net
  - git add http://happycasts.net/episodes/33
    - git reset/diff 这几期都没法给初学者看，就是讲得太深了
    - 后面如果讲到这些特别深入的内容也是因为一个实际需求，用户躲不掉了，自然花多少时间也都愿意了
      - 到那个时候，从浅到深一股脑都讲出来就行了，理论上讲全面，不然用户也听不懂
      - 但是 gitbeijing 中要极力避免这么难理解的操作，真正用到了，也不能往深处讲

- Progit http://git-scm.com/book/zh/v1
  - staging area 这个还是要图示给大家，太重要了
    - 删除远端分支
      - git push origin --delete tmp
    - http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
      - 非常重要

    - merge vs rebase
      - 这个要细讲，不然 git pull --rebase 就理解不了
      - rebase 之后，好像我是在 jessica 的工作的基础之上继续开展的我的修改，而不是并行工作的
      - conflict 的情况肯定要 cover

    - https://github.com/blog/1902-svg-viewing-diffing

    - http://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server
      - 这个确实是我自己每天都用得到，但是也可以不讲
      - 也可以演示一下实际用法，对于理解 github 有一定的好处，比如为何要添加 ssh key

    - http://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project
      - 如何贡献项目当然是重点
      - 但是我面对的观众是大学生，不是公司
      - progit 这里太专业了，我要讲得都是最基础的 PR 流程

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
  
