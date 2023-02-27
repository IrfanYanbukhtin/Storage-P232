// getItem
// setItem
// removeItem
// clear


// localStorage.setItem('user','Huseyn');
// localStorage.setItem('product','Iphone 14');


// // localStorage.removeItem('product')

// localStorage.clear();

// document.getElementById('text').innerHTML = localStorage.getItem('user')


// stringify
// parse

if(localStorage.getItem('users') === null) {
    localStorage.setItem('users',JSON.stringify([]));
}


let btn_register = document.querySelector('.btn');
let name_input = document.querySelector('.name_inp');
let email_input = document.querySelector('.email_inp');

btn_register.onclick = function() {
    let username = name_input.value;
    let email = email_input.value;
    
    let basket = JSON.parse(localStorage.getItem('users'));

    basket.push({
        name: username,
        email: email
    })

   
    localStorage.setItem('users',JSON.stringify(basket));
    ShowUser();
    GetUsers()
    document.querySelector('.alert-msg').classList.remove('d-none')

    setTimeout(() => {
        document.querySelector('.alert-msg').classList.add('d-none')
    }, 1000);

}

function GetUsers() {
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users);

    let user_list = '';

    users.forEach(user => {
        user_list += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `
    })
    document.querySelector('.user-list').innerHTML = user_list
}
GetUsers()


function ShowUser() {
    let users = JSON.parse(localStorage.getItem('users'));
    if(users.length === 0) {
        document.querySelector('.alert-user').classList.remove('d-none')
        document.querySelector('.btn-delete').classList.add('d-none')
        document.querySelector('.table').classList.add('d-none')
    }
    else{
        document.querySelector('.alert-user').classList.add('d-none')
        document.querySelector('.table').classList.remove('d-none')
        document.querySelector('.btn-delete').classList.remove('d-none')
    }
}
ShowUser();


let btn_delete = document.querySelector('.btn-delete');
btn_delete.onclick = function() {
    localStorage.removeItem('users')
    location.reload();
}