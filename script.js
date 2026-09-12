let nameInput = document.getElementById('name')

let amountInput = document.getElementById('amount')

let dateInput = document.getElementById('date')

let addBtn = document.querySelector('.box1 button')

let itemcounter = document.querySelector('.firstBox span')

let mainOutput = document.getElementsByClassName('result')[0]

let emptyMassage = document.getElementsByClassName('emptyMassage')[0]

let totalAmount = document.getElementsByClassName('total')[0]


let arr = JSON.parse(localStorage.getItem('itemName')) || []


addBtn.addEventListener('click',function(){
    arr.push({
        name : nameInput.value,
        amount : amountInput.value,
        date : dateInput.value
    })
    
    
    forevery()
    nameInput.value = ''
    amountInput.value = ''
    dateInput.value = ''
})

function forevery(){
    mainOutput.innerHTML = ''
    localStorage.setItem('itemName',JSON.stringify(arr))
    arr.forEach(function(item){
        mainOutput.innerHTML += `<div class="outputBox">
        <div class="name">
            <h3 class="firstInput">${item.name}</h3>
            <span class="dateInput">${item.date}</span>
        </div>
        <div class="priceInput">৳ ${item.amount}</div>
        <button class="delete">Delete</button>
    </div>`
    }) 
    
    
    let deletebutton = document.querySelectorAll('.delete')

    let convertdelete = Array.from(deletebutton);

    convertdelete.forEach(function(items,index){
        items.addEventListener('click',function(){
            arr.splice(index,1)
            mainOutput.innerHTML = ''
            forevery()
        })
    })
    arr.length <= 0? emptyMassage.style.display = 'block': emptyMassage.style.display = 'none'
    
}


forevery()


