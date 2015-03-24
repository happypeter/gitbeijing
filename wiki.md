---
title: wiki
---

- 单兵作战
  - 这部分还有 git pull --rebase 这个每有讲
    - 涉及到 remote branch 概念的讲解，本地的 orgin/master 指针是怎么回事
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

- 图形界面操作没有 fast-forward 的情况，到命令行部分再介绍吧
  Progit 3.5
    - fast-forward
      - http://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
      - fast-forward 的意思应该是沿着 idea 分支把 master 指针快进到头
- gittalk 2008
  - https://www.youtube.com/watch?v=nPzJESC-fag
  - http://s3.amazonaws.com/chacon/git-talk.pdf


