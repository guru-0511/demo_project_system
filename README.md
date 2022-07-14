# demo_project_system
This is Demo cypress project with Dockor impletmented and also execute this script using jenkins (CI/CD).


# Pre request to execute the build on your local mechine 
Install Docker on your system <br />
 for Windows mechine,<br />
 https://docs.docker.com/desktop/install/windows-install/<br />
 for mac mechine,<br />
 https://docs.docker.com/desktop/install/mac-install/<br />
 
# Execute the script using following commends 
docker build -t demo-docker-image . <br />

run the script based on choices ex[e2e-Electron, e2e-chorem, e2e-firefox] <br />
docker-compose run e2e-electron   
