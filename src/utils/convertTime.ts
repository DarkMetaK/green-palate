export function convertTime(millis: number) {
  const minutes = Math.floor(millis / 60000)
  let text = ''
  
  if (minutes > 60) {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = (minutes % 60).toLocaleString('default', {minimumIntegerDigits: 2})
    text = `${hours}:${remainingMinutes} h`
  } else {
    text = `${minutes} min`
  }

  return text
}
