interface IRatingsAverage {
  ratings: {
    userId: number,
    rate: number    
  }[]
}

export function ratingsAverage({ratings}: IRatingsAverage) {
  const rates = ratings.map(item => item.rate)
  const sum = rates.reduce((acc, value) => acc + value)
  const avg = sum / rates.length || 0
  return avg
}
