pipeline {
    agent { dockerfile true }

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
                sauce('4053b455-7e0d-41ba-ac84-930b1879bf45') {
                  sh "npm run test-wdio"
                }
            }
        }
    }
}
