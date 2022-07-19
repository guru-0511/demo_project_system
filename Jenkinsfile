pipeline {
	agent any
	stages {
		stage('Clone Git Repo'){
				steps{
                    sh "git clone https://github.com/guru-0511/demo_project_system.git"
		    }
		}
		stage('Docker build'){
				steps{
					sh 'docker build -t demo-docker-image .'
				}
		}
		stage('Docker compose with electron'){
				steps{
					sh 'docker-compose run e2e-electron'
				}
		}
	}
}
