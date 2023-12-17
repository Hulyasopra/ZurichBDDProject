1. nodejs 16
2. npm init
3. npm init wdio
Run test --> npm run wdio 
run test --> npm run wdio ./features/*.feature

To make brower incognito add this to wdio.conf.ts: 

 capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions':{
            args: ['--incognito'],
        }
    }],


To create Allure Report 
Make sure you updated : wdio.conf.ts file 
*************
  reporters: ['spec',
        ['allure',{
            outputDir:'allure-results',
            disableWebdriverStepsReporting:true,
            disableWebdriverScreenshotsReporting: true,
            useCucumberStepReporter: true
        }]],

        **********
1. Execute --> npm install @wdio/allure-reporter --save-dev
   Execute --> npm i allure-commandline --save-dev 
   
        And check package.json file has:
   
        *******
         "devDependencies": {
    "@wdio/allure-reporter": "^8.26.2", 
    "allure-commandline": "^2.25.0",
         }
    *****************
JAVA_HOME should be set on environment variables and Version must be 8 or later
2. Execute : npx allure generate allure-results
3. Execute npx allure open
