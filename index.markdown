---
layout: name
title: Home
---
  <h1>GitBeijing Website</h1>
<img class='inset right' src='images/gitbeijing.png' title='GitBeijing' alt='GitBeijing Logo' width='120px' />
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="/GitBeijing{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
