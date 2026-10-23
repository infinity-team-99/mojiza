let amount2 = document.getElementById('amount');
let amount = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

amount2.addEventListener('input', () =>{
    document.head.innerHTML = `
<style>
input {
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid gold;
    background-color: rgba(255, 255, 0, 0.293);
    backdrop-filter: blur(30px);
    padding: 0px 20px;
    font-size: 18px;
}

select {
    height: 45px;
    border-radius: 10px;
    border: 2px solid gold;
    background-color: rgba(255, 255, 0, 0.293);
    backdrop-filter: blur(30px);
    padding: 0px 20px;
    font-size: 18px;

}

button {
    height: 45px;
    border-radius: 10px;
    padding: 0px 20px;
    border: 2px solid gold;
    background-color: rgba(255, 255, 0, 0.293);
    backdrop-filter: blur(30px);
    font-size: 18px;
    animation-name: btn;
    animation-duration: 7s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;


}

.yaxu {
    height: 980px;
    display: none;
    justify-content: center;
    align-items: end;
    right: 720px;
    position: absolute;
    top: -500px;
    animation-name: yaxu;
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;

}

.yaxu2 {
    height: 980px;
    display: none;
    justify-content: center;
    align-items: end;
    right: 620px;
    position: absolute;
    top: -500px;
    animation-name: yaxu2;
    animation-duration: 3s;
    animation-delay: 0.7s;
    animation-fill-mode: backwards;
    animation-timing-function: linear;
}

.ota {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 500px;
    margin: 100px auto;
    border-radius: 10px;

    gap: 20px;
    background: linear-gradient(45deg, rgba(255, 217, 0, 0.21) 87%, rgba(0, 244, 0, 0.199) 22%, rgba(255, 255, 255, 0.232) 10%);
    flex-direction: column;
    padding-bottom: 50px;
}

.aq {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

}

body {
    font-family: "Edu QLD Hand", cursive;
    font-optical-sizing: auto;

    background: url(https://img.goodfon.ru/original/3840x2400/0/e5/dollar-bitkoin-razmytie-dollar-bitcoin-btc-coins.jpg) no-repeat top/cover;
}

h3 {
    height: 45px;
    border-radius: 10px;
    padding: 0px 40px;
    border: 2px solid gold;
    backdrop-filter: blur(30px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-bottom: 50px;
}

.shrek {
    height: 300px;
    position: absolute;
    right: -300px;
    display: flex;

}

.ajdarbek {
    height: 300px;
    position: absolute;
    right: -300px;
    top: 160px;
    display: flex;
    animation-name: ajdar;
    animation-duration: 4s;
    animation-fill-mode: backwards;
}

.panda {
    height: 300px;
    position: absolute;
    right: -300px;
    animation-name: panda;
    animation-duration: 0.5s;
    animation-direction: alternate;
    display: flex;

    animation-fill-mode: backwards;
}
@keyframes ajdar {
    0% {
        display: flex;
        position: absolute;
        z-index: 1;
        right: -300px;
    }

    100% {
        position: absolute;
        top: 30px;
        right: 1550px;
        z-index: 1;
    }
}
</style>

`
})

function convertCurrency(){
    


fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
.then(res => res.json())
.then(data => {
    let rate = data.rates[to];
    result.innerText = `${amount} ${from} = ${(amount * rate).toFixed(2)} ${to}`

})
.catch(() => alert('Error'))
document.head.innerHTML = `
<style>
input {
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid gold;
    background-color: rgba(255, 255, 0, 0.293);
    backdrop-filter: blur(30px);
    padding: 0px 20px;
    font-size: 18px;
}

select {
    height: 45px;
    border-radius: 10px;
    border: 2px solid gold;
    background-color: rgba(255, 255, 0, 0.293);
    backdrop-filter: blur(30px);
    padding: 0px 20px;
    font-size: 18px;

}

button {
    height: 45px;
    border-radius: 10px;
    padding: 0px 20px;
    border: 2px solid gold;
    background-color: rgba(255, 255, 0, 0.293);
    backdrop-filter: blur(30px);
    font-size: 18px;
    animation-name: btn;
    animation-duration: 7s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;


}

.yaxu {
    height: 980px;
    display: flex;
    justify-content: center;
    align-items: end;
    right: 720px;
    position: absolute;
    top: -500px;
    animation-name: yaxu;
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;

}

.yaxu2 {
    height: 980px;
    display: flex;
    justify-content: center;
    align-items: end;
    right: 620px;
    position: absolute;
    top: -500px;
    animation-name: yaxu2;
    animation-duration: 3s;
    animation-delay: 0.7s;
    animation-fill-mode: backwards;
    animation-timing-function: linear;
}

.ota {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 500px;
    margin: 100px auto;
    border-radius: 10px;

    gap: 20px;
    background: linear-gradient(45deg, rgba(255, 217, 0, 0.21) 87%, rgba(0, 244, 0, 0.199) 22%, rgba(255, 255, 255, 0.232) 10%);
    flex-direction: column;
    padding-bottom: 50px;
}

.aq {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

}

body {
    font-family: "Edu QLD Hand", cursive;
    font-optical-sizing: auto;

    background: url(https://img.goodfon.ru/original/3840x2400/0/e5/dollar-bitkoin-razmytie-dollar-bitcoin-btc-coins.jpg) no-repeat top/cover;
}

h3 {
    height: 45px;
    border-radius: 10px;
    padding: 0px 40px;
    border: 2px solid gold;
    backdrop-filter: blur(30px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-bottom: 50px;
}

.shrek {
    height: 300px;
    position: absolute;
    right: -300px;
    display: flex;

}

.ajdarbek {
    height: 300px;
    position: absolute;
    right: -300px;
    top: 160px;
    display: flex;
    animation-name: ajdar;
    animation-duration: 4s;
    animation-fill-mode: backwards;
}

.panda {
    height: 300px;
    position: absolute;
    right: -300px;
    animation-name: panda;
    animation-duration: 0.5s;
    animation-direction: alternate;
    display: flex;

    animation-fill-mode: backwards;
}
@keyframes panda {
    0% {
        display: flex;
        position: absolute;
        top: -50px;
        right: -300px;
    }

    100% {
        position: absolute;
        top: 130px;
        z-index: 1;
        right: 350px;

    }
}

@keyframes yaxu {

    0% {

        display: flex;
        transform-origin: top left;
        transform: rotate(-90deg);


    }

    100% {

        z-index: 1;
        transform-origin: top left;
        transform: rotate(90deg);

    }
}



@keyframes btn {
    0% {
        background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0NUB3qCrMhtCn-xbM9QXVdx9i9i-2Y7ePJCt2WAdtff7JF5Q5yYkNT4&s=10) no-repeat center/cover;

        transform: translate(0);
        transform-origin: rotate(0deg);

        transform: rotate(0deg);
    }


    70% {
        background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0NUB3qCrMhtCn-xbM9QXVdx9i9i-2Y7ePJCt2WAdtff7JF5Q5yYkNT4&s=10) no-repeat center/cover;
        border: none;
        padding: 20px;
        transform-origin: left top;
        transform: translate(90px, 30px);
        transform: rotate(3670deg);

    }

    100% {
         background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0NUB3qCrMhtCn-xbM9QXVdx9i9i-2Y7ePJCt2WAdtff7JF5Q5yYkNT4&s=10) no-repeat center/cover;
        border: none;
        padding: 20px;
        
        transform-origin: left top;
        transform: rotate(3690deg) translateX(900px);

    }
}

@keyframes yaxu2 {

    0% {

        display: flex;
        transform-origin: top left;
        transform: rotate(-90deg);


    }

    100% {

        z-index: 1;
        transform-origin: top left;
        transform: rotate(0deg);


    }
}
</style>

`


}




































































































































































































































