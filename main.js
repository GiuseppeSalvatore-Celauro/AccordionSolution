let accordionBtn = document.querySelectorAll('.accordionBtn')
let accordionContent = document.querySelectorAll('.accordionContent')
let accordionImg = document.querySelectorAll('.accordion-img')
function reset() {
    accordionBtn.forEach(btn => {
        btn.classList.add('border-1')
        btn.classList.add('border-bottom')
    });
    accordionImg.forEach(img => {
        img.src = './media/icon-plus.svg'
    });
    accordionContent.forEach(content => {
        content.classList.remove('d-none')
        content.classList.add('d-none')
    });
}
function showContent(i) {
    if (accordionImg[i].src === 'http://127.0.0.1:5500/media/icon-plus.svg') {
        reset()
        accordionImg[i].src = './media/icon-minus.svg'
    }else{
        accordionImg[i].src = './media/icon-plus.svg'
    }
    accordionContent[i].classList.toggle('d-none')
}
console.log(accordionBtn)
accordionBtn.forEach((btn, i) => {
    btn.addEventListener('click', ()=>{
        showContent(i)
        btn.classList.toggle('border-1')
        btn.classList.toggle('border-bottom')
    })
});