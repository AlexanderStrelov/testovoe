const test = {
    age: 18,
    rope: {
        age:30
    }
}

const test2 = {...test}

test2.age = 20 

console.log(test.age)