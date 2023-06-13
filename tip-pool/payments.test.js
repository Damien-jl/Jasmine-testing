describe('payment tests', function () {
    beforeEach(function () {
        billAmtInput.value = '25.00';
        tipAmtInput.value = '5.00'
    })

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('25.00');
        expect(allPayments['payment1'].tipAmt).toEqual('5.00');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })

    it('should add a new payment without tip', function () {
        billAmtInput.value = '40';
        tipAmtInput.value = '0';
        let payInfo = {
            billAmt: '40',
            tipAmt: '0',
            tipPercent: 0
        }
        
        expect(createCurPayment()).toEqual(payInfo)
    })

    it('should return undefined if billAmt is a empty string on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = ''
        let payment = createCurPayment();

        expect(payment).toBe(undefined);

    })

    it('should append our inputted vals on appendPaymentTable', function () {
        let createPay = createCurPayment();
        allPayments['payment1'] = createPay;

        appendPaymentTable(createPay);

        //these are lines from the solution
        // this is putting all billAmt,tipAmt, and tipPercent tds in a variable
        let tdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(tdList[0].innerText).toEqual('$25.00');
        expect(tdList[1].innerText).toEqual('$5.00');
        expect(tdList[2].innerText).toEqual('20%');
    })

    it('should update payment sum with our values on updateSummary()', function () {
        billAmtInput.value = 25.00;
        tipAmtInput.value = 5.00;
        submitPaymentInfo()

        expect(summaryTds[0].innerHTML).toEqual('$25');
        expect(summaryTds[1].innerHTML).toEqual('$5')
        expect(summaryTds[2].innerHTML).toEqual('20%')
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
})