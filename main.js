


class App {
    constructor () {
        this.initAllElements()
        this.addEventListenrs()
    }
    initAllElements(){
        this.cart = document.querySelector('#cart')
        this.insideCart = document.querySelector('.insideCart')
        this.mainImgs = document.querySelectorAll('.main-product-preview')
        this.otherImgs = document.querySelectorAll('.other-product-img')
        this.minus = document.querySelector('#minus')
        this.plus = document.querySelector('#plus')  
        this.value = document.querySelector('#value')  
        this.addProductBtn = document.querySelector('#cartBtn')
        this.lightBox = document.querySelector('#lightBox') 
        this.closeLightBoxBtn = document.querySelector('#closelightbox')
        this.nextBtns = document.querySelectorAll('.next')
        this.previousBtns = document.querySelectorAll('.previous')
        this.amount = document.querySelector('#amount')
        this.totalValue  = document.querySelector('#totalValue')
        this.product = document.querySelector('.product')
        this.checkoutBtn = document.querySelector('.checkout')
        this.emptyMassage = document.querySelector('.emptyText')
        this.deleteBtn = document.querySelector('#delete')
        this.menuBtn = document.querySelector('#menu')
        this.closeMenuBtn = document.querySelector('#closeMenu')
        this.sidemenu = document.querySelector('.sidemenu')
        this.imgs = ['./images/image-product-1.jpg','./images/image-product-2.jpg','./images/image-product-3.jpg','./images/image-product-4.jpg']
        this.nextImgIndex = 1
        this.preImgIndex = 3
    }
    addEventListenrs(){
        this.mainImgs[1].addEventListener('click', this.mainImgClick.bind(this))
        this.otherImgs.forEach((el)=>{
            el.addEventListener('click' , this.otherImgClick.bind(this))
        })
        this.nextBtns.forEach((el)=>{
            el.addEventListener('click' , this.nextBtnClick.bind(this))
        })
        this.previousBtns.forEach((el)=>{
            el.addEventListener('click' , this.preBtnClick.bind(this))
        })
        this.cart.addEventListener('click' , this.cartClick.bind(this))
        this.plus.addEventListener('click' , this.plusClick.bind(this))
        this.minus.addEventListener('click' , this.minusClick.bind(this))
        this.addProductBtn.addEventListener('click' , this.addProductBtnClick.bind(this))
        this.deleteBtn.addEventListener('click' , this.deleteBtnClick.bind(this))
        this.menuBtn.addEventListener('click' , this.menuBtnClick.bind(this))
        this.closeMenuBtn.addEventListener('click' , this.closeMenuBtnClick.bind(this))
    }
    menuBtnClick(){
        document.querySelector('.overlay').classList.add('lightboxappere')
        this.sidemenu.classList.remove('hidden')
    }
    closeMenuBtnClick(){
        document.querySelector('.overlay').classList.remove('lightboxappere')
        this.sidemenu.classList.add('hidden')
    }
    deleteBtnClick(){
        this.product.classList.toggle('hidden')
        this.product.classList.toggle('flex')
        this.checkoutBtn.classList.toggle('hidden')
        this.emptyMassage.classList.remove('hidden')
        document.querySelector('#notification').classList.toggle('hidden')
    }
    addProductBtnClick(){
        if(Number(this.value.textContent) > 0){
            this.product.classList.remove('hidden')
            this.product.classList.add('flex')
            this.checkoutBtn.classList.remove('hidden')
            this.emptyMassage.classList.add('hidden')
            this.amount.textContent = this.value.textContent
            this.totalValue.textContent = `$${Number(this.amount.textContent) * 125}.00`
            document.querySelector('#notification').classList.remove('hidden')
            document.querySelector('#notification').textContent = this.value.textContent 
        }else{
            this.product.classList.add('hidden')
            this.product.classList.remove('flex')
            this.checkoutBtn.classList.add('hidden')
            document.querySelector('#notification').classList.add('hidden')
            this.emptyMassage.classList.remove('hidden')
        }
        this.value.textContent = 0
    }
    plusClick(){
        this.value.textContent = Number(this.value.textContent) + 1
    }
    minusClick(){
        Number(this.value.textContent) == 0 ? '' :this.value.textContent = Number(this.value.textContent) - 1
    }
    cartClick(e){
        this.insideCart.classList.toggle('hidden')
        this.insideCart.classList.toggle('flex')
    }
    nextBtnClick(){
        this.nextImgIndex == this.imgs.length ?  this.nextImgIndex = 0 : '' 
        this.setActiveImg(this.imgs[this.nextImgIndex] , this.imgs[this.nextImgIndex] )
        this.nextImgIndex +=1
    }
    preBtnClick(){
        this.preImgIndex == -1 ? this.preImgIndex = 3: ''
        this.setActiveImg(this.imgs[this.preImgIndex] , this.imgs[this.preImgIndex] )
        this.preImgIndex -=1
    }

    mainImgClick (e){
        if(document.body.clientWidth > 550){
            this.lightBox.classList.toggle('hidden')
            document.querySelector('.overlay').classList.toggle('lightboxappere')
            this.closeLightBoxBtn.addEventListener('click' , () =>{
                this.lightBox.classList.add('hidden')
                document.querySelector('.overlay').classList.remove('lightboxappere')
            })
        }
    }
    setActiveImg(url , target = ''){
        this.mainImgs.forEach((el)=>{
            el.style.cssText = `background-image: url(${url}) !important;`
        })
        this.otherImgs.forEach((el)=>{
            el.getAttribute('data-bg') == target ? el.classList.add('active') : el.classList.remove('active')
        })
    }
    otherImgClick(e){
        let clickedImgUrl = e.target.getAttribute('data-bg')
        this.setActiveImg(clickedImgUrl , e.target.getAttribute('data-bg'))
        e.target.classList.add('active')
    }
}

new App()