function greetingWithWeather(name, weather){
    if(weather==="sunny"){
        return `Chao ${name}! Hom nay troi nang tyet voi!`;
    }else if(weather==="rainy"){
        return `Chao ${name}! Hom nay troi mua, hay mang theo o!`;
    }else{
        return `Chao ${name}! Hom nay thoi tiet khong xac dinh!`;
    }
}

console.log(greetingWithWeather("To Tuan", "sunny"));
console.log(greetingWithWeather("Tuan", "rainy"));
console.log(greetingWithWeather("Anh Tuan", "cloudy"));
