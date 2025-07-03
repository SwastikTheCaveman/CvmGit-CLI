# CvmGit

## Push your codes to GitHub with a less commands.


## Badges

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
![Static Badge](https://img.shields.io/badge/SwastikTheCaveman-blue?style=for-the-badge&link=https%3A%2F%2Fgithub.com%2FSwastikTheCaveman)


## Technologies Used

![NPM Version](https://img.shields.io/npm/v/cvmgit?style=for-the-badge&color=red&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcvmgit)
![Static Badge](https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=javascript&color=black)![Static Badge](https://img.shields.io/badge/NodeJS-green?style=for-the-badge&logo=node.js&labelColor=black&color=lightgreen)![Static Badge](https://img.shields.io/badge/Git-black?style=for-the-badge&logo=git&labelColor=black&color=red)




## Install

```bash
npm install -g cvmgit
```

## Basic Command

```bash
cvmgit "Commit Message" "Repository URL" "Branch Name"
```

## Example

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

