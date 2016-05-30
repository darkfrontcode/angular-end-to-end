exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['./specs/*.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
