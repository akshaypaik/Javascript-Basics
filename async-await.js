const getCountryDetailByName = async (country) => {
  try {
    console.log("Fetching started!");
    const result = await fetch(
      `https://restcountries.com/v3.1/name//${country}`
    );
    const data = await result.json();
    console.log("Fetching ended!");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
console.log("first");
getCountryDetailByName("usa");
console.log("second");
