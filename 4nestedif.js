let temperature = 25;
let isRaining = true;

if (temperature > 30) {
  console.log("It's a hot day.");
  if (isRaining) {
    console.log("But it's also raining.");
  } else {
    console.log("And it's not raining.");
  }
} else if (temperature >= 20) {
  console.log("It's a pleasant day.");
  if (isRaining) {
    console.log("But it's raining.");
  } else {
    console.log("And it's not raining.");
  }
} else {
  console.log("It's a cold day.");
  if (isRaining) {
    console.log("And it's raining.");
  } else {
    console.log("And it's not raining.");
  }
}
