# User Admin
This is meant to be a demo of a user management app.

## Directory Layout
    
    app.js              --> app config, defines static artifact directory and service api
    package.json        --> for npm
    routes/
      api.js            --> routes for serving JSON

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
        impersonation-main.html   --> main view for all things user-admin
        security-main.html        --> TBD

This Git repository includes all of the source code used in creating the employee admin demo app.

Each of the links below represents a snapshot of the code at a point in the presentation. You'll find instructions below on how to check out each snapshot from this git repository.

* [00_Blank_Slate][00]

## Using this repository to follow the demo

First, you'll have to clone this repository:

    git clone git://github.com/buffalobillion/angular-node.git

Change into the directory:

    cd angular-node

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_Blank_Slate origin/00_Blank_Slate

You can review the list of local branches by running:

    git branch

And you can switch between branches with the checkout command. For example, to check out the `06_Create_Web_Server_APIs` branch, run:

    git co 06_Create_Web_Server_APIs


[00]: https://github.com/buffalobillion/angular-node/tree/00_Blank_Slate
