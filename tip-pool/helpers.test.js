 describe('testing calculations', function () {
    it('should add total bill on sumPaymentTotal()', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(submitPaymentInfo('tipAmt')).toEqual(20)
    })

    it('should calculate correct tipPercentage on calculateTipPercent()', function () {
        expect(calculateTipPercent(100,20)).toEqual(20);
        expect(calculateTipPercent(200,50)).toEqual(25)
    })

    it('should add a tr on appendDeleteBtn()', function () {
        let tr = document.createElement('tr');
        appendDeleteBtn(tr);
        expect(tr.firstChild.innerHTML).toEqual('X')
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    })
 })