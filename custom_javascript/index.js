
const slider = document.querySelector('.slider_box')
const banner = document.querySelector('.left_banner_text')
const banner_left_img = document.querySelector('.banner_left_img')
const banner_right_img = document.querySelector('.banner_right_img')
const middle_box = document.querySelector('#middle_box')
const five_box_testimonial = document.querySelector('#five_box_testimonial')
const pricing_header = document.querySelector('.pricing_header')
const left_prices = document.querySelector('#left_prices')
const right_prices = document.querySelector('#right_prices')


ScrollReveal().reveal(slider, {
    distance: '150%',
    origin: 'right',
    opacity: 0,
    delay: 400,
    duration: 1000,
    useDelay: 'always',
    scale: 2

});


ScrollReveal().reveal(banner, {
    distance: '200%',
    origin: 'left',
    opacity: 0,
    delay: 100,
    duration: 2000,
})
// ScrollReveal().clean(slider);


ScrollReveal().reveal(banner_left_img, {
    distance: '200%',
    origin: 'top',
    opacity: 0,
    delay: 100,
    duration: 2000,
})
ScrollReveal().reveal(banner_right_img, {
    distance: '150%',
    origin: 'right',
    opacity: 0,
    delay: 100,
    duration: 2000,
})
ScrollReveal().reveal(middle_box, {
    distance: '180%',
    origin: 'right',
    opacity: 0,
    delay: 150,
    duration: 2500,
})
ScrollReveal().reveal(five_box_testimonial, {
    distance: '180%',
    origin: 'top',
    opacity: 0,
    delay: 100,
    duration: 3000,
})
ScrollReveal().reveal(pricing_header, {
    distance: '180%',
    origin: 'top',
    opacity: 0,
    delay: 100,
    duration: 3000,
})

ScrollReveal().reveal(left_prices, {
    distance: '180%',
    origin: 'left',
    opacity: 0,
    delay: 100,
    duration: 2000,
})
ScrollReveal().reveal(right_prices, {
    distance: '180%',
    origin: 'right',
    opacity: 0,
    delay: 100,
    duration: 2000,
})