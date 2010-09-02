---
layout: default
---
<br />
<h1 style="text-align:center">GitBeijing</h1>
<br />

<p>
Welcome.
</p>
<p><br /><b>Blog:</b></p>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="/GitBeijing{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>

<p><br /><b><a href="http://github.com/happypeter/GitBeijing/wiki">wiki</a></b></p>
<p><br /><b><a href="http://www.beijinglug.org/en/index.php?option=com_groupjive&action=gj.core.groups.showgroup&groupid=31&Itemid=134http://www.beijinglug.org/en/index.php?option=com_groupjive&action=gj.core.groups.showgroup&groupid=31&Itemid=134">BLUG GROUP PAGE</a></b></p>
<p><br /><b>Contact Information:</b></p>

<blockquote>
<p>
happypeter1983 at gmail.com
</p>
</blockquote>


