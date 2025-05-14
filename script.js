
const addToCard = document.querySelectorAll('.dessert-btn');
const btnCounters  =document.querySelectorAll('.dessert-counter');
const dessertInfos = document.querySelectorAll('.dessert-info');
let container = document.querySelector('.new-added-card');
let totalPrice = 0;
let totalPriceHtml = document.querySelector('.total-price');
let containerFinal = '';

console.log(addToCard);

for(let i=0;i<addToCard.length;i++){
    
    const btnAddToCard = addToCard[i];
    const btnCounter = btnCounters[i];
    let curCard = dessertInfos[i];
    console.log(curCard);
    btnAddToCard.addEventListener('click',function(){
        btnAddToCard.style.display = 'none';
        btnCounter.style.display = 'flex';
        const addCount = btnCounter.querySelector('.btn-plus');
        const minusCount = btnCounter.querySelector('.btn-minuse');
        let x = 0;
        console.log(addCount);
        let card = document.createElement('div');
        card.classList.add('new-added-card');
        let price = parseFloat(curCard.querySelector('.dessert-price').textContent);
        addCount.addEventListener('click',function(){
            x++;
            btnCounter.querySelector('.counter').innerHTML = x;
            
            if(x == 1){
                card.innerHTML = `
                <div class="flex row items-center justify-between">
                    <div class="info-text">
                    <span class="dessert-fname">${curCard.querySelector('.dessert-fname').textContent}</span>
                    <div class="info-price-text">
                        <span class="text-red-500 counter">1x</span>
                        <span class="actual-price">${curCard.querySelector('.dessert-price').textContent}</span>
                        <span class="total-price" >${curCard.querySelector('.dessert-price').textContent}</span>
                    </div>
                    </div>
                    <button class="p-2 cursor-pointer outline rounded outline-rose-200"><img src="assets/images/icon-remove-item.svg"></button>
                </div>
            `;
                container.appendChild(card);
            }
            else{
                card.querySelector('.counter').textContent = x + 'x'; 
                card.querySelector('.total-price').textContent ='$' + (parseFloat(card.querySelector('.actual-price').textContent) * x);
               
            }
            totalPrice += price;
            totalPriceHtml.innerHTML = totalPrice;
            containerFinal.innerHTML = container;
        });
        minusCount.addEventListener('click',function(){
            if(x>1){
                x--;
                btnCounter.querySelector('.counter').innerHTML = x;
                card.querySelector('.counter').textContent = x + 'x'; 
                card.querySelector('.total-price').textContent ='$' + parseFloat(card.querySelector('.actual-price').textContent) * x;
            }     
            else{
                card.innerHTML = ``;
            }  
            totalPrice -= price;
            totalPriceHtml.innerHTML = totalPrice;
            containerFinal.innerHTML = container;
        })

    });

}

let finalOrders = document.querySelector('.final-orders');


document.querySelector('.btn-confirm').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = 'grey';
    document.querySelector('body').style.opacity = 0.7;
    finalOrders.appendChild(container);
    finalOrders.style.display = 'flex';

});