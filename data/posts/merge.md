---
title: 合并分支
---

新的一天开始。比如昨天我在一个 idea 分支上实现了一个想法，实际测试之后发现代码没有问题。那么今天我们要做的就是让这两个分支合并，或者说的具体一些，就是把 idea 分支的新代码融合（ merge ）到 master 分支，因为 master 分支才是最终会被上线的分支。

## 通过发 Pull Request 来合并分支

合并同一个仓库中的两个分支，其实可以用一个命令搞定，但是现在我们先来看看在 github 网站上如何来进行这个操作，过程中会涉及到一个 Pull Request 的概念。

最初项目只有一个 master 分支，我后来又新建一个 idea 分支，添加了一行代码，commit 一下。那现在仓库内的情况就是，idea 分支比 master 分支多一个 commit 。

![](https://img.haoqicat.com/2019031511.jpg)

那如何让 idea 的代码 merge 到 master 呢？首先要把 idea 分支 Push 到远端仓库中，这个前一节已经介绍过了。

![](https://img.haoqicat.com/2019031904.jpg)

到 github.com 上的项目主页，首先切换到 idea 分支，然后点 `New pull request` 按钮，来创建一个先的 Pull Request 。Pull Request 翻译过来叫“拉取请求”，意思是请求 master 分支去把 idea 分支的代码拉取到 master 之上。

![](https://img.haoqicat.com/2019031905.jpg)

接下来就进入了创建这个 Pull Request 的界面，可以看到，绿色的 `Able To Merge` 字样，意思是 idea 上的修改跟 master 分支上没有冲突，可以直接融合。关于代码冲突，稍后我们会有进一步的介绍。下面可以看到有 input 和 textarea 区域，可以去填写本次 Pull Request 的理由，也就是要解释给 master 分支的维护者，要拉取的这些修改内容都实现了那些有意义的功能。大绿按钮就是创建 Pull Request ，但是创建之前还可以看一下最底部的这些内容，也就是此次 Pull Request 中有包含了哪些代码的改动。

![](https://img.haoqicat.com/2019031514.jpg)


Master 分支的维护者将会看到这个 Pull Request 的详细内容，审核无误后，就可以点一下 `Merge Pull Request` ，来把 idea 分支的内容 merge 进 master 分支了。

![](https://img.haoqicat.com/2019031515.jpg)

通过查看 master 分支的历史线可以看到，不仅仅原来属于 idea 分支的 C3 现在到了 master 分支之上，另外， master 上还新生成了一个 `C4` ，这是一个特殊的 commit ，叫做“融合版本”（ Merge Commit ）。融合版本的特点是同时有两个 parent commit ，在合并分支的时候出现 merge commit 是非常正常的现象。

分支合并之后， master 分支指针指向了 merge commit，也就自动拥有了 idea 分支上的 `C3` 这个版本了。idea 分支一般这会儿就可以删除了。

## 代码冲突 conflicts

实际中经常有这样的情况，我正在 idea 分支上开发一个比较大的功能。但是这个时候突然发现了一个紧急的问题需要修复，所以我会直接到 master 分支上，做一个 commit 来解决这个紧急的问题。然后会来继续到 idea 上开发。

这样就会出现，两个不同分支上并行开发，同时都有新的 commit ，这个一般没有问题，一样可以直接 merge 。


![](https://img.haoqicat.com/2019031516.jpg)


但是如果在两个分支上改动了同一个地方，合并的就会出现代码冲突。 因为 git 不知道该听哪个分支的，所以只能报出冲突的位置，让开发者手动解决。

来具体操作一下。再次创建一个跟 master 拥有完全一样历史的分支，名为 new-idea ，在这个分支上，改动 README 文件中的一行，改成 `AAA`，commit 一下。然后切换到 master 分支上，把这一行的内容改为 `BBB` ，也一样做 commit。再次重复之前的合并分支的操作。

这样发 Pull Request 的时候，就会看到 `Can not Merge` 的警告，继续进行就可以进入手动解决冲突的界面。

![](https://img.haoqicat.com/2019031517.jpg)

这里我们以 master 分支的意见为最终意见，于是就可以直接删除图中红色框选内容，然后按照界面的提示继续完成融合即可。

## 合并远端分支

现在我本地仓库叫 GUI ，github.com 上托管了这个仓库，名字也叫 GUI 。那么自然就有本地一个 master 分支，和远端一个 master 分支，这两个分支虽然名字都叫 master，但是本质上也是两个分支，也存在分支合并的问题。

比如这样，我在 github.com 网页上，修改一下项目，把修改内容 commit 到 master 分支之上。这样，远端的 master 就比我本地的 master 分支多了一个 commit。然后在本地修改一下 master 分支，也做一个 commit 。

![](https://img.haoqicat.com/2019031518.jpg)


也就是说本地和远端的同名分支之间也会一样存在合并以及解决冲突的各种情形，跟两个不同名分支之间的操作方式都是一样的。

## 总结

前面学会了怎么开分支，今天又学会了怎么合并分支，那分支的基本操作就会了。后面就是在实际开发情形中运用了。
合并分支除了融合（ merge ）还有另外一种形式叫“变基”（ rebase ）这里暂时用不上，先不管。
