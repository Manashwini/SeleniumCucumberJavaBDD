$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/HooksDemo/HooksDemo.feature");
formatter.feature({
  "name": "Check login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsForHooks.HooksDemoSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepsForHooks.HooksDemoSteps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsForHooks.HooksDemoSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsForHooks.HooksDemoSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsForHooks.HooksDemoSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepsForHooks.HooksDemoSteps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsForHooks.HooksDemoSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsForHooks.HooksDemoSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"this.driver\" is null\r\n\tat StepsForHooks.HooksDemoSteps.teardown(HooksDemoSteps.java:42)\r\n",
  "status": "failed"
});
});