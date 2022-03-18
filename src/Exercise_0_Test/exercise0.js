"use strict";
/*

Welcome to:

    ................................................................
    .                                                              .
    .     ####################    ####################      E      .
    .     ####################    ####################      X      .
    .             ####            ####                      E      .
    .             ####            ####                      R      .
    .             ####            ####################      C      .
    .             ####                            ####      I      .
    .             ####                            ####      S      .
    .             ####            ####################      E      .
    .             ####            ####################      S      .
    .                                                              .
    ................................................................

Exercise:

    Given the data, define the interface "User" and use it accordingly.

*/
exports.__esModule = true;
exports["default"] = (function () {
    var users = [
        {
            name: 'Max Mustermann',
            age: 25,
            occupation: 'Chimney sweep'
        },
        {
            name: 'Kate Müller',
            age: 23,
            occupation: 'Astronaut'
        }
    ];
    function logPerson(user) {
        console.log(" - ".concat(user.name, ", ").concat(user.age));
    }
    console.log('Users:');
    users.forEach(logPerson);
    /* In case if you are stuck:
    
    // https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
    */
});
