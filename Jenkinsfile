pipeline {
    agent any

    options {
        disableConcurrentBuilds(abortPrevious: true)
        timeout(time: 20, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    environment {
        GITHUB_TOKEN    = credentials('github-container')
        COOLIFY_WEBHOOK = credentials('coolify-webhook')
        COOLIFY_TOKEN   = credentials('coolify-api-token')

        IMAGE_NAME      = 'siberiacancode/juniors-bootcamp-portal'
        IMAGE_VERSION   = 'latest'
        NEXT_PUBLIC_API_URL = 'http://juniorsbootcamp.ru/api'
    }

    stages {
        stage('build & push') {
            when {
                anyOf {
                    branch 'main'
                    expression { env.GIT_BRANCH == 'origin/main' }
                }
            }

            steps {
                sh '''
                    echo "$GITHUB_TOKEN_PSW" |
                        docker login ghcr.io \
                            -u "$GITHUB_TOKEN_USR" \
                            --password-stdin

                    docker build \
                        --build-arg NEXT_PUBLIC_API_URL="$NEXT_PUBLIC_API_URL" \
                        -t "ghcr.io/$IMAGE_NAME:$IMAGE_VERSION" \
                        .

                    docker push "ghcr.io/$IMAGE_NAME:$IMAGE_VERSION"
                '''
            }
        }

        stage('deploy via Coolify') {
            when {
                anyOf {
                    branch 'main'
                    expression { env.GIT_BRANCH == 'origin/main' }
                }
            }
            steps {
                sh '''
                    curl --fail --show-error --silent --request POST "$COOLIFY_WEBHOOK" \
                         --header "Authorization: Bearer $COOLIFY_TOKEN"
                '''
            }
        }
    }

    post {
        always {
            sh 'docker logout ghcr.io || true'
        }

        cleanup {
            sh 'docker image prune -f || true'
        }
    }
}
