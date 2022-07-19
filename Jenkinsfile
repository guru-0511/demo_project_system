pipeline {
	agent any
	stages {
		stage('Clone Git Repo'){
				steps{
                    git url:'https://github.com/guru-0511/demo_project_system.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					sh 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					sh 'npm test'
				}
		}
	}
}
