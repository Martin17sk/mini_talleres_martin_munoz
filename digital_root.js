//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
    let numSplitted = []
    let sum = 0
    numSplitted = n.toString().split('')

    while (true) {
        if (numSplitted.length == 1) {
            return n
        }

        for (let i = 0; i < numSplitted.length; i++) {
            sum += numSplitted[i] * 1
        }
        
        if (sum > 9) {
            numSplitted = sum.toString().split('')
            sum = 0
        } else {
            return sum
        }
    }
}

