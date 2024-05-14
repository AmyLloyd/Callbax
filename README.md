# Callbaxter

In this app, users will be able to submit a series of facts they would like to rememeber. 

Callbaxter will prompt the user to regularly use this information at intervals that will support movement of these facts from short-term to long-term memory. 

Callbaxter is a full-stack recall app using Node.js, Express.js, Sequelize, Handlebars.js,
and MVC architecture.

## User Stories

* As a user, I want to be able to recall important information from training without a lot of effort. 

*As a user, I want to be prompted to reguarly quickly revisit learning from previous trainings. 

* As a user, I want to be able to create an account and store the facts I would like to improve my recall with in the future. 

## Acceptance Criteria

*It's done when when the '/' homepage route renders a landing page

*It's done when the '/login' route renders a form to log in and a form to create a new account.

*It's done when an existing user can enter their credentials on the log in page to create a session on the server.

* It's done when a new user can create an account on the log inpage and then be immediately logged in with a session.

*It's done when only a logged in user can visit the '/profile' route.

*It's done when a logged in user is redirected to '/profile' when they try to visit '/login' again.

*It's done when a user on the profile page can use the form to create a new set of facts on which to improve their recall.

*It's done when a user on the profile page can select a "Delete" button to remove their set of questions from the database.

*It's done when a logged-in user can select a "Log out" button to remove their session.

*It's done when the session for logged-in user expires after a set time.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

*It's done when the code is organised using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.


## Specifications

*The database models have the following fields and associations:

* 'User'
    *'id': primary key
    * 'name'
    * 'email'
    *'password'

*'Set'
    *'id': primary key
    *'name'
    *'date_created'
    *'description'
    *'user_id': foreign key that references 'User.id'

*'Fact'
    *'id': primary key
    *'fact'
    *'date_created'
    *'image'
    *'prompt'
    *'remembered'
    *'set_id': foreign key that references 'Set.id'

---

## Additional features

Features possible to add in the future include:

*checked field that is checked after it is answered correctly 3 times

*checked field that, when unchecked, questions are available for recall practice

*Or... 'I know it now' button to hide that fact not appear anymore in the set.

*Could even have a 'share' button


