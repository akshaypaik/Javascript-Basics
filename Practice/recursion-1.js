let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: {
            siteA: [{
                name: 'Peter',
                salary: 2000
            }, {
                name: 'Alex',
                salary: 1800
            }],
            siteB: [{
                name: 'Peter',
                salary: 1300
            }, {
                name: 'Alex',
                salary: 999
            }]
        },
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};
let totalSalary = 0;
const calculateTotalSalary = (companyData) => {
    for (let [key, value] of Object.entries(companyData)) {
        console.log(key);
        if (Array.isArray(companyData[key])) {
            companyData[key].forEach(item => {
                totalSalary += item.salary;
            })
        } else {
            calculateTotalSalary(companyData[key]);
        }
    }
}

calculateTotalSalary(company);
console.log(`total salary: ${totalSalary}`);

