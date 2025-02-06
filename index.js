console.log('0')

setTimeout(()=>{
    console.log('1')
})

const a =  setInterval(() => {
    console.log('setInterval')
});


new Promise((resolve,reject)=>{
    console.log(`2`)
    resolve(3)
}).then((val) => {
    console.log(val)
}).then(()=>{
    console.log('then...1')
})


new Promise((resolve,reject)=>{
    console.log(`4`)
    resolve(5)
}).then((val) => {
    console.log(val)
}).then(()=>{
    console.log('then...2')
})

console.log(`6`)

clearInterval(a)
// 0246351