pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        REGISTRY        = 'ghcr.io'
        IMAGE_NAME      = 'siberiacancode/juniors-bootcamp-portal'
        IMAGE_TAG       = 'latest'
        FULL_IMAGE_NAME = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"

        PORT            = '3011'
        CONTAINER_NAME  = 'juniors-bootcamp-portal'

        GITHUB_CREDS    = credentials('github-container')
        SERVER_IP       = credentials('yandex-apps-ip')
    }

    stages {

        stage('Build Docker image') {
            steps {
                sh '''
                    docker build \
                      -t ${IMAGE_NAME}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Login to GHCR') {
            steps {
                sh '''
                    echo "${GITHUB_CREDS_PSW}" | docker login ${REGISTRY} \
                      --username "${GITHUB_CREDS_USR}" \
                      --password-stdin
                '''
            }
        }

        stage('Tag Docker image') {
            steps {
                sh '''
                    docker tag \
                      ${IMAGE_NAME}:${IMAGE_TAG} \
                      ${FULL_IMAGE_NAME}
                '''
            }
        }

        stage('Push Docker image') {
            steps {
                sh '''
                    docker push ${FULL_IMAGE_NAME}
                '''
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'yandex-apps-container',
                        keyFileVariable: 'SSH_KEY_FILE',
                        usernameVariable: 'SSH_USERNAME'
                    )
                ]) {

                    sh '''
                        set -euo pipefail

                        ssh \
                          -i "${SSH_KEY_FILE}" \
                          -o StrictHostKeyChecking=no \
                          "${SSH_USERNAME}@${SERVER_IP}" << EOF

                            set -euo pipefail

                            echo "${GITHUB_CREDS_PSW}" | sudo docker login ${REGISTRY} \
                              --username "${GITHUB_CREDS_USR}" \
                              --password-stdin

                            sudo docker pull ${FULL_IMAGE_NAME}

                            sudo docker rm -f ${CONTAINER_NAME} || true

                            sudo docker run -d \
                              --restart=always \
                              --name ${CONTAINER_NAME} \
                              -p ${PORT}:${PORT} \
                              -e PORT=${PORT} \
                              --network juniors-bootcamp \
                              ${FULL_IMAGE_NAME}

                            sudo docker image prune -f

                            sudo docker logout ${REGISTRY}

EOF
                    '''
                }
            }
        }
    }

    post {
        always {

            sh '''
                docker logout ${REGISTRY} || true
            '''

            sh '''
                docker image rm -f \
                  ${IMAGE_NAME}:${IMAGE_TAG} \
                  ${FULL_IMAGE_NAME} || true
            '''
        }

        success {
            echo 'Deployment completed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}
