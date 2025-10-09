/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function (skill, mana) {
  let workTime = skill.map(x => x * mana[0])
  let done = cSum(workTime)

  for (const m of mana.slice(1)) {
    // start time + m * skill >= done
    const nextWorkTime = skill.map(x => x * m)
    const nextDone = cSum(nextWorkTime)

    let startTime = done[0]
    for (let i = 0; i < done.length - 1; i++) {
      startTime = Math.max(startTime, done[i + 1] - nextDone[i])
    }

    done = nextDone.map(x => startTime + x)
  }

  return done.at(-1)
};

function cSum(arr) {
  const res = [arr[0]]

  for (const ele of arr.slice(1)) {
    res.push(res.at(-1) + ele)
  }

  return res
}