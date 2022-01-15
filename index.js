const calculateBill = function (amount, vat, tip) {
    if (typeof amount !== 'number' || typeof vat !== 'number' || typeof tip !== 'number') {
        return 'error';
    }
    else {
        const sum = amount + (amount * (vat / 100) + tip);
        return '£' + sum
    }
}
module.exports = calculateBill;