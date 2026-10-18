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
}

module.exports = Solution