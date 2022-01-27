let c1 = {p: null, resolve: null}
let c2 = {p: null, reslove: null}

;[c1, c2].forEach(i => {
  i.p = new Promise((res, rej) => {
    i.resolve = res
  })
})


setTimeout(function () {
  console.log(c1.p)
  c1.resolve('done')
  console.log(c1.p)
}, 2000)

setTimeout(function () {
  c2.resolve('ok')
}, 3000)

Promise.all([c1.p, c2.p]).then(function (value) {
  console.log('done')
}, function (reason) {
  console.log('err')
})
