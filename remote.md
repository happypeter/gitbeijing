---
layout: book
title: 当 git 牵手 github
---

- 添加 remote
- push 的之前要添加 ssh key
  - 添加 ssh key 的目的是要在服务器和客户机之间达成互信，谁是服务器？Github.com 谁是客户机？我自己的笔记本。
  - 运行 ssh-keygen 会生成一对 ssh key 一个公钥，一个私人钥，需要做的就是把公钥放到 github.com 上。
  - https://help.github.com/articles/generating-ssh-keys/
    - ssh key 添加成功后，有时直接 Push 还是不成功，需要等半天一天才能生效的情况也有
    - 注意拷贝的时候最后千万不要多一个空格或者回车


  git remote add origin xxxx

这几个参数的意思要给大家说清楚


- 用 githubformac 应该是直接可以 push 的
  - https://help.github.com/articles/generating-ssh-keys/#platform-mac
  - >Forget the terminal. Download our native app instead.