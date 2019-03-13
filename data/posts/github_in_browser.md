---
title: 浏览器中使用 github
---

今天 Peter 来带你做一件曾经改变我生活的事情，就是注册并使用 github.com 。不会用 git ，就不能用 github 吗? 不是这样的。Github 的网站上通过网页操作就已经能实现很多强大的版本控制功能了，来一起看一看。

### 故事从注册开始

来到 <http://github.com> 的首页，点一下 Signup 按钮，就可以看到注册界面。

填写自己的用户名邮箱，再设置一个妥妥的密码，点击 `Create an account` 按钮，世界就属于你了。对于开源项目 github 是免费的，所以不用管付费相关的内容。

好，下面的操作就假设你已经注册完毕，并登录进来了。


### 创建仓库

Github 上操作虽多，但是都是围绕一个个的项目展开的。但是项目在 Github 这里通常叫做一个仓库。

一个项目其实就是一个文件夹，里面放着所有的项目文件，可以是代码，也可以是任意的文档。但是在 Github 这里，每一个项目都不仅仅是最新版本的代码，还保持着所有的历史版本和修改记录。Github 上的项目有一个新名称，叫 ”仓库“ ( Repository )。说白了，一个仓库就是一个用 Git 进行了版本控制的项目。注意 Git 是一个独立软件，是一个版本控制工具，而 Github 是一个网站，二者要区分开。

登录后再到首页，看到的就不是欢迎界面了，而是 dashboard （控制面板）。

![](https://img.haoqicat.com/2018102401.jpg)

这里可以看到一个非常醒目的新建仓库的按钮。猛戳一下，就到达了新建仓库页面。


![](https://img.haoqicat.com/2018102402.jpg)

注意要勾选 Initialize this repository with a README ，然后创建这个项目。也会看到 Create Repository ，也就是创建仓库按钮的上方还有两个选择框，一个是关于 .gitignore 的，另一个是关于 LICENSE 的。这两项如果选择了就是在项目中又多了两个文本文件，一个是 .gitignore 文件，另一个是 LICENSE 文件，暂时都不选就可以，回头需要了可以自己用编辑器新建。

点创建仓库按钮，属于我们自己的一个项目仓库就创建成功了。

### 编辑项目

创建项目完成后，就会跳转到 <https://github.com/happypeter/coco> 这个页面。这里的几乎每一个可以点的地方都会涉及到一个新概念，不用着急，后面咱们都会介绍到。先来瞄准一个最为重要的，叫 commit，如图中所指：

![](https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/github_in_browser/show_commit.png?raw=true)

每次项目修改后，点击 `commit` 按钮就可以生成一个新的版本。commit 英文的基本意思是执行某个重要的事情，例如 commit suicide，自我了断。但是在 git 这里，做动词讲的时候是保存版本，当名词讲就是版本。

现在就来编辑一下。点击上面图中，项目名 `coco` 右侧的加号，进入下面界面。

![](https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/github_in_browser/add_new_file.png?raw=true)

来新建一个文件叫 `love.md`，在标号 1 处。填写文件内容，标号 2 处。下面 `Commit new file` 部分填写的是“版本留言”（ commit message ），说明一下为什么要做这次修改，一方面是跟队友沟通的一种形式，另一方面如果项目版本多了，自己也可以用这个留言来定位特定的一次修改。标号 3 处填写一个一行的留言，标号 4 处可以写详细留言，这一项是可选的。最后，点击 `Commit new file` 按钮，一个新版本就做好了。

顺便提一下，github 的页面编辑器是经过特殊强化的，用起来非常舒服。点下图 1 处，可以进入全屏模式，编辑后还可以用 2 处的 `Preview changes` 预览一下修改内容。

![](https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/github_in_browser/github_editor.png?raw=true)

自动跳转回项目页面之后，会发现原来 `1 commit` 的地方，现在已经变成了下图所示的 `2 commits`

![](https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/github_in_browser/2_commits.png?raw=true)

`2 commits` 是个链接，点进入就进入了项目历史的页面。

![](https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/github_in_browser/history_view.png?raw=true)

现在看到历史上有两个版本，点开上面的一个版本，或者说一个 commit，就可以看到一个 commit 所包含的信息了。

![](https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/github_in_browser/4w_commit.png?raw=true)

最重要的是 `版本号` （ commit id ）。每个 commit 都有一个，是一个 40 位 16 进制数，可以用来定位每个版本。注意一下地址栏中 url 的格式，以后只要是拿到了一个版本号，就可以照猫画虎的敲上面这样的链接来查看这次的修改的详细内容了，方便吧？！

一个 commit （版本）中最核心的内容就是这 4 个 `w` 了，谁（ who ）在什么时间（ when ）改了那些内容（ what ），最后一个是为什么要改（ why ），这个是版本留言发挥的作用。

### 编辑项目

创建项目完成后，就会跳转到 https://github.com/happypeter/toy-project 这个页面。这里的几乎每一个可以点的地方都会涉及到一个新概念，不用着急，咱们一点点的学。先来瞄准一个最为重要的，叫 commit 。

![](https://img.haoqicat.com/2018102403.jpg)

每次项目修改后，点击 commit 按钮就可以生成一个新的版本。commit 英文意思是”执行某个重要的操作“，例如 commit suicide，自我了断。但是在 git 这里，做动词讲的时候，意思是保存版本，当名词讲就是版本的意思。

现在就来编辑一下。点击界面上 Create new file 按钮，来创建一个新文件。

![](https://img.haoqicat.com/2018102404.jpg)

新建一个文件叫 love.md。填写文件名和文件内容。

![](https://img.haoqicat.com/2018102405.jpg)

下面 Commit new file 部分填写的是“版本留言”（ Commit message ），说明一下为什么要做这次修改，一方面这是跟队友沟通的一种形式，另一方面如果项目版本多了，这个留言也相当于自己的笔记。上面填写一个一行的留言，下面还可以写详细留言，不过详细留言这一项是可选的。最后，点击 Commit new file ，也就是”把这个文件做到版本中“，按钮，一个新版本就做好了。


![](https://img.haoqicat.com/2018102406.jpg)

这样，一次项目编辑工作就结束了，不但是做了文件修改，而且也新添加了一个版本。

## 一条历史线

所有的版本就构成了”项目历史线“（ Project History ）。这是一条由很多版本串起来的线。

刚才的编辑操作进行完毕，自动跳转回项目页面之后，会发现原来 1 commit 的地方，现在已经变成 2 commits 。

![](https://img.haoqicat.com/2018102407.jpg)

2 commits 是个链接，点进入就进入了项目历史界面，看到的就是项目历史线了，可以看到历史线上已经有了两个版本。

![](https://img.haoqicat.com/2018102408.jpg)

点开历史线上的最新一个版本，可以看到这个版本的详细情况。一个版本中最核心的内容就是这 4 个 w 了，谁（ who ）在什么时间（ when ）改了那些内容（ what ），最后一个是为什么要改（ why ），这个是版本留言发挥的作用。

![](https://img.haoqicat.com/2018102409.jpg)

这里还可以看到当前版本号（ Commit id ），同时还显示了它之前的一个 commit 的版本号，也就是它的“父版本”（ parent ）的版本号。

![](https://img.haoqicat.com/2018102410.jpg)

底层原理是这样，一个 commit 内部是保存了它的 parent 的版本号的，这样就把它和它爹连在了一起，爹还有自己的爹，就会形成下图的一条历史线。

![](https://img.haoqicat.com/2018102411.jpg)

有些版本工具是以 1，2，3… 作为版本号的，但是 Git 这里每个版本号都是 40 位十六进制数，当然有时候可以采用简写形式，取前几位来代表整个的版本号。这样的长长的版本号，表面看起来稍微麻烦一些，但是实际上妙用无穷，这里我们暂时不展开了。

好，对项目历史线的介绍就是这些了。

### 总结

本节的主体内容也就结束了，来总结一下。这就是 Peter 对如何通过网页的形式使用 Github 的一个简单介绍。动手方面，我们学习了，注册 Github 账户，创建新项目仓库以及编辑项目。理论方面，我们理解了什么是仓库，什么是版本，版本是如何连接成历史线的。最后，要稍微提一下，其实老手使用 Git 和 Github 的时候，通常都是在自己机器上编辑项目，然后通过命令行来上传到 Github.com ，网页界面上直接进行编辑操作的情况并不常见。
