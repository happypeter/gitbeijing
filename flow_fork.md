---
title: 贡献开源项目的流程
---

Github 是目前世界上最大的开源项目的托管交流平台。[贡献开源项目](https://guides.github.com/activities/contributing-to-open-source/)的流程也是 Github 全力支持的，也一样是 Github Flow。不过在团队内部，大家都是有写权限的。但是网上的开源项目参与者众多。如果你一上去就跟项目拥有着说，Hey，你给我加个写权限吧，别逗了，人家也不认识你，怎么可能呢？


### Fork

所以第一步是 Fork 这个项目。




![](images/flow_fork/flow.png)




<!-- happycasts 60 详细图解了 fork 的流程 -->

这样 billie66 就会看到 happypeter 发的 Pull Request，然后决定是否要把 happypeter 写的代码 merge 进自己的仓库。


下面来实际操作一下，对应上面图示的过程，比如现在我想要贡献 TLCL 这个项目，同时假设我 happypeter 不是这个项目的 collabrator 。

我可以来到项目的页面上，点击 fork 按钮。


fork 结束之后就可以看到在我的用户名下，多了 TLCL 这个项目。所以我可以来 clone 这个项目了。

这样我可以修改然后 commit 然后把这个 commit push 到我自己的那个 fork 上了。


这样如果 billie66 merge 了 happypeter 的 pull request 最终版本历史就如下图所示



一个 pull request 完成之后，随着时间的推移上游的仓库中会有新的 commit 进来，所以我自己的这个 fork 就需要更新了。我自己通常的做法是不更新，直接删除掉，未来需要再贡献的时候重新 fork 一份。但是如果你对这个项目发 Pull Request 比较频繁，还是学会更新 fork 更为方便一些，这个可以参考 [codeschool 的这个视频](http://campus.codeschool.com/courses/mastering-github/level/1/section/4/video/1) 。


更好的，你可以参与到其他人的代码之中。参与讨论就是到 github issues ，但是如果要贡献代码就要用到  Pull Request，这两个功能后面都会有专门的章节来介绍。



http://happycasts.net/episodes/58 network 可以提一下


### 基于 fork 的快速 PR
前面介绍过[快速 PR]()了，不过是基于一个我自己有写权限的项目。那对于人家的开源项目，我根本就不能修改，能不用在网页上直接发开速 PR 呢？幸运的是，答案是肯定的。

现在我来的 @bille66 的这个项目，打开一个我想要编辑的文件，注意，现在打开的不是我自己那个 fork 。



<!--  - http://happycasts.net/episodes/60
  - 图示整个过程 
改进这期 视频 可以做一套更简单点的，符合本章内容的图示
更简单，更美观是我未来的一个方向了

  -->

- http://happycasts.net/episodes/37
  - 实际 fork 的流程
