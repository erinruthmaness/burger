# burger

This app is a "burger logger" that uses MySQL, Node, Express, Handlebars and a homemade ORM (DAL).  It follows the MVC design pattern, using Node and MySQL to query and route data and Handlebars to generate HTML.

The app is modeled after a restaurant app that lets users input the names of meals they'd like to eat. Whenever a user submits a mew meal, the app displays it on the left side of the page (or top if the user is on a smaller screen). Each meal in the waiting area also has a `Feed Him!` button. When the user clicks it, the meal will be fed to the Master, who is VERY hungry.

The app stores every meal in a SQL database, whether devoured or not.