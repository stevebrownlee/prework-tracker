#!/bin/bash
#
# Access with http://tracker.nss.local:8081/
#
if [ -z $1 ]
then
  docker run -d -it -p 8081:8081 stevebrownlee/preworktracker:latest

else
  docker run -it -p 8081:8081 stevebrownlee/preworktracker:latest

fi

