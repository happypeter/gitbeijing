---
layout: book
title: 当 git 牵手 github
---

通常情况下，我的每一个本地的 git 仓库都是托管在 github 上的。也就是本地机器和服务器是能够通气的，这集看看怎么通。

### 上传本地项目到 github

打个比方，我有一些货要送到云南，那我首先要在云南那边开个仓库吧，然后拿到这个仓库的地址后，北京这边的货才能发车。

所以先到 github.com 网站上新建一个项目，名字就叫 CLI，注意这次千万要保证这个新建的仓库是空的，也就是不要勾选 ”Initialize this repository with a README“ 这一项。创建成功就看到了下面的地址，这个就是咱们要的仓库地址了。

![](images/remote/repo_address.png)

来到命令行

    cd CLI/
    git remote add origin git@github.com:happypeter/CLI.git

这一步就是添加了仓库地址到本地的 .git 目录里面，具体来说就是 .git/config 文件中又多了这门几行

{% highlight gitconfig %}
[remote "origin"]
    url = git@github.com:happypeter/CLI.git
{% endhighlight %}

这里 `origin` 是这个地址的代号，因为未来可能添加多个远端地址。

添加好之后下一步真正要把数据传输到 github.com 上就要运行

    git push -u origin master

由于这个命令非常重要，所以来详细解释一下，这里执行的命令是 git-push 可以通过 `man git-push` 来查看这个命令的手册，里面也能找到 `-u` 参数的意义。简单来说，`push` 就是要把本地数据”推送“到 github 服务器上。`origin` 就是地址的代号，`master` 是分支的名字。一个仓库是可以有多个分支的，后面会有专门的内容讲解分支。分支的意义明确之前 `-u` 参数不太好理解，暂时就记住，这个参数的作用是在本地仓库的当前分支，其实就是本地的 master 分支，和服务器的仓库，也就是 origin 对应的仓库，的 master 分支之间建议一种绑定关系，因为实际项目中本地和远端都有多个分支，没有绑定关系，那么未来向远端 push 数据，或者从远端 pull 数据的时候就乱套了。`-u` 参数只需要在首次 push 的时候添加一次就可以了。后续执行相同的推送数据操作，只需要 `git push` 不加参数就可以了。

好了，现在再到 <https://github.com/happypeter/CLI> 刷新一下页面，就看到数据已经上传成功了。

客户端中的操作更为方便，前提是已经用自己的 github 账号在客户端登录了。

![](images/remote/mac_push.png)

操作就是上图这些步骤。首先，点击1处的 publish ，然后填写项目名和描述，注意3处不要勾选 keep this code private，实际上如果不是付费用户也根本没有这个权限。最后点击 Push Repository 按钮就行了。这样到 github.com 自己的 dashboard，看一下右下方的仓库列表

![](images/remote/repo_list.png)

可以看到 GUI 这个项目已经在表的最顶端了。实际中常用的一个小贴士，列表的排列顺序是安更新时间由近到远排列的。



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