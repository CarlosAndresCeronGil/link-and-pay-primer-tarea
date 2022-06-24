var result = document.getElementById("result")

function isLeap() {
    var yearInput = document.getElementById("year-input")
    if (yearInput.value % 4 == 0 && yearInput.value % 100 == 0 && yearInput.value % 400 == 0) {
        return true
    } else {
        return false
    }
}

function seeResult() {
    const boolRes = isLeap()
    if (boolRes) {
        result.innerHTML = 'Its leap'
    } else {
        result.innerHTML = 'Its NOT leap'
    }
}
