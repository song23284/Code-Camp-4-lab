let set = function (input) {
    return new Promise((resolve, reject) => {
        setTimeout((
        ) => {
            console.log(input)
            resolve(input)
        }, 1000)
    })
}

// set("a").then(set("b").then(set("c").then(set("d"))))
let allset = async()=>{
    await set("a")
    await set("b")
    await set("c")
    await set("d")
}
allset()