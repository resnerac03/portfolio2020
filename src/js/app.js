import Glide from '@glidejs/glide'


let glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    autoplay: 1500,
})

glide.mount()