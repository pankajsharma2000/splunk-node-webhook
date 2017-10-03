# splunk-node-webhook


This Version One: The simple version.

Setup:
1. install node https://nodejs.org/en/download/
2. install npm https://www.npmjs.com/get-npm 
3. install splunk sdk http://dev.splunk.com/javascript
4. do a "npm install" in home directory of this app. 
5. update config/default.json with your info
6. run "node index.js"

The runAScript.sh file needs to copied to: "$SPLUNK_HOME/bin/scripts". This is the file that you are going to add in your alert by choosing "Run a script" alert action. Also, please note the absolute path in runAScript.sh file to set "NODE_CONFIG_DIR" and to run "node" command.



You can use webhook.site to test the post to webhooks.


