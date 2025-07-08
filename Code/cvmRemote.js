const { execSync } = require('child_process');
const { error } = require('console');
function cvmAddRemoteRepo(repoUrl) {
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
}

module.exports = cvmAddRemoteRepo;