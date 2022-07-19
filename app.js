const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
//required to use the fs module
// const fs = require('fs');

//With this statement, the object in the module.exports assignment will be reassigned to the generatePage variable in the app.js file. Note here that the variable name is arbitrary; however, the relative path to include the file must be exact.
// const generatePage = require('./src/page-template.js');

// const pageHMTL = generatePage(name, github);


//The first argument is the file name that will be created, or the output file. The second argument is the data that's being written: the HTML string template. The third argument is the callback function that will handle any errors as well as the success message.
// fs.writeFile('./index.html', pageHMTL, err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!')
// })




// const printProfileData = profileDataArr => {
//     //this...
//     for (let i = 0; i < profileDataArr.length; i += 1){
//     console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     //is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileData(profileDataArgs);

//process=represents what is going on in the app, argv= what holds what is typed in the command line, slice= returns and array
// const profileDataArgs = process.argv.slice(2);

//extract those arguments and store them into distinct variables
//es6 feautre that destructures
// const [name, github] = profileDataArgs;
//Below will work the same as the const above
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];