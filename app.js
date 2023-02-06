const person = {
  name: "Obaseki Nosa",
  location: "Lagos",
}


window.localStorage.setItem('user', JSON.stringify(person));

console.log(window.localStorage.getItem('user'))

const slider = new A11YSlider(document.querySelector(".slider"),
  {
    
    arrows: false,
    responsive: {
      300: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      },
      768: {
        slidesToShow: 2,
        arrows: false
      },
      960: {
        disable: true // slider disabled 960px to 1279px
      },
      1280: {
        disable: false,
        slidesToShow: 3,
        dots: true // dots enabled 1280px and up
      }
    }
  });