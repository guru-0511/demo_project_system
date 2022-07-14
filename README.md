# demo_project_system
This is Demo cypress project with Dockor impletmention and also execute this script using jenkins (CI/CD).


# Follow the below stpes to run the porject on your local mechine.
 Clone the git repo 

# Pre request to execute the build on your local mechine using Docker. 
## Install Docker on your system <br />
 ### for Windows mechine,<br />
 https://docs.docker.com/desktop/install/windows-install/<br />
 ### for mac mechine,<br />
 https://docs.docker.com/desktop/install/mac-install/<br />
 
# Execute the script using Docker following commends 
$ docker build -t demo-docker-image . <br />

## run the script based on choices ex[e2e-Electron, e2e-chorem, e2e-firefox] <br />
$ docker-compose run e2e-electron   


# Excute the Script using local mechine 
## Install npm node package  
https://nodejs.org/en/download/  <br />
after nodejs download completes. Go to the project path and run the follwoing command  <br />
$ npm install  <br />

after sucessfull installation and run the cypress by using this command  <br />
$ npm run scripts <br />
