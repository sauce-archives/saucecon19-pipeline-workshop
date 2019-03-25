pipeline {
    agent any

    stages {
        stage('Build Application') {
            steps {
                sh "npm install"
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh "npm test"
            }
        }
        stage('Deploy Application') {
            steps {
            	sh "npm start &"
            }
        }
        stage('Run Functional Tests') {
            steps {
                  sh "npm run test-wdio"
                }
            }
        }
    }
}