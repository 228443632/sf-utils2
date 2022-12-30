#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文档
#npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/compile

# 删除
#cd -
#rm -rf docs/.vuepress/dist

#部署到本人的服务器上
ip="root@8.133.185.32"
pem="/Users/bianpengfei/卞鹏飞/工作空间/服务器密钥/本人阿里云服务器.pem"
public_url="/front/projects/fr/@bianpengfei-utils/v2/"

ssh -i $pem $ip "mkdir -p $public_url && rm -rf $public_url/*"
scp -i $pem -r ./fr/@bianpengfei-utils/v2/* $ip:/$public_url

# 部署到Coding
#msg="来自Gitee的自动部署，更新于$(TZ=UTC-8 date "+%Y-%m-%d %H:%M:%S")"
#codingUrl=https://gitee.com/bianpengfei/bianpengfei.git

#git config --global user.name "bianpengfei"
#git config --global user.email "228443632@qq.com"

#git init
#git remote add origin $codingUrl
#git add -A
#git commit -m "${msg}"
#git push -f origin master

