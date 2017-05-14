##<font color="red"> git学习笔记 </font>##
**1. git是什么？他有什么作用？他的优点在哪里、和svn比较有什么特别之处？**

&emsp;git是一种分布式管理控制系统，可以克隆git仓库到本地，自己创建分支来修改提交代码，最后和主分支合并，并且git可以查看历史版本记录。和svn相比git可以不用连接网络来进行操作，修改代码后如果在svn上commi后发现提交的代码有错误也无法撤销提交，而在git上提交只是提交到了自己的本地仓库，然后再push到主仓库。



**2.git的常见操作**

- git init (初始化git)

- git  add（当你对代码进行修改后要进行提交，但是git add只是提交到暂存区）
-  git commit（git commit是将在暂存区的修改全部提交到分支上）

- git clone（将远程的项目克隆到本地）



- git checkout （创建切换分支）

- git branch（查看当前分支）

- git pull（git pull就是更新代码，一般是先commit后在git pull）

- git push（将自己的分支推到远程库）

**3.如何用git进行团队合作/git的工作流程**





&emsp;3.1 首先在github上建立一个repository，打开git bash,输入git init 进行初始化操作，将修改完要上传的文件进行提交，输入git add,git commit. (git add只是将改动添加到暂存区，而git commit 是将改动提交到master分支上)



&emsp;3.2 将远程的仓库进行关联，输入 git remote add origin git@github.com youtgithubname/XXX.git ,然后将本地推送到关联的仓库 git push origin master



&emsp;3.3 将github上的项目克隆到本地 git clone 克隆了一个本地库。克隆后我们建立一个自己的分支 git checkout -b mybrench 这样 我们本地的mybrench上就有了远程master上的内容。



&emsp;3.4 git merge 将分支合并，这里可能会出现冲突，用 git log 可以查看分支合并情况



&emsp;3.5 推送分支。将分支上的所有本地提交推送到远程库上 git push.git push origin branch-name 推送自己的修改，当出现远程分支比你的本地更新，则需要git pull在进行提交。
>>
>>
>.






<div style="float:right;text-align:right;">5/14/2017 6:29:55 PM<br>迪迪</div>












