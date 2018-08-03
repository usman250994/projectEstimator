export function fetchHours(payload) {
  console.log('iuuiui', payload);
  return {
    type: 'GET_HOURS',
    payload: payload
  }
}