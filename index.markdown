---
layout: default
---
  <h1>GitBeijing Website</h1>
welcome
<img class='inset right' src='images/gitbeijing.png' title='GitBeijing' alt='GitBeijing Logo' width='66px' />
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="/GitBeijing{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>

<a href="http://happypeter.github.com">happypeter</a>
