---
title: 团队合作流程
---


前几天还都是自己唱独角戏。但是尽管如此也可以看出 git 带来的便利了。但是 git 更大的威力在于协作。
<!-- 写到目前，读者还只能感受到 git 带来的麻烦，感受不到 git 带来的便利，所以单兵作战的部分还要给大家梳理一下，用了 git 到底有哪些好处，不然，如果我不是跟团队开发，那么是否就没有必要学 git 了 -->


用 git 和他人协作开发项目有多种形式。就像 Progit 书中[列出的]。今天来聊 [github 公司的流程](https://guides.github.com/introduction/flow/index.html)。就是同一个仓库中，大家都有写权限的流程。这个流程显然是自己的团队，自己的项目。

整个过程的主角是“拉取请求”（ Pull Request ），后面简称 PR 吧。

### 给队友添加写权限

用 collaborator 


### 这个流程可以在网页上完成

<!-- https://guides.github.com/activities/hello-world/ -->



<!--  PR 定义

- 可以让队友审核你的代码
- 可以讨论，跟一个 issue 一样

Pull requests are proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators. Like issues, pull requests each have their own discussion forum. See Using Pull Requests.

https://help.github.com/articles/github-glossary/
 -->


一个 pull request 发出之后，如果大家查看之后认为我的代码还需要调整，这样，我可以继续向同一个 PR 上面 push 代码的，所以在 github 的这个 PR 的页面，就形成一条非常清晰的讨论主线。


### 贡献是参与的最高形式

https://github.com/blog/1946-create-pull-requests-with-github-for-mac
https://github.com/blog/1945-quick-pull-requests
https://github.com/blog/1905-linking-merged-pull-requests-from-commits
https://github.com/blog/1943-how-to-write-the-perfect-pull-request


现在在浏览器中，新建删除编辑文件都很方便，而且可以新建 branch 可以说 web 界面对于 Pull Request 的支持已经是很严肃了。
[参考](https://github.com/blog/1557-github-flow-in-the-browser) 。

更多内容可以参考 <http://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project> 。

如何在浏览器中使用 github 的说明，<https://github.com/blog/1557-github-flow-in-the-browser>
