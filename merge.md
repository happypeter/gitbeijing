---
title: 合并分支
---

合并分支有两种主要形式， merge 和 rebase ，下面结合实际操作，说说这二者的区别。

<!-- https://help.github.com/articles/merging-branches/ -->

merge commit 有个特点，就是它是有多于一个 parent 的。

### 远程分支



同样都叫 master 分支，但是本地的 master 和 远程的 master 也是两个分支

<!-- 如果操作中绕不开了，就给大家引入 tracking branch 的概念 -->


运行 `git pull` 的时候如果自己本地也有修改，那么最好是用 `git pull --rebase`，这个在 git 牵手 github 那一章已经提到了，这里解释一下原因。

{% highlight console %}
$ git config --global pull.rebase true
{% endhighlight %}

把远端仓库的 master 和本地 mater 合并，也是两个分支的合并，同时是非常常见的一种情形。

如果不小心用 git pull 下了远端的内容，也没有关系，可以使用 `git push --force` 来进行 push 

https://octicons.github.com/ 上面还有专门一个 icon 叫 force-push 。

Progit 3.5

- fast-forward
  - http://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging

https://help.github.com/articles/merging-branches/

Merge

Merging takes the changes from one branch (in the same repository or from a fork), and applies them into another. This often happens as a Pull Request (which can be thought of as a request to merge), or via the command line. A merge can be done automatically via a Pull Request via the GitHub.com web interface if there are no conflicting changes, or can always be done via the command line. See Merging a pull request.

https://help.github.com/articles/github-glossary/

merge conflicts

{% highlight console %}
$ git merge iss53
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
{% endhighlight %}

上面的 `CONFLICT` 意思是“代码冲突”，如果你在两个分支中改动了同一个地方，并且改的不一致，merge 的时候就会有冲突。
运行 `git status` 就可以看到到底都有哪些文件中发生了冲突

{% highlight console %}
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)

    both modified:      index.html

no changes added to commit (use "git add" and/or "git commit -a")
{% endhighlight %}

打开存在冲突的文件，看到如下内容

{% highlight text %}
<<<<<<< HEAD:index.html
<div id="footer">contact : email.support@github.com</div>
=======
<div id="footer">
 please contact us at support@github.com
</div>
>>>>>>> iss53:index.html
{% endhighlight %}

注意上面的 `HEAD` 是代表当前分支。
