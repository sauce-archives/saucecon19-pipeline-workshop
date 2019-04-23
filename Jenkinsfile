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
                sauce('77b4da3c-f9e6-487d-bdc2-cabcc0a183cd') {
                  sh "npm run test-wdio"
                }
            }
        }
    }
}