# Day 1 Computer Setup

## Install Atom

  If you haven't already, install [Atom](https://atom.io). Atom is similar to Sublime Text in that it is also a text editor. Atom however, is free, open-source, and cross-platform. Please use Atom during Code 301.
  
  Atom's [documentation](https://atom.io/docs/latest) is top-notch. Go check it out. Make sure you're looking at the docs for the latest version.

## Install Node
  *Note* If you get an error while installing these packages such as "try again as root/administrator", you may need to use the `sudo` command to get administrator access. For example `sudo apt-get install nodejs`.

  **Linux instructions**
  
  To install Node, open your Terminal, and enter:
  
  `apt-get install nodejs`

  **Mac instructions**
  
  If you took Code 201, you should already have Homebrew installed. If you have not, follow the guide on [this page](https://github.com/codefellows/code-201-prework/blob/master/prework/mac/2_homebrew.md#install-homebrew).
  
  To install Node, open your Terminal, and enter:
   
  `brew install node`

  **Windows instructions**
  
  To install Node, go [here](https://nodejs.org/en/download/), and then download and run the Windows Installer. Make sure you do not deselect any of the Node components such as NPM during the installation.

### Verify the Node installation
Now let's verify that it is installed. Enter the following into your terminal:

`node -e 'console.log("works")'`

You should get a response that says "works". If not, try reinstalling Node again

## Install eslint and live-server Node packages

Now that you have Node installed, you can install Node packages using its package manager, **NPM**. Open your Terminal (Git Bash on Windows) and enter:

`npm -g i eslint live-server`

 You should see a lot of feedback as it installs.

### Verify the Node packages installation
Now let's verify that it is installed. Enter the following into your terminal:

`npm list -g --depth=0`

You should get a list back that lists linter and linter-eslint.

![](http://i.imgur.com/1ITioP1.png)

## Install linter and linter-eslint Atom packages
For this next part, you will have Atom's package manager **apm** install some packages. Go [here](https://atom.io/docs/v0.194.0/using-atom-atom-packages#command-line) to verify it's enabled. Once you have verified that apm commands will work, enter this on your Terminal:

`apm install linter linter-eslint`

You should get two success messages while it installs the linter and linter-eslint packages.

### Verify the Atom packages installation
Enter the following into your Terminal:

`apm ls`
 
 ![](http://i.imgur.com/Jlv6LeP.png)
 
 You should get a long list and at the end you should get a list of packages you installed for Atom. Linter and linter-eslint should be on that list.

Congrats! You're all done.
