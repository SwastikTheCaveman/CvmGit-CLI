
const { execSync } = require("child_process");
const { error } = require("console");
function cvmPushChanges(branchName) {
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
}

module.exports = cvmPushChanges;
