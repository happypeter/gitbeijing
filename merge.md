---
layout: book
title: merge
---


### 远程分支
同样都叫 master 分支，但是本地的 master 和 远程的 master 也是两个分支

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
