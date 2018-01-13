# es6_js_base
1.JavaScript基础练习
##使用git

cd workspace/myproject
git init
echo "this is a first file" > readme.md
git add .   或者  git add readme.md
git commit -m "注释"
git remote add origin git@github.com:michaelliao/learngit.git     添加（本地原生项目）或者克隆（别人的项目）origin 是别名也叫主机名？  git remote -v 查看远程的别名url
git clone  https://github.com/zhaowenjun333/es6_js_base.git 
git push -u origin master 
如果git 仓库新建的时候增加了readme.md ，而本地没有需要 pull 并合并到本地仓库和工作空间：git pull --rebase origin master

