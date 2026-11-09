class Solution {
    argumentsLength(...args) {
        return args.length
    }

    findDegrees(matrix) {
        const res = []
        for(let i = 0; i < matrix.length; i++) {
            let vertexCounter = 0
            for(let j = 0; j < matrix.length; j++) {
                vertexCounter = vertexCounter + matrix[i][j]
            }
            res.push(vertexCounter)
        }
        return res
    }

    minOperations(nums, k) {
        let sum = 0
        for(const num of nums) {
            sum = sum + num
        }
        return sum % k
    }

    reverseDegree(s) {
        let sum = 0
        for(let i = 0; i < s.length; i++) {
            const posValue = ('z'.charCodeAt(0) - s.charCodeAt(i)) + 1
            sum = sum + ((i + 1) * posValue) 
        }
        return sum
    }

    async addTwoPromises(promise1, promise2) {
        const [p1, p2] = await Promise.all([promise1, promise2])
        return p1 + p2
    }

}

module.exports = Solution