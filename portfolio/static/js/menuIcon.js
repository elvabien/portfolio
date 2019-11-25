export default ( () => {
  document.querySelector('.js-menuIcon').addEventListener('click', function(e) {
    e.stopPropagation()
    document.querySelector('.js-firstBar').classList.toggle('epw-firstBar')
    document.querySelector('.js-secondBarOver').classList.toggle('epw-secondBarOver')
    document.querySelector('.js-secondBarOverBefore').classList.toggle('epw-secondBarOverBefore')
    document.querySelector('.js-fourthBar').classList.toggle('epw-fourthBar')

  })

  document.addEventListener('click', function(e) {
    document.querySelector('.js-firstBar').classList.remove('epw-firstBar')
    document.querySelector('.js-secondBarOver').classList.remove('epw-secondBarOver')
    document.querySelector('.js-secondBarOverBefore').classList.remove('epw-secondBarOverBefore')
    document.querySelector('.js-fourthBar').classList.remove('epw-fourthBar')
  })
})()