# Code 301: Intermediate Software Development

Welcome to sea-301d1!

# Introduction

We are going to learn about many different topics of web development. The overall structure is based on Model-View-Controller (MVC), which is a common design pattern for web applications.

The general course schedule is:

Full Time  | Part Time    | Topic
-----------|--------------|---------------
Week 1     | Week 1 and 2 | The View
Week 2     | Week 3 and 4 | The Model
Week 3     | Week 5 and 6 | The Controller
Week 4     | Week 7 and 8 | Your Project

Check out the full [Table of Contents](SUMMARY.md).

## Assignments

Each class will have assignments for lab and homework. You can find these in the assignemnts subdirectory in each chapter.

For students, make a subfodler within the assigments folder and submit your homework with a Pull Request and within Canvas.


## Slideshows

Slides should be placed in each chapter's subdirectory.

Slides will be in Keynote and are also exported to PDF and HTML for cross-platform viewing.

To run the slideshows, use live-server or something similar, e.g.:

```
npm -g install live-server
live-server chapter1-persistence
```


# Lint your code
Linting is the process of running a program that will analyse code for potential errors. It is an important part of the quality assurance process.

> `lint` was the name originally given to a particular program that flagged some suspicious and non-portable constructs (likely to be bugs) in C language source code. The term is now applied generically to tools that flag suspicious usage in software written in any computer language.

Make sure you have [ESLint](http://eslint.org) installed. 

- You can install it globally with `npm -g install eslint`.
- For Atom you can install the linter package with: `apm install linter linter-eslint`
- For Sublime Text see https://github.com/roadhump/SublimeLinter-eslint

## Building This Project Locally

This course project is a [Gitbook](http://gitbook.com). This allows it to be read on Github, published to a web server, or PDF, EPUB and MOBI.

To read and edit the Gitbook on your own machine, after cloning this repo, execute these commands in Terminal:
```
npm -g install gitbook-cli
gitbook serve
```

