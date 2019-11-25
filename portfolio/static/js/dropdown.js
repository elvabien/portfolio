export default ( () => {
  document.querySelector('.js-menuIcon').addEventListener("click", function(e) {
    e.stopPropagation()
    document.querySelector('.js-header').classList.toggle('epw-Header--navOpen')
  })

  document.addEventListener("click", function(e) {
    document.querySelector(".js-header").classList.remove('epw-Header--navOpen')
  })
})()