#!/bin/bash

docker stop `docker ps | grep 'stevebrownlee/preworktracker' | awk '{ print $1 }'`

