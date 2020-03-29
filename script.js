// function myDay() { // You totaly dont use it
//     let promise = new Promise( (resolve,reject) => { // Arrow function
//         setTimeout(function () {
//             Math.random() > .3 ? resolve('Ho-ho 7 a.m lets go to  hell....') : reject('Overslept'); // Resole without data? Is it okay?
//
//         },2000);
//     });
//     return promise;
// }
//
// function eatSmth(breakfast) {
//     console.info('time to eat');
//     return new Promise(function (resolve) { // reject not used. RM
//         setTimeout(() => resolve(breakfast), 2000)
//     });
// }
//
//
// function way(wayToWork) {
//     console.log('way to work')
//     return new Promise(function(resolve){
//         setTimeout(() => resolve(wayToWork),2000)
//     });
// }
//
// function workProsess(prosess) {
//     console.info('work hard....');
//     return new Promise(function(resolve){
//         setTimeout(() => resolve(prosess),3000)
//     });
// }
//
// function coffeeTime(moreCoffee) {
//     console.info('more coffee....'); // Cofee is not good for you. Better to drink tea //No no.. without tea . Better coffee at 4am
//     return new Promise(function (resolve) {
//         setTimeout(() => resolve(moreCoffee), 1000)
//     });
// }
//
// myDay({})
//     .then(eatSmth) //  Its a function. YOu miss (data)
//     .then(way)
//     .then(workProsess)
//     .then(coffeeTime)
//     .catch(error => console.error(error));

function myDay(doc) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .3 ? resolve(doc) : reject('Overslept');

        },2000);
    });
}

function eatSmth(breakfast) {
    console.info('time to eat');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .3 ? resolve(breakfast) : reject('Нема шо їсти');
        }, 2000)
    });
}


function way(wayToWork) {
    console.log('way to work');
    return new Promise(resolve => { // Якшо реджект не використовуєш, то не треьа його писати
        setTimeout(() => resolve(wayToWork),2000)
    });
}

function workProsess(prosess) {
    console.info('work hard....');
    return new Promise(resolve => {
        setTimeout(() => resolve(prosess),3000)
    });
}

function coffeeTime(moreCoffee) {
    console.info('more milk :)');
    return new Promise(resolve => {
        setTimeout(() => resolve(moreCoffee), 1000)
    });
}

myDay('Budilnik to Palitex')
    .then(result => {
        console.log(result);
        return eatSmth('Makaroni')
    })
    .then(result => {
        console.log(result);
        return way('40 bus')
    })
    .then(res => {
        console.log(res);
        return workProsess('Tik tik tik')
    })
    .then( res => {
        console.log(res);
        return coffeeTime('Milk')
    })
    .then(r => {
        console.log(r);
    })
    .catch(error => console.error(error));

