---
title: Github Pages
---


Github Pages 是 github 公司提供的免费的静态网站托管服务，用起来方便而且功能强大。在 <https://pages.github.com/> 首页上可以看到很多用 Github Pages 托管的网站，很漂亮。

![](images/pages/logo.png)

### 你甚至不用会 git


到 <https://pages.github.com/> 上，可以看到可以创建的网站有两类，一类是为自己或者是自己的组织创建站点，这个比较简单，就是新建一个仓库，仓库的名字叫做，username.github.io 或者是 orgnizationname.github.io ，注意这里的 username 和 orgnizationname 要严格替换成你自己的用户名或者组织名，不然就会有问题。然后就往仓库里面放内容就行了。第二类是为项目创建网站，这个其实主要步骤都是一样的，只不过网站的存放位置不一样，是在这个项目仓库里，新建一个分支 gh-pages，然后来添加网站内容。

下面咱俩一块动手来建一个项目网站，如下图这样

![](images/pages/project_site.png)

在 <https://pages.github.com/> 选择 `Project Site` 然后下面有两项，一个是用自动生成器自动生成一个漂亮的网站，咱们选另一个方案，自己手写，因为这个方案比较能展示清楚本质。

### 日常的流程是这样

本地有一个 git 仓库，github.com 上也有这个仓库。每次在本地用自己喜欢的编辑器做一下修改，commit 并 push，你的修改就上线了。整个过程实现了版本控制，数据备份，同时最最让人心醉的是 push 即是部署，还有比这更方便的吗？

>First, all my writing would be stored in a Git repository. This would ensure that I could try out different ideas and explore a variety of posts all from the comfort of my preferred editor and the command line. I’d be able to publish a post via a simple deploy script or post-commit hook. Complexity would be kept to an absolute minimum, so a static site would be preferable to a dynamic site that required ongoing maintenance. My blog would need to be easily customizable; coming from a graphic design background means I’ll always be tweaking the site’s appearance and layout.


https://guides.github.com/features/pages


### 使用自动生成功能

https://guides.github.com/features/pages/

- github pages
  - jekyll 本身肯定不讲了，http://happycasts.net/episodes/6 应该更新啦
  - github pages 的基本过程，用纯 html 的形式演示一下
  - 总之就是一个视频的空间，内容要选最基础的

  http://happycasts.net/episodes/6
  http://happycasts.net/episodes/36

### jekyll 的基本运行原理

Over the last month I’ve brought these concepts to fruition and I’m pleased to announce Jekyll. Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), runs it through Textile and Liquid converters, and spits out a complete, static website suitable for serving with Apache or your favorite web server. If you’re reading this on the website (http://tom.preston-werner.com), you’re seeing a Jekyll generated blog!

### 自己的域名

http://coldbutsweet.com/

https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/

  ### 总结
  上面就是 github pages 的基本操作，其实 github pages 后台还有 jekyll 框架的支持，所以还是很灵活和方便的，但是 jekyll 本身的应用跟 git 没有什么关系。所以不是本书中要介绍了，我录了一个 happycasts 视频，有空你可以看看。