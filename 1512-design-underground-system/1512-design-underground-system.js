
var UndergroundSystem = function () {
  this.stations = {} // { from : { to : time[] } }
  this.checkInData = {}  // { id : { stationName, time }}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkInData[id] = { stationName, t }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const { stationName : checkInStationName, t : checkInTime } = this.checkInData[id]
  delete this.checkInData[id]

  const travelTime = t - checkInTime 
  if (!this.stations[checkInStationName]) this.stations[checkInStationName] = {}

  if (!this.stations[checkInStationName][stationName]) this.stations[checkInStationName][stationName] = []
  this.stations[checkInStationName][stationName].push(travelTime)
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const travelTimes = this.stations[startStation][endStation]
  const sum = travelTimes.reduce((sum, t) => sum  + t)

  return sum / travelTimes.length
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */