const fs = require('fs');
const path = require('path');
const os = require('os');

const configDir = path.join(os.homedir(), '.cvm');
const configPath = path.join(configDir, 'config.json');

function getConfig() {
    console.log("📦 getConfig called");
    if (!fs.existsSync(configPath)) {
        return { repoUrl: '', branchName: '' };
    }
    const configData = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(configData);
}

function setConfig(newConfig) {
    console.log("💾 setConfig called with:", newConfig);
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
    }
    const current = getConfig();
    const updatedConfig = { ...current, ...newConfig };
    fs.writeFileSync(configPath, JSON.stringify(updatedConfig, null, 2), 'utf8');
    console.log("✅ Config saved to:", configPath);
}

module.exports = { getConfig, setConfig };