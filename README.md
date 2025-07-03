<h1 align="center">CvmGit</h1>

<h2 align="center"> Initialize, commit, and push — all in one command.</h2>

## Badges

![Static Badge](https://img.shields.io/badge/license-GPL3-blue?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2FSwastikTheCaveman%2FCvmGit-CLI%3Ftab%3DGPL-3.0-1-ov-file)
![Static Badge](https://img.shields.io/badge/SwastikTheCaveman-blue?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2FSwastikTheCaveman)


## Technologies Used

![NPM Version](https://img.shields.io/npm/v/cvmgit?style=for-the-badge&color=red&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcvmgit)
![Static Badge](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&color=light%20yellow)![Static Badge](https://img.shields.io/badge/nodejs-yellow?style=for-the-badge&logo=node.js&color=black)![Static Badge](https://img.shields.io/badge/git-yellow?style=for-the-badge&logo=git&color=brown)




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

## Procedure

- Initializes a Git repo (if not already)
- Adds all files
- Commits with your message
- Adds remote origin (skips if already exists)
- Pulls latest (if possible)
- Pushes to your specified branch

## Notes

- Make sure your repo exists before running
- You must provide all three arguments
- Designed for simplicity — no extra config (yet)
- This is just an early version of the idea

