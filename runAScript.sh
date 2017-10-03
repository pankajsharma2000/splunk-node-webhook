#!/usr/bin/env sh
# redirect stdout/stderr to a file

echo $(pwd) >> \
"$SPLUNK_HOME/bin/scripts/ict_output.txt" 

echo "start running ICT script" >> \
"$SPLUNK_HOME/bin/scripts/ict_output.txt" 

export NODE_CONFIG_DIR=/Users/pankajsharma/psharma/splunk-node-webhook/config

 node /Users/pankajsharma/psharma/splunk-node-webhook/index.js &> \
"$SPLUNK_HOME/bin/scripts/ict_output.txt" 

echo "end running ICT script" >> \
"$SPLUNK_HOME/bin/scripts/ict_output.txt" 




