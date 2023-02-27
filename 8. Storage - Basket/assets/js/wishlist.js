function GetItems() {
    let car_list = JSON.parse(localStorage.getItem('cars'));
    
    let cars = '';

    car_list.forEach(car => {
        cars += `
        <div class="col-lg-3">
        <div id="1" class="item-box">
          <div class="top">
            <i class="fa-solid fa-heart"></i>
            <img src=${car.Photo} alt="">
          </div>
          <div class="bottom">
            <h5>${car.Price}</h5>
            <p>${car.Model}</p>
            <p>${car.CreateDate}</p>
          </div>
        </div>
      </div>
        `
    })

    document.getElementById('row-list').innerHTML = cars
}

GetItems()