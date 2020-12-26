var articles = document.querySelectorAll('article')

function calSum(){
    let sum = 0;
    for(var i = 0; i < articles.length - 1; i++){
        price = parseInt(articles[i].children[5].children[0].innerHTML)
        sum += price
    }

    document.querySelector('#price').innerHTML = sum;
}

calSum();

for(var i = 0; i < articles.length - 1; i++){
    let qnt = articles[i].children[3];
    let prx = articles[i].children[5].children[0];

    articles[i].children[2].addEventListener('click', function(){
        if(parseInt(qnt.innerHTML) > 0){
            qnt.innerHTML = parseInt(qnt.innerHTML) - 1
            prx.innerHTML = parseInt(qnt.innerHTML) * 100
        }
        calSum();
    })
    
    articles[i].children[4].addEventListener('click', function(){
        qnt.innerHTML = parseInt(qnt.innerHTML) + 1
        prx.innerHTML = parseInt(qnt.innerHTML) * 100
        calSum();
    })

    articles[i].children[6].addEventListener('click', function(e){
        e.target.parentElement.remove();
        articles = document.querySelectorAll('article')
        calSum();
        
        if(articles.length == 1)
            document.querySelector('h3').innerHTML = "Your shopping cart is empty!"
    })

    articles[i].children[7].addEventListener('click', function(e){
        if(e.target.classList.contains('far'))
            e.target.classList.replace('far','fas')
        else
            e.target.classList.replace('fas','far')
            alert("Product has been added in wishlist.")
    })
}