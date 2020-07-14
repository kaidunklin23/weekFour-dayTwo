let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

weatherConditions.push(["sunny"]);

console.log(weatherConditions);

weatherConditions.splice(2,1,"partlyCloudy");

console.log(weatherConditions);

weatherConditions.slice(1,4);

console.log(weatherConditions);
