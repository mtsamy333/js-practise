let unitEconomicsForm = document.getElementById("unit-economics-form"),
    sellingPriceInput = document.getElementById("selling-price"),
    cogsInput = document.getElementById("cogs"),
    grossMarginInput = document.getElementById("gross-margin"),
    salesMarketingInput = document.getElementById("sales-marketing"),
    operationCostsInput = document.getElementById("operation-costs"),
    netMarginInput = document.getElementById("net-margin"),
    sellingPriceValue, cogsValue, grossMarginValue, 
    salesMarketingValue, operationCostsValue, netMarginValue;

    function calculate(event) {
        event.preventDefault();
        //find grossMarginValue
        sellingPriceValue = sellingPriceInput.value;
        cogsValue = cogsInput.value;
        grossMarginValue = sellingPriceValue - cogsValue;
        grossMarginInput.value = grossMarginValue;
        console.log(grossMarginValue);
        //find netMarginValue
        salesMarketingValue = salesMarketingInput.value;
        operationCostsValue = operationCostsInput.value;
        netMarginValue = grossMarginValue - salesMarketingValue - operationCostsValue;
        netMarginInput.value = netMarginValue;
        console.log(netMarginValue);
    }
    unitEconomicsForm.addEventListener('submit', calculate);
