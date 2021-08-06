function displayData (i) {
    let body = document.querySelector('body');

    let divElement = document.createElement('div');
    let newElement = document.createElement('p');
    newElement.innerHTML = data.results[i].name['first'] + ' ' + data.results[i].name['last']
    divElement.appendChild(newElement);
    
    let newPic = document.createElement('img');
    newPic.src = data.results[i].picture['large']
    divElement.appendChild(newPic);
    
    let newEmail = document.createElement('email');
    newEmail.innerHTML = data.results[i].email;
    divElement.appendChild(newEmail);

    body.appendChild(divElement);
}

for (let i = 0; i < data.results.length; i++){
    displayData(i);
}