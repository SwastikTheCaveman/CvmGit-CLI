const { execSync } = require("child_process");
const { error } = require("console");
function cvmBranchRename(branchName) {
    try {
        execSync(`git branch -M ${branchName}`, { stdio: 'inherit' });
        console.log(`✅ Renamed branch to ${branchName}`);
    }
    catch (err) {
        console.error(`❌ Error renaming branch to ${branchName}.Maybe Git wasn't initialized:`, err.message);
        process.exit(1);
    }
}
module.exports = cvmBranchRename;
