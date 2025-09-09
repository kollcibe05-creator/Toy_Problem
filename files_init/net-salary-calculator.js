function salary(basicSalary,benefits) {

    const grossSalary = basicSalary + benefits
    const nssf1= 0.06*8000
    const nssf2= 0.06*(grossSalary-8000)
    const shif= (2.75/100*grossSalary)
    const housingLevy= (1.5/100*grossSalary)
    const taxable = (grossSalary-housingLevy-shif-nssf2-nssf1)
    
    if (taxable>800000) {
        totalTax = 35/100*taxable
    }
    if (taxable>500000) {
        totalTax = 32.5/100*taxable
    }
    if (taxable>32333) {
        totalTax = 30/100*taxable
    }
    if(taxable>24000) {
        totalTax = 25/100*taxable
    }
    if (taxable<=24000) {
        totalTax = 10/100*taxable

    }
    const netPay = grossSalary - housingLevy - shif - nssf2 - nssf1 - totalTax

    
    console.log( `Basic salary: ${basicSalary}`)
    console.log( `benefits: ${benefits}`)
    console.log( `gross salary: ${grossSalary}`)
    console.log( `nssf1: ${nssf1}`)
    console.log( `nssf2: ${nssf2}`)
    console.log( `shif: ${shif}`)
    console.log( `Housing Levy: ${housingLevy}`)
    console.log( `taxable: ${taxable}`)
    console.log( `Total Taxable: ${totalTax}`)
    console.log( `NET SALARY: ${netPay}`)
    return netPay;
        
}
console.log(salary(10000,2000))

