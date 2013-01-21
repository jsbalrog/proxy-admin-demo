# Protege Admin
This is meant to be a proof-of-concept for an admin app,
which is initially for setting up impersonation.

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
        impersonation-main.html   --> main view for all things impersonation
        security-main.html        --> TBD

For a running version, visit <http://enigmatic-reaches-3372.herokuapp.com/#/>