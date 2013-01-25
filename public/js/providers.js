var Provider = (function() {
    var my = {};

    var apps = [
        {
            "APP_ID": 1,
            "APP_CD": "COOL_APP",
            "APP_NM": "My Cool App",
            "APP_DESCR": "A cool application that does a lot of things"
        },
        {
            "APP_ID" : 2,
            "APP_CD" : "NEAT_APP",
            "APP_NM" : "Some Neat App",
            "APP_DESCR" : "A neat application that does one thing well"
        }
    ];

    var users = [
        {
            "USER_ID": 1,
            "USER_NM": "MandrakeL",
            "PREF_NM": "Lionel Mandrake",
            "LDAP_ID": "1111",
            "APP_ID": 1,
            "APP_NM": "My Cool App"

        },
        {
            "USER_ID": 2,
            "USER_NM": "Buck",
            "PREF_NM": "Buck Turgidson",
            "LDAP_ID": "2222",
            "APP_ID": 1,
            "APP_NM": "My Cool App"
        },
        {
            "USER_ID": 3,
            "USER_NM": "Ripper",
            "PREF_NM": "Jack Ripper",
            "LDAP_ID": "3333",
            "APP_ID": 1,
            "APP_NM": "My Cool App"
        },
        {
            "USER_ID": 4,
            "USER_NM": "alexi",
            "PREF_NM": "Alexi di Sadesky",
            "LDAP_ID": "4444",
            "APP_ID": 2,
            "APP_NM" : "Some Neat App"
        },
        {
            "USER_ID": 5,
            "USER_NM": "bg",
            "PREF_NM": "Bat Guano",
            "LDAP_ID": "5555",
            "APP_ID": 2,
            "APP_NM" : "Some Neat App"
        },
        {
            "USER_ID": 6,
            "USER_NM": "zoggl",
            "PREF_NM": "Lothar Zogg",
            "LDAP_ID": "6666",
            "APP_ID": 2,
            "APP_NM" : "Some Neat App"
        },
        {
            "USER_ID": 7,
            "USER_NM": "muffleymerkin",
            "PREF_NM": "Merkin Muffley",
            "LDAP_ID": "7777",
            "APP_ID": 2,
            "APP_NM" : "Some Neat App"
        },
        {
            "USER_ID": 8,
            "USER_NM": "missscott",
            "PREF_NM": "Miss Scott",
            "LDAP_ID": "8888",
            "APP_ID": 2,
            "APP_NM" : "Some Neat App"
        },
        {
            "USER_ID": 9,
            "USER_NM": "thedoctor",
            "PREF_NM": "Dr. Strangelove",
            "LDAP_ID": "9999",
            "APP_ID": 2,
            "APP_NM" : "Some Neat App"
        },
        {
            "USER_ID": 10,
            "USER_NM": "ace",
            "PREF_NM": "Ace Owens",
            "LDAP_ID": "1010",
            "APP_ID": 2,
            "APP_NM" : "Some Neat App"
        }
    ];

    my.getApps = function() {
        return apps;
    };

    my.getUsers = function(app) {
        return _.where(users, {"APP_ID": app.APP_ID});
    };

    return my;

})();