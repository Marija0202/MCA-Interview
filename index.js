const axios = require('axios');




function businessCase() {
    const url = `https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1`
    axios.get(url, {

        })
        .then((response) => {

            const data = response.data;
            let domesticProducts = []
            let importedProducts = []

            data.map(elem => elem.domestic ? domesticProducts.push((elem)) : importedProducts.push(elem))


            function sortAlphabet(arr) {
                arr.sort((a, b) => a.name.localeCompare(b.name))

            }
            sortAlphabet(domesticProducts)
            sortAlphabet(importedProducts)

            function changeValue(obj) {
                return names = obj.map((elem) => {

                    if (elem.hasOwnProperty('name')) {
                        elem.name = `\n` +
                            "..." + elem.name

                        return elem
                    }





                })
            }

            changeValue(domesticProducts)
            changeValue(importedProducts)

            function sumCost(arr) {
                return arr.map(elem => elem.price).reduce((acc, currentValue, i) => acc + currentValue, 0)
            }

            const printResult = () => {
                return `.Domestic ${domesticProducts.map(elem => 
                    elem.name +'\n'+"    " +
                     'Price: $' + elem.price +'\n'+ "    " + 
                  [elem.description.length>10?elem.description.slice(0,10):elem.description]+'...'+'\n'+ "    " + 
                  'Weight: ' + [elem.hasOwnProperty("weight")?elem.weight:elem.weight ||"N/A"])}\n.Imported${importedProducts.map(elem => 
                    elem.name +'\n'+ "    " + 
                    'Price: $' + elem.price +'\n'+ "    " +  
                    [elem.description.length>10?elem.description.slice(0,10):elem.description]+'...'+'\n'+ "    " + 
                    'Weight: ' +[elem.hasOwnProperty("weight")?elem.weight:elem.weight||"N/A"] )}\nDomestic cost: $${sumCost(domesticProducts)}\nImported cost: $${sumCost(importedProducts)}\nDomestic count: ${domesticProducts.length}\nImported count: ${importedProducts.length}`
            }
            const result = printResult()
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })


}
console.log(businessCase())