# demo_project_system
This is Demo cypress project with Dockor impletmented and also execute this script using jenkins (CI/CD).


# Pre request to execute the build on your local mechine 
install Docker on your system 
 for Windows mechine,
 https://docs.docker.com/desktop/install/windows-install/
 for mac mechine,
 https://docs.docker.com/desktop/install/mac-install/
 
# Execute the script using following commends 
docker build -t demo-docker-image . -- build your code with Docker image
docker-compose run e2e-electron    -- execute the script based on your choices ex[e2e-Electron, e2e-chorem, e2e-firefox] 
