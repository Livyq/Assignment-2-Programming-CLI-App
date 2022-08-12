# Difficulties or Challenges During Development
- Git is the Version Control Systems(VCS) for the MusoPlan project. Git can be accessed and managed using command line tools. There are no difficulties or challenges during development. 

# Compliance with the Organisational Requirements
- Git is a distributed version control system that most developers are familiar with and has great online supporting environments.
- In MusoPlan VCS, branches are a part of the development process. The feature branch is used to request a brand-new working directory, staging area, and project history. 
- New commits are recorded in the feature branch's history.
- The commit command is used to save changes to a local repository after staging in Git. Commit scope has been kept to a single change. 
- Version control systems have been configured so each commit contains the author's name and email address
- MusoPlan repository starts with a README.md file and no source code.

# Verification of the VCS Expected Performance and Behaviours
Before starting the MusoPlan project, I create a new Git repository on GitHub which gives me a centrally located place where I can upload my changes.<br>


In the command line, I navigate to the folder where I want to put the repo that I will be downloading. <br>And I run the following command:<br> 
- *git clone [repo URL]*.
## Branches
I create two branches, documentation, and source, which allow me to switch between branches to finish my work. When I finish all the features under the source branch and documentation, I merge both branches into the main.
To create a new branch, I run this command:<br>
-	*git checkout -b my-branch-name*


To make sure my working tree is clean and to see what branch I am on, I run this command:<br>
- *git status*


To switch to a branch in my local repo, I run this command:<br>
-	*git checkout my-branch-name*

## Stages
When I modify files in my working tree, I selectively stage just those changes I want to be part of my next commit, which adds only those changes to the staging area.<br>
To add files to the staging area, I run this command:<br>
-	*Stage all files: git add .*
-	*Stage a folder: git add myfolder* 
-	*Stage a folder: git add myfile name*
## Commits
I  git commit command during the project, which takes the files as they are in the staging area and stores that snapshot permanently in my Git directory.<br>
To include files in the next commit, I run this command:<br>
•	*git commit -m "Message that describes what this change does"*


To check the status again, I run this command:<br>
•	*git status*

If all changes have been committed, and there are no untracked files, it should say nothing to commit, working tree clean.
## Merges
To merge a branch, I first check out the branch that I want to merge another branch into.<br>
When I need to check out the main branch, I run this command:<br>
•	*git checkout main*

When I need to merge documentation and source branches into the main, I run this command:<br>
•	*git merge my-branch-name*

## Push/Pull to Share Commits with Remotes
I need to pull changes from a remote repo before starting my work or pushing to a remote repo. I run this command:<br>
•	*git pull*


To make my first push, I need to connect my local repo to the remote repo.<br> I run this command:<br>
•	*git remote add origin[remote URL]*

After connecting, I run this command:<br>
•	*git push -u origin main*  
•	-u  -u is short for --set-upstream and adds an upstream (tracking) reference 
•	origin represents the URL I just set up in the previous command<br>
•	main is the name of the branch
## commit log
After I have created several commits, I need to look back to see what has happened. The most basic and powerful tool to do this, I run this command:
•	git log
# If your repository was forked from another repository, how would you go about having them integrate your changes to the central repository? 
I can create a pull request to compare my fork to the central repository when I want to collaborate on changes to the repository that I forked from another repository.<br>
•	After making changes and updates to the code, I can commit changes to the default branch.<br> 
•	I can go and create a new pull request on GitHub. After I create a pull request, it will notify the central repository to review my code. The project maintainers can discuss the changes and decide if they want to merge it or not.



