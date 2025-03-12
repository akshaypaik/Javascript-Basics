let array = [];

for (var i = 0; i < 3; i++) {
  array[i] = function keepI() {
    console.log(i);
    return i;
  };
}
array[0]();
array[1]();
array[2]();
