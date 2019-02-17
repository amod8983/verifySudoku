var rowItterator = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum === 45) {
        return true;
    } else return false;
};

var columnItterator = (arr, j) => {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += arr[i][j];
    }
    if (sum === 45) {
        return true;
    } else return false;
};

var checkingRowValidation = (A) => {
    let res = true;
    for (let i = 0; i < A.length; i++) {
        res = res && rowItterator(A[i]);
    }
    return res;
};

var checkingColumnValidation = (A) => {
    let res = true;
    for (let i = 0; i < 9; i++) {
        res = res && columnItterator(A, i);
    }
    return res;
};

var checkingTotalSum = (A) => {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            sum += A[i][j];
        }
    }
    if (sum === 405) {
        return true;
    }
    return false;

};

const finalRes = (A, callback) => {
    let res;
    if (checkingTotalSum(A) && checkingColumnValidation(A) && checkingRowValidation(A)) {
        res = true;
    } else {
        res = false;
    }
    callback(res);
};
module.exports=finalRes;
