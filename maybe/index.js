const S = require('sanctuary')

const even = n => n % 2 === 0

const withinRange = n => n <= 100

const squareIfEven = n =>
  even(n)
    ? S.Just(n * n)
    : S.Nothing

const toStringIfWithinRange = n =>
  withinRange(n)
    ? S.Just(n.toString())
    : S.Nothing

const logResult = (n, maybe) =>
  console.log(`${n} => ${S.fromMaybe('Nothing')(maybe)}`)

const doChain = n => {
  const maybe = S.chain
    (toStringIfWithinRange)
    (squareIfEven(n))
  logResult(n, maybe)
}

const demoChaining = () => {
  console.log(`${dashes} chaining ${dashes}`)
  doChain(4)
  doChain(5)
  doChain(12)
}

const doPipe = n => {
  const maybe = S.pipeK
    ([squareIfEven, toStringIfWithinRange])
    (S.Just(n))
  logResult(n, maybe)
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
