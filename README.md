Cypress is a next generation automation testing tool for Modern Web Apps.

🟡 It's  Asynchronouse in nature.but we can write 
text cases in Synchronouse fasion, this is on of its features.


DAYS:
>> 0-6    -All basic, its pros and cons , Nature. and making some tests and assertion. 
 🟢 Each line/command returns a promise. >> test.js

>> 7 - alerts handling
 🟢 cypress automatically handles the alerts. To insure that the alert got handled. used .on() function. which takes window events like alerts >>'window:alert' and a callback function which yeilds the response/returned value . then checked that recieved str equels to the given str (alert msg).   >> Test3.js

 >> 8 -tabs and child window handling -
 
 🟢 cypress doesn't support child windows or tabs, we have to manually code for it. for that, used invoke() to yeild the function and function to be yeild was removeAttr() {jQuery} >> Test3.js

 >> 9 - handling tables.
 🟢 Learnt about .next() to access next sibling of <td>  >>  Test4.js
 🟢 Mouse hovering: code with jQuery function (show()) >>  Test5.js

 >> 10 - handling IFrames.
 🟢 Learnt about cypress-iframe package in cypress  >>  Test6.js
 🟢 Basic understanding of fixtures with new site.

 >>11 -Fixtures and hooks
 🟢 getting data from other files(fixtures) and Hooks in cypress.>>TestWithFixture.js
 🔸 before() hook takes a callback function but doesn't support to arrow function. and also it() too. while using hook.

 >>12 - JSON data with fixture and Validation
 🟢cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
 🟢 2 way data binding and min-len validation. >>TestWithFixture.js
 🟢 Costum commands in cypress. folder = cypress/support/commands.js >>TestWithFixture.js
