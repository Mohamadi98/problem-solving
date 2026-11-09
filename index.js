const Solution = require('./solution')

const solution = new Solution()
solution.addTwoPromises(Promise.resolve(2), Promise.resolve(5))
    .then(console.log)