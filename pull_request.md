---
layout: book
title: Pull Request 拉取请求
---

https://guides.github.com/activities/forking/

https://guides.github.com/activities/hello-world/

https://guides.github.com/introduction/flow/

如果是自己人，可以考虑直接加这个人做 collabrator 这样这个人就可以直接向项目中 push 代码了，就不用 PR 了。

现在在浏览器中，新建删除编辑文件都很方便，而且可以新建 branch 可以说 web 界面对于 Pull Request 的支持已经是很严肃了。
[参考](https://github.com/blog/1557-github-flow-in-the-browser) 。

先将 be_social.md 再讲这个



github 对 UI 的简约是有极为苛刻的要求的，所以很多功能是隐藏的， [参考](http://zachholman.com/talk/git-github-secrets/) 。
网页界面这里也能给别人的项目进行贡献，这个是通过 Pull Request 来实现的，这个后面要细聊，这里先过了。

更多内容可以参考 <http://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project> 。

如何在浏览器中使用 github 的说明，<https://github.com/blog/1557-github-flow-in-the-browser>


说说宏观思路。我现在有一个项目，你想来贡献一些补丁进来，如果咱俩跟本就不认识，你直接给我来信，说 Peter 你把我加成项目的 collabrator 吧？那结果可想而知。
但是如果，你不写信，而是先把要改的东西改好，patch 给我发过来，这样我作为项目维护者必然觉得你这个人很靠谱，愿意跟你讨论，而且很有可能会把你的 patch 融合到项目中的。这个基本上就是 github 上最为常见的，用 PR 的形式来贡献代码。

https://help.github.com 第三步

这个属于高级内容了，要放到所有的基础讲完之后讲

- http://happycasts.net/episodes/60
  - 图示整个过程

- http://happycasts.net/episodes/37
  - 实际 fork 的流程

- 要不要提一下代码冲突的问题
  - 也可以到 merge 和 rebase 相应的章节中展示一下代码冲突发生后如何处理

- 发 pr 之前做一下 git pull --rebase 是很好的

