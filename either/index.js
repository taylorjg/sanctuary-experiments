const S = require('sanctuary')

const even = n => n % 2 === 0

const withinRange = n => n <= 100

const squareIfEven = n =>
  even(n)
    ? S.Right(n * n)
    : S.Left('value is odd')

const toStringIfWithinRange = n =>
  withinRange(n)
    ? S.Right(n.toString())
    : S.Left('value is outside range')

const logResult = (n, either) =>
  S.either
    (failureValue => console.log(`${n} => ${failureValue}`))
    (successValue => console.log(`${n} => ${successValue}`))
    (either)

const doChain = n => {
  const either = S.chain
    (toStringIfWithinRange)
    (squareIfEven(n))
  logResult(n, either)
}

const demoChaining = () => {
  console.log(`${dashes} chaining ${dashes}`)
  doChain(4)
  doChain(5)
  doChain(12)
}

const doPipe = n => {
  const either = S.pipeK
    ([squareIfEven, toStringIfWithinRange])
    (S.Right(n))
  logResult(n, either)
}

const dashes = '-'.repeat(30)

const demoPiping = () => {
  console.log(`${dashes} piping ${dashes}`)
  doPipe(4)
  doPipe(5)
  doPipe(12)
}

const main = () => {
  demoChaining()
  demoPiping()
}

main()
