// baseUrl: 'http://localhost:3000',
// seleniumAddress: 'http://localhost:4444/wd/hub',

exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'cucumber',
    specs: [
        './features/*.feature'
    ],
    jasmineNodeOpts: {
        showColors: true
    },
    cucumberOpts: {
        require: './steps/definitions.js',
        format: 'pretty' // or summary
    }
};
