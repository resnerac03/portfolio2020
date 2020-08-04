import Glide from '@glidejs/glide'


let glide = new Glide('.glide', {
    type: 'carousel',
    gap: 10,
    startAt: 0,
    perView: 5,
    autoplay: 1500,
})

glide.mount()

let card = document.getElementsByClassName('card');
let modal =  document.getElementsByClassName('modal');


const openModal = (id) =>{
    Array.from(modal).forEach(e => {
        const modal = e;

        if(modal.id == id){
            modal.classList.add('animate__animated', 'animate__slideInUp', 'animate__faster', '-open');

            document.getElementsByTagName("body")[0].style.overflowY = 'hidden';

            // CLOSE BUTTON
            const close = modal.getElementsByClassName('close')[0];
            close.addEventListener('click', ()=> {
                modal.classList.add('animate__slideOutDown');
                document.getElementsByTagName("body")[0].style.overflowY = 'auto';
               
                setTimeout(() => {
                    modal.classList.remove('-open', 'animate__slideInUp', 'animate__slideOutDown');
                }, 100);
            })
        
        }
    })
}


Array.from(card).forEach(e => {
    e.addEventListener('click', (res)=> {
        let id = res.currentTarget.id
        openModal(id);
    });

    // e.addEventListener('mouseover', (res) => {
    //     const btn = res.currentTarget.getElementsByClassName('cards-btn')[0]
    //     btn.classList.add('animate__animated','animate__slideInUp');
    //     // res.currentTarget.classList.add('animate__animated','animate__slideInUp');
    // })
})

