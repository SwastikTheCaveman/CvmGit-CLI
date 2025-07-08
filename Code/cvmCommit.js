const { execSync } = require("child_process");
const error = require("console");
function cvmCommit(commitMessage) {
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
}

module.exports = cvmCommit;