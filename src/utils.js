import get from 'lodash/get'
import padStart from 'lodash/padStart'

export const formatDate = d => {
  const month = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov. ',
  ][d.getMonth()]
  let date = get(['1st', '2nd', '3rd'], `${d.getDate()}`) || `${d.getDate()}th`
  return `${month} ${date}`
}

export const formatTime = time => {
  const hour = padStart(time.getHours(), 2, '0')
  const minute = padStart(time.getMinutes(), 2, '0')
  return `${hour}:${minute}`
}
