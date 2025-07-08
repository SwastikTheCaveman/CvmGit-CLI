const { execSync } = require("child_process");
const { error } = require("console");
function cvmAdd() {
    try {
        execSync(`git add .`, { stdio: 'inherit' });
        console.log("✅ Added all files to staging area");
    }
    catch (err) {
        console.error("❌ Error adding files to staging area:", err.message);
        process.exit(1);
    }
}
module.exports = cvmAdd;