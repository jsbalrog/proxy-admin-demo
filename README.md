# User Admin
This is meant to be a demo of a user management app.

## Directory Layout
    
    app.js              --> app config, defines static artifact directory and service api
    package.json        --> for npm
    routes/
      api.js            --> routes for serving JSON
    lib/
      middleware/       --> folder for our own middleware
    providers/          --> folder containing the files that connect to data back-end
      provider-memory.js--> creates an in-memory data store
    public/             --> all of the files to be used in on the client side
      index.html        --> main html page
      css/              --> css files
      img/              --> image files
      js/               --> javascript files
        main.js         --> declare top-level app module
        controllers.js  --> application controllers
        providers.js    --> provides urls and http ajax callbacks to the server
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/      
          underscore/
      partials/         --> angular view partials (partial html)
        manage.html   --> main view for all things user-admin
        security.html --> TBD

This Git repository includes all of the source code used in creating the employee admin demo app.

Each of the links below represents a snapshot of the code at a point in the presentation. You'll find instructions below on how to check out each snapshot from this git repository.

* [00_Blank_Slate][00]
* [01_Create_Node_App_And_Static_File_Server][01]
* [02_Create_Angular_App_And_Basic_Nav][02]
* [03_Create_Angular_Controllers][03]
* [04_Communicate_Between_Controllers_Using_Service][04]
* [05_Hook_Up_Server_Side][05]

## Using this repository to follow the demo

First, you'll have to clone this repository:

    git clone git://github.com/buffalobillion/proxy-admin.git

Change into the directory:

    cd proxy-admin

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_Blank_Slate origin/00_Blank_Slate
    git checkout -b 01_Create_Node_App_And_Static_File_Server origin/01_Create_Node_App_And_Static_File_Server
    git checkout -b 02_Create_Angular_App_And_Basic_Nav origin/02_Create_Angular_App_And_Basic_Nav
    git checkout -b 03_Create_Angular_Controllers origin/03_Create_Angular_Controllers
    git checkout -b 04_Communicate_Between_Controllers_Using_Service origin/04_Communicate_Between_Controllers_Using_Service
    git checkout -b 05_Hook_Up_Server_Side origin/05_Hook_Up_Server_Side

And make sure you run npm install to install any necessary node modules by running

    npm install

You can review the list of local branches by running:

    git branch

And you can switch between branches with the checkout command. For example, to check out the `06_Create_Web_Server_APIs` branch, run:

    git co 06_Create_Web_Server_APIs


[00]: https://github.com/buffalobillion/proxy-admin/tree/00_Blank_Slate
[01]: https://github.com/buffalobillion/proxy-admin/tree/01_Create_Node_App_And_Static_File_Server
[02]: https://github.com/buffalobillion/proxy-admin/tree/02_Create_Angular_App_And_Basic_Nav
[03]: https://github.com/buffalobillion/proxy-admin/tree/03_Create_Angular_Controllers
[04]: https://github.com/buffalobillion/proxy-admin/tree/04_Communicate_Between_Controllers_Using_Service
[05]: https://github.com/buffalobillion/proxy-admin/tree/05_Hook_Up_Server_Side
