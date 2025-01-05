function sumByKey (array, key) {
  return array.reduce((acc, item) => acc + item[key], 0)
}

/**
 *
 * @param {{[key]: number}} array
 * @param {string} key
 * @param {*} totalPropability
 * @returns
 */
export function pickByPropability (array, key) {
  const sumPropability = sumByKey(array, 'propability')
  const r = Math.random() * sumPropability
  let acc = 0
  let index = 0
  for (const item of array) {
    acc += item[key]
    if (r < acc) {
      return [item, index]
    }
    index++
  }
  return [array.at(-1), index]
}

export function randomArray (array) {
  const a = [...array]
  const newArray = []
  while (a.length > 0) {
    const i = Math.floor(Math.random() * a.length)
    newArray.push(a.splice(i, 1)[0])
  }
  return newArray
}
