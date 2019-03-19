---
title: 贡献开源项目的流程
---

Github 是目前世界上最大的开源项目的托管交流平台。[贡献开源项目](https://opensource.guide/how-to-contribute/)的流程也是 Github 全力支持的，也一样是遵循 Github Flow，虽然跟前面团队合作流程会有一点差别。在团队内部，大家都是有写权限的。但是网上的开源项目参与者众多。如果你一上去就跟项目的拥有者说，Hey，你给我加个写权限吧，别逗了，人家也不认识你，怎么可能呢？

## Fork

所以第一步是 Fork 这个项目。所谓我 fork 别人的一个项目，就是指做一个把这个项目做一个拷贝，放到我自己的账户下。

![](https://img.haoqicat.com/2019031701.jpg)


基于 fork 的整个的流程就是上图展示的思路。第一步，先 fork，这样我就有了 happypeter/TLCL 这个仓库了，既然是属于自己的仓库，我就可以把它 clone 到本地，做修改，然后推送到回这个仓库之中。这样我把我自己的仓库（或者说 fork ）跟上游的仓库（ billie66 名下的仓库）来进行对比，就可以发 Pull Request 了。

下面来实际操作。

来到 TLCL 的项目主页，也就是 <https://github.com/billie66/TLCL> 。点右上角的 fork 按钮。

![](https://img.haoqicat.com/2019031702.jpg)


这样，我自己的名下就多了一个 TLCL 仓库。

![](https://img.haoqicat.com/2019031703.jpg)


到这里 fork 这一步就结束了。那对于 happypeter/TLCL 这个仓库，我当然有修改的权限了，可以在网页上修改直接发 PR。不过一般我会 clone 到本地客户端中，在本地作修改，点右下角的 `Clone In Desktop` 按钮，来把项目 clone 到本地。

![](https://img.haoqicat.com/2019031704.jpg)

## 做版本和同步

区别于团队合作的 [Github Flow](http://gitbeijing.com/flow/)，这里没有开新分支，而是创建了一个新的 fork。上游仓库 billie66/TLCL 中代码是在 gh-pages 分支上，那现在我在本地的 gh-pages 修改，新版本同步到在 happypeter/TLCL 的 gh-pages 上就可以了。

本地修改，做 commit，然后同步到远端的 happypeter/TLCL 中，这些步骤是轻车熟路了。于是到 github.com 可以看到下图的内容。

![](https://img.haoqicat.com/2019031705.jpg)


如上图所示到 happypeter/TLCL 的仓库主页，可以看到最新的我做的版本的留言，点开就可以看到我这次修改的内容，现在可以来发 PR 了。

## 发 PR 和代码审核

发 PR 的过程跟前面介绍过的没有本质区别。点一下 `Pull Request` 链接，到达的页面中会有一个大大的绿按钮 `New Pull Request`，点一下就看到新建 PR 的页面。

![](https://img.haoqicat.com/2019031706.jpg)

注意图中 1 处，要选对是哪两个分支进行对比，左侧是上游分支，也就是“目的地”分支，右侧是我自己的分支，有修改的内容。有时候 github 能猜对拿哪两个分支做对比，有时候就要自己手动选择一下。下面就可以点按钮来发 PR 了。之后，在 billie66/TLCL 下面，注意不是 happypeter/TLCL 下面，就会看到这个 PR 。

![](https://img.haoqicat.com/2019031707.jpg)


这样，我这次贡献代码的工作就结束了。TLCL 的版本历史中会永远留下 happypeter 的名字。同时我发的这个 PR 关掉之后，也可以在 billie66/TLCL 的 Pull Requests 一项下面被永久保存，所以我可以放心的删除我自己的那个 fork 了。


## 基于 fork 的快速 PR

前面介绍过[快速 PR](https://github.com/blog/1945-quick-pull-requests)了，不过那个流程是基于一个我自己有写权限的项目。那对于人家的开源项目，我根本就不能修改，能不用在网页上直接发开速 PR 呢？答案是 Yes ，而且过程也一样简单和直观。

做法就是，我来到 bille66/TLCL 的这个项目，不需要自己动手 fork，而是直接打开一个我想要编辑的文件，修改，然后做 commit 的时候点 'Propose file change`。

![](https://img.haoqicat.com/2019031708.jpg)

这样，github 会自动帮我 fork 一个 happypeter/TLCL 出来，把我所做的改动 commit 到我自己的这个 fork 中。这之后，就直接进入发 PR 的界面，操作就和前面的过程一样了。

## 总结

贡献开源项目，过程中可以跟老手讨论，所以是个学习编程的好方法。
