# finerView Application registration user to sqlite3 db.

Step 1:
git clone https://github.com/mar1n/finerView.git or download and unzip from link.

Step: 2
=======BackEnd======
I am assuming that on your local machine you have installed sqlite3.
In folder "finerView" run command npm install.
Before you start using database run:
./node_modules/.bin/knex migrate:make --env development initial_schema
and
./node_modules/.bin/knex migrate:latest

After succesfull install dependence run commnad node index.js this will start server is lisen on port 3003(importent that this port is free).

Step: 3
=======Front End======
And now is time to install dependence for our front end.
Is inside folder "finerView/front" run command npm install after installation run npm start and you should see user interface.
Application is listen on port 3000.

Step: 4
=======Test=======
I create few test in backend by running them you can also clear database in case this you need it.
In folder "finerView" run command npm test.
