const profile = document.querySelector('#mainProfile');

fetch('https://randomuser.me/api/?results=30')
.then((resp) => resp.json())
.then(function (data){
    let users = data.results;
    return users.map((user) => { 
        
        const mainCard = document.createElement('div');  
        const subCard = document.createElement('div');  
        const bodyFrame = document.createElement('div');  
        const bodyCard = document.createElement('div'); 
        const cardImg = document.createElement('div');  
        const profilePix = document.createElement('img');  
        const profName= document.createElement('h5');
        const p1 = document.createElement('p');  
        const p2 = document.createElement('p');     
        const p3 = document.createElement('p');  
        
        //Appending child elements to parent element
        mainCard.appendChild(subCard);
        subCard.append(cardImg, bodyFrame);
        bodyFrame.appendChild(bodyCard);
        // bodycard.append(profName, p1, p2, p3);
        cardImg.appendChild(profilePix);
        profile.appendChild(mainCard);
        

//Adding classes to elements
mainCard.classList.add("card", "mb-5", "pix");
subCard.classList.add("row", "g-0");
cardImg.classList.add("col-md-3");
bodyFrame.classList.add("col-md-5");
bodyCard.classList.add("card-body");
profilePix.classList.add("img-fluid", "profileImg");

let firstname = user.name.first;
let lastname = user.name.last;
let email = user.email;
let city = user.location.city;
let nat = user.nat;
let heading = bodyCard.appendChild(profName);
let eMail = bodyCard.appendChild(p1);
let city1 = bodyCard.appendChild(p2);
let nat1 = bodyCard.appendChild(p3);
heading.innerHTML = `${firstname} ${lastname}`;
eMail.innerHTML = `${email}`;
nat1.innerHTML = `${nat}`;
city1.innerHTML = `${city}`;
profilePix.src = user.picture.large;
       });

})
.catch(function(error) {
    console.log('error', error);
});