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
            bat 'npx cypress run --record --key 6144d4a6-58a4-4e3b-99ff-85c93a6c43d8 --parallel'
            }
        }

}
post {
  always {
    allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
    junit 'allure-results/*.xml'
    emailext body: '''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Report</title>
  </head>
  <body>
    <div style="text-align:left">
        <h1 style="font-size:medium;color: black;">Test Report Refer to link: </h1>
        <a href="http://localhost:8080/job/CypressWebAutoTest/allure/" target="_blank" style="color:cadetblue">http://localhost:8080/job/CypressWebAutoTest/allure/</a>
    </div>
    <div>
      <li>
        总用例数：${TEST_COUNTS,var="total"}
      </li>
      <li style="color:red">
        失败用例数：${TEST_COUNTS,var="fail"}
      </li>
      <li style="color:green">
        成功用例数：${TEST_COUNTS,var="pass"}
      </li>
    </div>
  </body>
</html>''', 
subject: '自动化测试报告--pipeline', 
to: 'pei_xiao_dan@qq.com'
  }
}

}