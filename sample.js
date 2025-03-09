var response = {
  data: [
    {
      name: "Name1",
      age: 19,
      city: "C01",
    },
    {
      name: "Name2",
      age: 29,
      city: "C01",
    },
    {
      name: "Name3",
      age: 18,
      city: "C02",
    },
  ],
  cities: [
    {
      id: "C01",
      name: "Chennai",
    },
    {
      id: "C02",
      name: "Mumbai",
    },
    {
      id: "C03",
      name: "Raipur",
    },
    {
      id: "C04",
      name: "Agra",
    },
  ],
};

const onlyAgeLessThan20 = (response) => {
  let personData = response.data;
  let ageLessThan20List = [];
  if (personData && personData.length > 0) {
    ageLessThan20List = personData.filter((element) => element.age < 20);
  }
  return ageLessThan20List;
};

console.log(onlyAgeLessThan20(response));

// export class nameCity {
//   name;
//   city;
// }

var onlyNameCityProps = (response) => {
  let personData = response.data;
  let cityData = response.cities;
  let onlyNameCityPropsList = [];
  let nameCityList = [];
  if (personData && personData.length > 0) {
    onlyNameCityPropsList = personData.map((element) => {
      let cityIndex = cityData.findIndex(
        (elementCity) => elementCity.id == element.city
      );
      let nameCity = {
        name: element.name,
        city: cityData[cityIndex].name,
      };
      nameCityList.push(nameCity);
    });
  }
  return nameCityList;
};

console.log("onlyNameCityProps: ", onlyNameCityProps(response));

var totalAge = (response) => {
  let personData = response.data;
  let sumAges;
  if (personData && personData.length > 0) {
    sumAges = personData.reduce((total, element) => {
      return (total = total + element.age);
    }, 0);
  }
  return sumAges;
};

console.log("totalAge: ", totalAge(response));

// Write declaration for variables p1 and p2 to receive
// the first two objects from the array 'list'

// Write declaration of variables name and city to be
// assigned from the variable p1 defined above

// var p1 = response.data[0];
// var p2 = response.data[1];

let [p1, p2] = response.data;

let { name, city } = p1;

console.log("name: ", name);
console.log("city: ", city);

console.log("p1: ", p1);
console.log("p2: ", p2);
// p1(response);
// console.log("p1: ", p1);

// const p1 = function(response){
//     let personData = response.data;
//     if (personData && personData.length > 0) {
//       p1 = personData[0];
//     }
//   };

var x = 58;
function bar() {
  console.log(x);
  var x = 29;
}
bar();
