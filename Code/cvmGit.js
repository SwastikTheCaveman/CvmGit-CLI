#!/usr/bin/env node
const [, , commitMessage, repoUrl, branchName] = process.argv;
if (!commitMessage || !repoUrl || !branchName) {
    console.error("❌ Usage: node cmrepopush.js\"<commitMessage>\"\"<repoUrl>\"\"<branchName>\"");
    process.exit(1);
}

console.log("🧠 Message", commitMessage);
console.log("🔗 Repo Url", repoUrl);
console.log("🌿 Branch", branchName);

const { execSync } = require("child_process");
const { error } = require("console");

try {
    execSync(`git init`, { stdio: 'inherit' });
    console.log("✅ Initialized git repository");
}
catch (err) {
    console.error("❌ Error initializing git repository:", err.message);
    process.exit(1);
}
try {
    execSync(`git branch -M ${branchName}`, { stdio: 'inherit' });
    console.log(`✅ Renamed branch to ${branchName}`);
}
catch (err) {
    console.error(`❌ Error renaming branch to ${branchName}.Maybe Git wasn't initialized:`, err.message);
    process.exit(1);
}
try {
    execSync(`git add .`, { stdio: 'inherit' });
    console.log("✅ Added all files to staging area");
}
catch (err) {
    console.error("❌ Error adding files to staging area:", err.message);
    process.exit(1);
}
try {
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    console.log("✅ Committed changes with message:", commitMessage);
}
catch (err) {
    const fullErrormessage = err.stderr?.toString() || err.stdout?.toString() || err.message || "";
    if (
        fullErrormessage.includes("nothing to commit") ||
        fullErrormessage.includes(", working tree clean")) {
        console.warn("⚠️ No changes to commit, skipping commit.");
    } else if (fullErrormessage.includes("You have unstaged changes")) {
        console.warn("⚠️ You have unstaged changes, skipping commit.");
    } else {
        console.error("❌ Not a git repository. Please initialize a git repository first.");
        process.exit(1);
    }
}
try {
    execSync(`git remote add  origin ${repoUrl}`, { encoding: 'utf8' });
    console.log("✅ Added remote repository:", repoUrl);
}
catch (err) {
    const fullOutput = err.stderr?.toString() || err.stdout?.toString() || err.message || "";
    if (fullOutput.includes("remote origin already exists.")) {
        console.warn("⚠️ Remote repository already exists, skipping addition.....");
    } else {
        console.error("❌ Error adding remote repository:", fullOutput);
        process.exit(1);
    }
}
try {
    execSync(`git pull origin ${branchName} --allow-unrelated-histories`, { encoding: 'utf8' });
    console.log(`✅ Pulled latest changes from remote branch ${branchName}`);
} catch (err) {
    const fullErrormessage = err.stderr?.toString() || err.stdout?.toString() || err.message || "";
    if (
        fullErrormessage.includes("couldn't find remote ref") ||
        fullErrormessage.includes("does not appear to be a git repository") ||
        fullErrormessage.includes("Repository not found") ||
        fullErrormessage.includes("fatal:couldn't find remote ref") ||
        fullErrormessage.includes("fatal: not a git repository")
    ) {
        console.warn("⚠️ Remote empty or invalid, skipping pull.");
    } else if (fullErrormessage.includes("You have unstaged changes")) {
        console.warn("⚠️ You have unstaged changes, skipping pull.");
    }
    else {
        console.error("❌ Error pulling changes from remote branch:", fullErrormessage);
        process.exit(1);
    }
}
try {
    execSync(`git push -u origin ${branchName}`, { encoding: "utf8", stdio: 'inherit' });
    console.log(`✅ Pushed changes to remote branch ${branchName}`);
} catch (err) {
    const fullErrormessage = err.stderr?.toString() || err.stdout?.toString() || err.message || "";
    if (fullErrormessage.includes("authentication failed") ||
        fullErrormessage.includes("Please make sure you have the correct access rights") ||
        fullErrormessage.includes("Repository not found") ||
        fullErrormessage.includes("fatal: could not read Username") ||
        fullErrormessage.includes("fatal: Authentication failed")
    ) {
        console.error("❌ Authentication failed. Please check your credentials.");
    } else {
        console.error("❌ Error pushing changes to remote branch:", fullErrormessage);
        process.exit(1);
    }
}
