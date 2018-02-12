# Current Mail

This library extracts current mail from the thread.

### Example
```
var currentMail = require('currentMail');

var text = "On Sat, Jan 13, 2018 at 12:14 AM, ABC KI <aoeeo.oeopao at xyz.com> wrote:\n" +
    "\n" +
    "> Hi,\n" +
    ">\n" +
    "> On Fri, Jan 12, 2018 at 11:51 PM, rahul kumar <rahultest at abc.com>\n" +
    "> wrote:\n" +
    "> > The point is testing this mail service\n" +
    "> reviewing\n" +
    "> > test test  test  test  test  test  test .\n" +
    ">\n" +
    ">  test  test  test  test  test  test  test  test  test \n" +
    "> project  test  test  test  \n" +
    ">\n" +
    "> I will just state the definition of Open Source from Wikipedia [0]:\n" +
    ">\n" +
    "Current mail\n" +
    "\n" +
    "Hello sir\n" +
    "Hope you are doing good.\n" +
    ">\n" +
    "> >  test  test  test  test  test  test  test \n" +
    ">\n" +
    "\n" +
    "\n" +
    "\n" +
    "---mail ended---\n" +
    "Yours\n" +
    "Tester"

var mail = currentMail.getMail(text);
console.log(mail);
```