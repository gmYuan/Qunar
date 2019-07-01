let defaultCity = '上海'

try {
  if (localStorage.currentCity) {
    defaultCity = localStorage.currentCity
  }
  
} catch (error) {}

export default {
  currentCity: defaultCity,
}