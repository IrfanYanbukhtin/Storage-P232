if(localStorage.getItem('cars') === null) {
    localStorage.setItem('cars',JSON.stringify([]))
}



let add_btn = document.querySelectorAll('.top i');


for(let btn of add_btn) {
    btn.onclick = function() {
        this.classList.toggle('active');

        let car_list = JSON.parse(localStorage.getItem('cars'));

        let car_id = this.parentElement.parentElement.id;
        let car_photo = this.nextElementSibling.src;
        let car_price = this.parentElement.nextElementSibling.children[0].innerHTML;
        let car_model = this.parentElement.nextElementSibling.children[1].innerHTML;
        let add_date = this.parentElement.nextElementSibling.children[2].innerHTML;
        if(this.classList.contains('active')) {
            car_list.push({
                Id: car_id,
                Photo: car_photo,
                Price: car_price,
                Model: car_model,
                CreateDate: new Date().getHours(),
                Count: 1  
            })
            localStorage.setItem('cars',JSON.stringify(car_list));
            ShowCount();
        }
        
        else{
           let x = car_list.find(x => x.Id === car_id);
           console.log(x);

           for (var i = 0; i < car_list.length; i++) {
            var obj = car_list[i];
        
            if (x.Id.indexOf(obj.Id) !== -1) {
                car_list.splice(i, 1);
            }
            localStorage.setItem('cars',JSON.stringify(car_list))
        }
        }
    }
}


function ShowCount() {
    let car_list = JSON.parse(localStorage.getItem('cars'));

    document.getElementById('count').innerHTML = car_list.length;
}

ShowCount();


function Delete() {
    localStorage.removeItem('cars');
    location.reload()
}


function HeartColor() {
    let item_box = document.querySelectorAll('.item-box');
    let cars = JSON.parse(localStorage.getItem('cars'));
    let car_ids = []
    let item_ids = []
    for(let car of cars) {
        car_ids.push(car.Id)
    }
    for(let item of item_box) {
        item_ids.push(item.id)
        for(let itm_ids of item_ids) {
            if(itm_ids === car_ids[0]) {
                itm_ids.children[0].children[0].classList.add('active')
            }
        }
    }
    console.log(car_ids);
    console.log(item_ids);


}

HeartColor()