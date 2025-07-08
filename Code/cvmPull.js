
const { execSync } = require('child_process');
const { error } = require('console');
function cvmPullBranch(branchName) {
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
}

module.exports = cvmPullBranch;