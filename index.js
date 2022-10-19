const inquirer=require('inquirer');
const fs=require('fs');
const Manager=require('./lib/manager');
const Engineer=require('./lib/engineer');
const Intern=require('./lib/intern');
const makePage=require('./src/generateFile');


// array where all information from prompt is put
teamMember=[];
// prompt to ask question
const members=async()=>{
   const newMember= await inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:'Enter team member name',
        },
        {
            type:'input',
            name:'id',
            message:'Enter team member id',
        },
        {
            type:'input',
            name:'email',
            message:'Enter team member email',
        },
        {
            type:'list',
            name:'role',
            message:'Enter team member role',
            choices:['Manager','Engineer','Intern'],
        },
        
    ])
    if (newMember.role==='Manager'){
           
        const manager = await inquirer.prompt([
            {
                type:'input',
                name:'officeNumber',
                message:'Enter manager office number',
            },
                
        ])
        const newManager= new Manager(newMember.name, newMember.id, newMember.email, manager.officeNumber)
        
        teamMember.push(newManager)
        anotherMember();
    }
    if(newMember.role==='Engineer'){

        const engineer=await inquirer.prompt([
            {
                type:'input',
                name:'githubUser',
                message:'Enter engineer github username',
            },
        ])
        const newEngineer=new Engineer(newMember.name, newMember.id, newMember.email, engineer.githubUser)
        
        teamMember.push(newEngineer)
        anotherMember();
    }
    if(newMember.role==='Intern'){
        const intern=await inquirer.prompt([
            {
                type:'input',
                name:'school',
                message:'Enter intern school',
            },
            
        ])
        const newIntern=new Intern(newMember.name, newMember.id, newMember.email, intern.school)
        
        teamMember.push(newIntern)
        anotherMember();
    }
        
    
}


// function to either start questions over again or end and generate html
const anotherMember=()=>{
    inquirer.prompt([
        {
            type:'confirm',
            name:'addMember',
            message:'Do you want to add another member?',
        }
    ]).then((data)=>{
        if(data.addMember===true){
            members();
        } else{
            makehtml();
        }
    })
}

// seperate function to write html
const makehtml=()=>{
    fs.writeFile('./dist/index.html', makePage(teamMember), (err)=> 
        err? console.log(err) : console.log('Generating HTML')
    );
}



members();

module.exports=teamMember;