---
layout: default
---
<br />
<h1 style="text-align:center">GitBeijing</h1>
<br />

Welcome to GitBeijing, here we talk about how to use [git-scm][git] to do our
job neatly and efficiently, and also any other topics related to Linux and
Open Source. We will try to foucus on something simple and useful, so that
everybody will be interested and join the conversation.

[git]: http://git-scm.com

We have a 
<i><a href="http://github.com/happypeter/GitBeijing/wiki">group wiki</a></i>
for people to post their random ideas and questions. And feel free to 
join us at <i><a href="http://www.beijinglug.org/en/index.php?option=com_groupjive&action=gj.core.groups.showgroup&groupid=31&Itemid=134http://www.beijinglug.org/en/index.php?option=com_groupjive&action=gj.core.groups.showgroup&groupid=31&Itemid=134">GitBeijing group page at BLUG website</a></i>.

<p><br /><b>Blog:</b></p>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="/GitBeijing{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>

<p><br /><b>Contact Information:</b></p>

<blockquote>
<p>
happypeter1983 at gmail.com
</p>
</blockquote>


