# CvmGit

🧠 Push your code to GitHub with a less commands.


## Badges

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

## Authors

- [@SwastikTheCaveman](https://github.com/SwastikTheCaveman)

## Links

[NPM](https://www.npmjs.com/package/cvmgit)

## Install

```bash
npm install -g cvmgit
```

## Usage

```bash
cvmgit "Commit Message" "Repository URL" "Branch Name"
```

## Example

```bash
cvmgit "Initial commit" "https://github.com/your-username/your-repo.git" "main"
```

## What it does

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

