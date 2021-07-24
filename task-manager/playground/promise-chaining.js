/*
//93
require('../src/db/mongoose')
const User = require('../src/models/user')

//60f7a1e7e42b942160c586db

User.findByIdAndUpdate('60f7a1e7e42b942160c586db', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 22 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

//96
require('../src/db/mongoose')
const User = require('../src/models/user')


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age }) // these are es6 syntax
    return count
}

updateAgeAndCount('5c1a5a34d5a2ec046ca8f6bc', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})