<h1 align="center">CvmGit</h1>

<h2 align="center"> Initialize, commit, and push — all in one command.</h2>

<h2 align="center"> Updates</h2>

- The code has been made more organized and scalable to read and work with.

- The installation and running processes remain the same, but once the code is run using the default command:

```bash
cvmgit "Commit Message" "Repository URL" "Branch Name"
```

—the details are saved in a JSON file.

Next time, if the push is to the same repository and branch, only the following needs to be run:

```bash
cvmgit "Commit Message"
```

And if overwriting is needed, the full command can simply be typed again.




<h2 align="center">Badges</h2>

![Static Badge](https://img.shields.io/badge/license-GPL3-blue?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2FSwastikTheCaveman%2FCvmGit-CLI%3Ftab%3DGPL-3.0-1-ov-file)
![Static Badge](https://img.shields.io/badge/SwastikTheCaveman-blue?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2FSwastikTheCaveman)


<h2 align="center">Technologies Used</h2>

![NPM Version](https://img.shields.io/npm/v/cvmgit?style=for-the-badge&color=red&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcvmgit)![Static Badge](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&color=light%20yellow)![Static Badge](https://img.shields.io/badge/nodejs-yellow?style=for-the-badge&logo=node.js&color=black)![Static Badge](https://img.shields.io/badge/git-yellow?style=for-the-badge&logo=git&color=brown)




<h2 align="center">Installation and Usage</h2>

- Install the Cvmgit package from npm

```bash
npm install -g cvmgit
```

- Run this command following the exact structure

```bash
cvmgit "Commit Message" "Repository URL" "Branch Name"
```

- Here is a dummy example

```bash
cvmgit "Initial commit" "https://github.com/your-username/your-repo.git" "main"
```

<h2 align="center">Procedure</h2>

- Initializes a Git repo (if not already)
- Adds all files
- Commits with your message
- Adds remote origin (skips if already exists)
- Pulls latest (if possible)
- Pushes to your specified branch

<h2 align="center">Important Notes</h2>

- Make sure your repo exists before running
- You must provide all three arguments
- Designed for simplicity — no extra config (yet)
- This is just an early version of the idea

<h2 align="center">Others</h2>
- Please adhere to the CODE_OF_CONDUCT. Thanks for the support.
