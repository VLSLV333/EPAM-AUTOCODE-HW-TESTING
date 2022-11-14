// let dateToCalculateFrom = new Date(2022, 11, 31);
// let dateToCalculateFrom = new Date(2022, 5, 15);
// let dateToCalculateFrom = "22.04.2021";
// function getDaysToNewYear(date){
//     let startingDate;
//     if (typeof date === "string"){
//         let splitedDate = date.split('.');
//         let answerArray = [];
//         for (let i = 2; i >= 0; i--){
//             answerArray.push(splitedDate[i])
//         }
//         startingDate = new Date(answerArray.join('.'));
//     } else {
//         startingDate = date;
//     }
//     let newYear=new Date(2023, 0, 1);
//     let milS = 1000; let sec = 60; let min = 60; let hour = 24;
//     let one_day=milS*sec*min*hour;
//     let splitedDaysToNewYear = ((newYear.getTime()-startingDate.getTime())/one_day + '').split('.');
//     if (splitedDaysToNewYear.length === 1){
//         return Math.round((newYear.getTime()-startingDate.getTime())/one_day)
//     } else {
//         let secondNumberAfterDot = 4;
//         if (+splitedDaysToNewYear[1][0] === 0 && +splitedDaysToNewYear[1][1] <= secondNumberAfterDot){
//             return Math.floor((newYear.getTime()-startingDate.getTime())/one_day)
//         } else {
//             return Math.ceil((newYear.getTime()-startingDate.getTime())/one_day)
//         }
//     }
// }

// function lastToFirst(value) {
//     if (value.length === 1){
//         return value
//     } else{
//         let answerArray = [];
//         answerArray.push(value[value.length - 1]);
//         answerArray.push(value.slice(1, -1));
//         answerArray.push(value[0]);
//         answerArray = answerArray.join('');
//         return answerArray;
//     }
// }

// const users = [
//     {name: 'Bill', login: 'bill01', surname: 'Jobs', type: 'EMPLOYEE', address: {officeId: 123, placeId: 1222}},
//     {name: 'Fill', login: 'fill007', surname: 'Filler', type: 'CONTRACTOR', contractorCompanyName: 'Microsoft'},
//     {name: 'Alex', login: 'alex777', type: 'EMPLOYEE', address: {officeId: 222, placeId: 333}},
//     {name: 'John', login: 'coolJohn', type: 'CONTRACTOR', contractorCompanyName: 'Apple'},
// ];

// const result = {
//     employees: [
//         {name: "Bill", login: "bill01", surname: "Jobs", type: "EMPLOYEE", address: {officeId: 123, placeId: 1222}},
//         {name: "Alex", login: "alex777", type: "EMPLOYEE", address: {officeId: 222, placeId: 333}}
//     ],
//     contractors: [
//         {name: "Fill", login: "fill007", surname: "Filler", type: "CONTRACTOR", contractorCompanyName: "Microsoft"},
//         {name: "John", login: "coolJohn", type: "CONTRACTOR", contractorCompanyName: "Apple"}
//     ]
// }



// function groupOrgUsers(users) {
//     let employeesArray = []
//     let contractorsArray = []
//     users.forEach( user => {if (user['type'] === "EMPLOYEE"){
//         employeesArray.push(user)
//                             }else{
//                                 contractorsArray.push(user)
//                             }
//     })
//     const result = {
//         employees : employeesArray,
//         contractors : contractorsArray
//     }
//     return result
// }
// console.log(groupOrgUsers(users))