export default {
  setCurrentCity (state, city) {
    state.currentCity = city
    // console.log(222, city)

    try {
      localStorage.currentCity = city
    } catch (error) {}
  }, 

  
}