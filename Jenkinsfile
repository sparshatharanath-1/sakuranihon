pipeline {
    agent any

    environment {
        APP_NAME = "Enterprise-CI-CD-App"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Checking out source code..."
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "Building application..."
                bat 'scripts\\build.bat'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                bat 'scripts\\test.bat'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying application (MAIN branch only)..."
                bat 'scripts\\deploy.bat'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Check logs."
        }
    }
}
