const { execSync } = require("child_process");
function cvmInitRepo() {
    try {
        execSync(`git init`, { stdio: 'inherit' });
        console.log("✅ Initialized git repository");
    }
    catch (err) {
        console.error("❌ Error initializing git repository:", err.message);
        process.exit(1);
    }
}

module.exports = cvmInitRepo;