// Object Enhancements Exercise
// Patrick Swafford

// Same keys and values
// function createInstructor(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }

// Same keys and values ES2015
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// Computed Property Names
// var favoriteNumber = 42;
// 
// var instructor = {
//     firstName: "Colt"
// }
// 
// instructor[favoriteNumber] = "That is my favorite!"

// Computed Property Names ES2015