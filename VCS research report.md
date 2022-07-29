# SVN
## Introduction 
Subversion is probably the version control system with the widest adoption. Most open-source projects use Subversion as a repository because other larger projects, such as SourceForge, Apache, Python, Ruby and many others, use it as well. Google Code uses Subversion exclusively to distribute code.
## Benefit of SVN
Because of Subversion’s popularity, many different Subversion clients are available. If you’re a Windows user, Tortoise SVN is a great file browser for viewing, editing and modifying your Subversion code base. If you’re on a Mac, Versions is an elegant client that provides a “pleasant way to work with Subversion.” Xcode is Apple’s developer environment and Subversion client that ships with Leopard on a Mac.

# Git 
## Introduction 
Git is the new fast-rising star of version control systems. It offers a much different type of version control in that it’s a distributed version control system. With a distributed version control system, there isn’t one centralized code base to pull the code from. 
## Benefit of Git 
With a VCS, everybody on the team can work absolutely freely - on any file at any time. The VCS will later allow you to merge all the changes into a common version. There's no question where the latest version of a file or the whole project is. It's in a common, central place: your version control system. That means different branches hold different parts of the code. Other version control systems, such as SVN and CVS, use centralized version control, meaning that only one master copy of the software is used.

# Mercurial 
## Introduction 
Mercurial is another open-source distributed version control system, like Git. Mercurial was designed for larger projects, most likely outside the scope of designers and independent Web developers. That doesn’t mean that small development teams can’t or shouldn’t use it. Mercurial is extremely fast, and the creators built the software with performance as the most important feature. The name “mercurial” is an adjective that means “Relating to or having characteristics (eloquence, swiftness, cleverness) attributed to the god Mercury.”
## Benefit of Mercurial
Aside from being very fast and scalable, Mercurial is a much simpler system than Git, which is why it appeals to some developers. There aren’t as many functions as possible to learn, and the functions are similar to those in other CVS systems. It also comes equipped with a stand-alone Web interface and extensive documentation on understanding Mercurial if you have been using another system.
 
# MusoPlan VCS choice  
Git will be the VCS for this project. There are many benefits of using Git for the project. Most of the developers are familiar with Git, because of its speed, workflow compatibility, and open-source foundation. 
With Git, software teams can experiment without fearing that they’ll create lasting damage to the source code. Teams using a Git repository can tackle projects of any size with efficiency and speed.
Git makes branching easy, because having an entire repository’s history on their local workstation ensures that they can quickly experiment and request a code review. Developers benefit from fast feedback loops and can share changes with team members before merging the changeset.

# Git Installation Process
Steps For Git Installation on Windows 10
*	Download and install Git
*	Git bash interface
*	Use basic Git commands
*	Create a local repository
*	Connect to the remote repository
*	Push the file to GitHub

## Installation issues and disruptions 
When installing Git, you may come up with errors like: 
Fatal error: git is not installed or not in the PATH
npm ERR! weird error 1
npm ERR! not ok code 0
To solve this issue, we need to make sure we check the option "Run Git from Windows Command Prompt" during Git installation.

## Pre-installation factors
To get an automated installation you can use the Git Chocolatey package. Note that the Chocolatey package is community maintained.
Configuration process

## Configuration process
When you've successfully started the installer, you should see the Git Setup wizard screen. Follow the Next and Finish prompts to complete the installation.
Open a Command Prompt and run the commands .git/config  to configure your Git username and email. These details will be associated with any commits that you create.
