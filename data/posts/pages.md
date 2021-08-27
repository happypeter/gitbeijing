---
title: GitHub Pages 搭建网站
---

Github Pages 是 github 公司提供的免费的静态网站托管服务，用起来方便而且功能强大，不仅没有空间限制，还可以绑定自己的域名。很多非常著名的公司和项目也都用这种方式来搭建网站，如[微软](http://microsoft.github.io/)和 [twitter](http://twitter.github.io/) 的网站，还有 [谷歌的 Material Design 图标](http://google.github.io/material-design-icons/) 网站。

![](https://happypeter.github.io/images/2019031801.jpg)

## 分类和文档

到 <https://pages.github.com/> 上，看到可以创建的网站有两类，一类是为自己或者是自己的组织创建站点，就是新建一个仓库，仓库的名字叫做，username.github.io 或者是 orgnizationname.github.io ，注意这里的 username 和 orgnizationname 要严格替换成你自己的用户名或者组织名，大小写也要区分，不然就会有问题。然后就往仓库里面放页面内容就行了。第二类是为项目创建网站，这个其实主要步骤都是一样的，只不过稍微比创建用户或组织网站复杂一点点。

![](https://happypeter.github.io/images/2019031802.jpg)


下面我们来创建一个组织网站，详细步骤在 <https://pages.github.com/> 页面上是有的。

## 制作过程

下面我们动手来做一下。

首先创建一个组织，名为 gitbeijing 。

![](https://happypeter.github.io/images/2019031803.jpg)

然后再该组织之下，创建一个名为 `gitbeijing.github.io` 的仓库。注意这个仓库的名字是有严格规定的，不要拼错。到新项目中，添加一个新文件，名字叫 index.html ，里面的添加自己想要在网站首页展示的内容。保存之后，过几分钟就可以到 gitbeijing.github.io 这个链接中看到页面了。

## jekyll

> Jekyll 是一个简单的，支持博客结构的，静态网站生成器。

上面这段话是 Jekyll 之父 Tom 在 [blogging-like-a-hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) 中说的。

Jeklly 的具体使用本身跟 git 没有直接联系，所以这里就不细说了。它主要能完成的功能有下面几项：

1. 页面不用 html 来写了，而用更为简单的 markdown 格式来写
2. 可以使用布局文件和片段文件
3. 代码高亮支持
4. 可以使用变量

详细内容参考 [jekyll 官网](http://jekyllrb.com/) 。 我也录了一期详细的 Jekyll 使用视频，放在我的[好多视频](https://haoduoshipin.com/videos/113/)网站上。

Jekyll 的好处是简单易用，同时是 Github Pages 服务直接支撑的，也就是说只要按照 Jekyll 规范来写的内容，推送到 github.com 之后就能够自动转换为 html 显示出来。但是 Jekyll 的不足是灵活性弱，gitbeijing 就没有使用 Jekyll ，而是[使用了 Gatsby ](https://github.com/happypeter/gitbeijing)来生成静态页面，然后把生成好的静态页面再托管到 gitbeijing.github.io 。

## 绑定自己的域名

另外，有一个功能很重要，就是绑定自己的域名。想想如果有天 github 网站被和谐了，那怎么办？如果一开始就是用自己的域名，那就简单了，换一台服务器就好了。

绑定域名的具体的操作步骤在[这里](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) 。我的 gitbeijing.com 这个域名是在 godaddy.com 上买的。 到 godaddy.com 上，添加 A Record 指向 185.199.111.153 ，注意这个 IP 可能会在未来发生变化，具体值请参考[官方文档](https://help.github.com/en/articles/troubleshooting-custom-domains#https-errors)。并且添加一个 CNAME ，以便让 www.gitbeijing.com 可以重定向到 gitbeijing.com 。

![](https://happypeter.github.io/images/2019031804.jpg)


这样后面用 gitbeijing.com 或者 www.gitbeijing.com 就都可以指向 Github 了。但是 github pages 上面网站众多，如何能找到我的网站呢？

![](https://happypeter.github.io/images/2019031805.jpg)

要到 [gitbeijing/gitbeijing.github.io](https://github.com/gitbeijing/gitbeijing.github.io)项目的 settings 页面，添加域名，并强制使用 HTTPS 。

点按钮确认后，github 会在仓库中自动创建 CNAME 文件，里面的内容为

```
gitbeijing.com
```

这样操作结束，可能还要稍微等几个小时给 DNS 扩散以及 HTTPS 的证书的颁发。然后访问 <gitbeijing.com> 或者访问 <www.gitbeijing.com> 都可以跳转到 <https://gitbeijing.com> ，并打开网站了，效果完美。

## 总结

喜欢分享是一个好程序员的标志，我给我的很多初学编程的朋友的建议就是，先学习如何用 Github Pages 搭建自己的个人网站，一来可以锻炼一些基本的网站开发技巧，二来可以建立一个分享的阵地。
