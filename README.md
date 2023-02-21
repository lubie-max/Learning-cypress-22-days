Cypress is a next generation automation testing tool for Modern Web Apps.


## Table of Contents

- [Installation](#installation)
- [Days](#days)
- [Contributing](#contributing)
- [License](#license)


# Installation

## To install Cypress.
- Official Docs ➡ [Cypress Docs](https://docs.cypress.io/guides/getting-started/installing-cypress)

$ npm install cypress --save-dev

## To install cucumber
- Official Doc ➡ [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md)

- $ npm install cypress --save-dev

## Jenkins Installation
-Official Doc ➡ [WAR file](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md)

-  $ java -jar jenkins.war










🟡 It's Asynchronouse in nature. But we can write
text cases in Synchronouse fasion, this is one of its features.

# Days 

> > 0-6 -All basic, its pros and cons , Nature. and making some tests and assertion.

🟢 Each line/command returns a promise. >> test.js

> > 7 - alerts handling.

🟢 cypress automatically handles the alerts. To insure that the alert got handled. used .on() function. which takes window events like alerts >>'window:alert' and a callback function which yeilds the response/returned value . then checked that recieved str equels to the given str (alert msg). >> Test3.js

> > 8 -tabs and child window handling -

🟢 cypress doesn't support child windows or tabs, we have to manually code for it. for that, used invoke() to yeild the function and function to be yeild was removeAttr() {jQuery} >> Test3.js

> > 9 - Table handling.

🟢 Learnt about .next() to access next sibling of <td> >> Test4.js
🟢 Mouse hovering: code with jQuery function (show()) >> Test5.js

> > 10 -IFrames handling .

🟢 Learnt about cypress-iframe package in cypress >> Test6.js
🟢 Basic understanding of fixtures with new site.

> > 11 -Fixtures and hooks.

🟢 getting data from other files(fixtures) and Hooks in cypress.>>TestWithFixture.js
🔸 before() hook takes a callback function but doesn't support to arrow function. and also it() too. while using hook.

> > 12 - JSON data with fixture and Validation

🟢cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')

🟢 2 way data binding and min-len validation. >>TestWithFixture.js

🟢 Costum commands in cypress. folder = cypress/support/commands.js >>TestWithFixture.js

🟢 To Debug the tests we can use cy.pause() and cy.debug() functions or browser console to track the actions or snapshots from cypress itself.

> > 13 : Implementing Page Object Design pattern.

🟢 Making code more readable and scalable with Object Class >> cypress/integration/PageObjects.

> > 14: Setting environmental variables and automated shop page.

🟢 automated shopping page. With full validation of products' pricess >>testWithFixture02.js

> > 15 : environmental variable // common url.

🟢 calling an env var => Cypress.env('url') >>cypress.config.js

> > 16 : cypress dashboard. and terminal commands.

🟢 >> npx cypress run --record --key<key provoided by cypress dashboard> --spec cypress/integration/examples/\*.js --headed --browser chrome
🔰 above command runs the test in respected browser and --key is key provoided by cypress dashboard

> > 17 : command line and jenkins intro

🟢 commands and script costumization.

1️⃣ >> cypress run ➡ runs the testcases in terminal (headless).

2️⃣ >> cypress run --headed ➡ runs the testcases in cypress window (headed).

3️⃣ >> cypress run --browser chrome ➡ runs the testcases in terminal (headless).


>> 18: Jenkins Integration with Cypress.

🟢 Setting up Jenkins. 
1️⃣ installed Jenkins WAR file from official site.
2️⃣ ran >>java -jar jenkins.war . command in cmd/terminal to open the  window.
3️⃣  http://localhost:8080 url for the jenkins window.
ps: Let the plugins be installed.


4️⃣ Next, Provoid, genereted password from cmd to the Jenkins(Localhost:8080).

5️⃣ To create new job/item: Go to :
➡ Dashboard
➡ New Item ➡ Provoid ProjectName , (Freestyle Project) for now.
➡Configuration: Check for parameterized Project(if neccessery).
and Source Code Management- Git
➡Build Step => Execute Windows Batch commands
and Save.



🟢 Resolved the .sh issue with jenkins Script Runner(Execute Windows Batch commands) ➡ npm run %Script%.
ps: do not use execute shell. Instead, use (Execute Windows Batch commands).


>> 19:Brief about BDD(Behavior Driven Development) with Cucumber 
🟢 Basic Syntax and Folder Structure ➡ npm run %Script%.

