pipeline {
    agent any
    environment {
        GITHUB_TOKEN=credentials('github-container')
        IP=credentials('yandex-apps-ip')

        IMAGE_NAME='shift-intensive/portal'
        IMAGE_VERSION='latest'
        PORT='3005'
    }
    stages {
        stage('cleanup') {
            steps {
                sh 'docker system prune -a --volumes --force'
            }
        }
        stage('build image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_VERSION .'
            }
        }
        stage('login to GHCR') {
            steps {
                sh 'echo $GITHUB_TOKEN_PSW | docker login ghcr.io -u $GITHUB_TOKEN_USR --password-stdin'
            }
        }
        stage('tag image') {
            steps {
                sh 'docker tag $IMAGE_NAME:$IMAGE_VERSION ghcr.io/$IMAGE_NAME:$IMAGE_VERSION'
            }
        }
        stage('push image') {
            steps {
                sh 'docker push ghcr.io/$IMAGE_NAME:$IMAGE_VERSION'
            }
        }
        stage('deploy') {
            steps {
                withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'yandex-apps-container', keyFileVariable: 'SSH_PRIVATE_KEY', usernameVariable: 'SSH_USERNAME')]) {
                    sh 'echo $SSH_USERNAME'
                    sh 'install -m 600 -D /dev/null ~/.ssh/id_rsa'
                    sh 'rm ~/.ssh/id_rsa'
                    sh 'cp -i $SSH_PRIVATE_KEY ~/.ssh/id_rsa'
                    sh 'ssh -o "StrictHostKeyChecking=no" $SSH_USERNAME@$IP \
                        "sudo docker login ghcr.io -u $GITHUB_TOKEN_USR --password $GITHUB_TOKEN_PSW &&\
                        sudo docker rm -f shift-intensive-portal &&\
                        sudo docker pull ghcr.io/shift-intensive/portal:latest &&\
                        sudo docker run --restart=always --name shift-intensive-portal -d -p $PORT:$PORT -e PORT=$PORT --network shift-intensive ghcr.io/shift-intensive/portal:latest"'
                }
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}