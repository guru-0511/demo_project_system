pipeline {
	agent any
	stages {
		stage('Clone Git Repo'){
				steps{
					
                    sh "git clone https://github.com/guru-0511/demo_project_system.git"
		    }
		}
		stage('Install Dependencies'){
				steps{
					sh 'npm install'
				}
		}
		stage('Run Cypress Tests'){
				steps{
					sh 'npm run'
				}
		}
	}
}
