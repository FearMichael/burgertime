# BurgerTime
An app to explore the MVC methodology with Heroku and JawsDB

### Add / Remove Burgers
- The app will intake your burger name with optional ingedients (which could be used at a later date), does some regex checking and adds to the database. The page then reloads and fills in with the information from the database via handlebars

- Clicking eat a burger marks that as eaten, and just like adding a burger the database is updated and page loads with this new information

- The final step in the food journey is removing the now eaten burger, with is soft deleted on the database

### Future Updates
- More interactivity, animation, or sounds could make this a bit more fun

#### Tools / Dependencies
- Sequelize is the ORM for this site and helps to maintain data integrity
- Handlebars is the templating engine, allowing for easy loading and simple page design