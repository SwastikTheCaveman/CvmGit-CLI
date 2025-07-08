#!/usr/bin/env node
const { getConfig, setConfig } = require("../Code/config");
const [, , commitMessage, argRepoUrl, argBranchName] = process.argv;
let { repoUrl: configRepoUrl, branchName: configBranchName } = getConfig();
const repoUrl = argRepoUrl || configRepoUrl;
const branchName = argBranchName || configBranchName;

if (argRepoUrl) {
    setConfig({ repoUrl: argRepoUrl });
}
if (argBranchName) {
    setConfig({
        branchName: argBranchName
    });
}
if (!commitMessage || !repoUrl || !branchName) {
    console.error("❌ Usage: node cvmgit.js\"<commitMessage>\"\"<repoUrl>\"\"<branchName>\"");
    process.exit(1);
}

console.log("🧠 Message", commitMessage);
console.log("🔗 Repo Url", repoUrl);
console.log("🌿 Branch", branchName);

const { execSync } = require("child_process");
const { error } = require("console");
const cvmInitRepo = require("../Code/cvmInit");
const cvmBranchRename = require("../Code/cvmBranch");
const cvmAdd = require("../Code/cvmAdd");
const cvmCommit = require("../Code/cvmCommit");
const cvmAddRemote = require("../Code/cvmAdd");
const cvmPullBranch = require("../Code/cvmPull");
const cvmPushBranch = require("../Code/cvmPush");


cvmInitRepo();
cvmBranchRename(branchName);
cvmAdd();
cvmCommit(commitMessage);
cvmAddRemote(repoUrl);
cvmPullBranch(branchName);
cvmPushBranch(branchName);

