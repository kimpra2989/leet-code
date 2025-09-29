/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
    this.data = []

    for (let i = 0; i < foods.length; i++) {
        if (!this.data[cuisines[i]]) this.data[cuisines[i]] = []

        this.data[cuisines[i]].push({
            name: foods[i],
            rating: ratings[i]
        })
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
    for (const cuisine in this.data) {
        const foodInfos = this.data[cuisine]
        for (const foodInfo of foodInfos) {
            if (foodInfo.name === food) {
                foodInfo.rating = newRating
                return
            }
        }
    }
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
    const targetFoods = this.data[cuisine]
    let indexes = []
    let highest = -1

    for (let i = 0; i < targetFoods.length; i++) {
        const rating = targetFoods[i].rating

        if (rating < highest) continue

        if (rating > highest) {
            highest = rating
            indexes = []
        }

        indexes.push(i)
    }

    const highestRatedFoodNames = indexes.map(idx => targetFoods[idx].name)
    highestRatedFoodNames.sort()

    return highestRatedFoodNames[0]
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */