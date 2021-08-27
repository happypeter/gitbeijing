# 说明

这里是 gitbeijing.com 项目的源码，基于 [Gatsby](https://www.gatsbyjs.org/) 开发

## deploy

```
rm -rf public
npm run build
cp CNAME public/
cp public/ gitbeijing.github.io/
```

Compiled code will be deployed to https://github.com/gitbeijing/gitbeijing.github.io
