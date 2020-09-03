// Use the npm run generate:report option at the cli
const reporter = require("cucumber-html-reporter");

const options = {
    // Themes
    // There are 4 different themes available
    // 1) Bootstrap
    // 2) Hierarchy
    // 3) Foundation
    // 4) Simple
    theme: "bootstrap",
    // Grab the auto created json file
    jsonFile: "cucumber_report.json",
    // This will transform the JSON file into html
    output: "cucumber_report.html",
    reportSuiteAsScenarios: true,
    // Auto launch the report
    launchReport: true
};

// Pass the options into the report generator
reporter.generate(options);
