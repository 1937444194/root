## 配置 git
git config --global user.name "github的用户名"
git config --global user.email github登录邮箱

1. git init: 把文件夹托管给 git
2. git add .: 保存代码
3. git commit -m 'master': 提交代码
4. git remote add origin https://github.com/1937444194/root.git 拷贝自己的这行代码 创建仓库
5. git push -u origin master: 提交代码到 github 


// 正常进公司以后步骤
1. 创建公钥 私钥
ssh-keygen -t rsa -C "你的github邮箱"
2. 打开公钥
cat ~/.ssh/id_rsa.pub

## 常用命令
git status: 查看哪些文件修改了
git add 文件名 | .: 保存到本地
git commit -m '说明': 提交代码
git push origin 远程分支名: 往远程分支提交代码
git checkout -b 分支名 origin/master: 创建分支
git checkout 分支名: 切换分支 
git branch -v: 查看本地分支
git branch -a: 查看远程分支
git stash: 暂存
git stash list: 查看缓存列表
git stash apply stash@{1} 回到某一个存储上 从0开始
git stash clear
git log: 查看日志
git diff <file>: 查看当前文件修改内容
