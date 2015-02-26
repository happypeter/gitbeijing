---
layout: book
title: 当 git 牵手 github
---

- 添加 remote
Remote

This is the version of something that is hosted on a server, most likely GitHub.com. It can be connected to local clones so that changes can be synced.

https://help.github.com/articles/github-glossary/

https://guides.github.com/introduction/getting-your-project-on-github/

https://guides.github.com/activities/hello-world/


Upstream

When talking about a branch or a fork, the primary branch on the original repository is often referred to as the "upstream", since that is the main place that other changes will come in from. The branch/fork you are working on is then called the "downstream".


SSH Key

SSH keys are a way to identify yourself to an online server, using an encrypted message. It's as if your computer has its own unique password to another service. GitHub uses SSH keys to securely transfer information from GitHub.com to your computer.

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
  - https://help.github.com/articles/how-can-i-push-or-pull/