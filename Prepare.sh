#!/bin/bash

sudo apt --assume-yes update

sudo apt-get --assume-yes install build-essential

sudo apt-get install curl

sudo curl -fsSL https://get.docker.com/ | sh

sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo docker-compose up --build