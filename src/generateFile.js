const teamMember=require('..');
const Employee = require('../lib/employee');

const generateTeam=teamMember=>{

    

    // card for manager
    const generateManager=manager=>{
        return `
    <div class='card employee-card'>
        <div class='card-header'>
            <h2 class='card-title'>${manager.getName()}</h2>
            <h3 class='card-title'><i class='fas fa-mug-hot mr-2'></i>${manager.getRole()}</h3>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${manager.getId()}</li>
                <li class='list-group-item'>Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></li>
                <li class='list-group-item'>Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
    };
    //card for engineer
    const generateEngineer=engineer=>{
        return `
    <div class='card employee-card'>
        <div class='card-header'>
            <h2 class='card-title'>${engineer.getName()}</h2>
            <h3 class='card-title'><i class='fas fa-glasses mr-2'></i>${engineer.getRole()}</h3>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${engineer.getId()}</li>
                <li class='list-group-item'>Email:  <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
                <li class='list-group-item'>GitHub: <a href='https://github.com/${engineer.getGithub()}' target='_blank'>${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `
    };
    //card for intern
    const generateIntern=intern=>{
        return `
        <div class='card employee-card'>
            <div class='card-header'>
                <h2 class='card-title'>${intern.getName()}</h2>
                <h3 class='card-title'><i class='fas fa-user-graduate mr-2'></i>${intern.getRole()}</h3>
            </div>
            <div class='card-body'>
                <ul class='list-group'>
                    <li class='list-group-item'>ID: ${intern.getId()}</li>
                    <li class='list-group-item'>Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></li>
                    <li class='list-group-item'>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    };
    const makeCards=[];
    // filters and populates coorects info
    makeCards.push(teamMember
        .filter(Employee=>Employee.getRole()==='Manager')
        .map(manager=>generateManager(manager))
    );
    makeCards.push(teamMember
        .filter(Employee=>Employee.getRole()==='Engineer')
        .map(engineer=>generateEngineer(engineer))
    );
    makeCards.push(teamMember
        .filter(Employee=>Employee.getRole()==='Intern')
        .map(intern=>generateIntern(intern))
    );
    return makeCards.join('');
}




//html being generated
function makePage(teamMember){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel='stylesheet' href='./style.css'/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <title>Team</title>
    </head>
    <body>
        <header>
            <h1>Team</h1>
        </header>
        <section class='row justify-content-center'>
            ${generateTeam(teamMember)}
        </section>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    </body>
    </html>
    `
}

module.exports=makePage;