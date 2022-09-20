pipeline{
    agent any
    stages {
  stage('excute test case') {
    steps {
      //delete report files
    //   bat 'rd/s/q "allure-report"'
    //   bat 'del /q/a/f "allure-results"'
      //install node modules
      bat 'yarn install'
      //run testcases
      bat 'npx cypress run'
    }
  }

}

}