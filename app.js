let colorContainerElement = document.getElementById('background-color');
let containerClicked = false;
let currentColor;

colorContainerElement.onmousemove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const width = colorContainerElement.clientWidth;
    const height = colorContainerElement.clientHeight;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = (x / width) + (y / height) * 100;
    
    const backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
    colorContainerElement.style.backgroundColor = backgroundColor;
    console.log(backgroundColor);
    currentColor = backgroundColor; //TODO don't use global variable
}

colorContainerElement.onclick = (e) => {
    const colorDiv = document.createElement('div');
    colorDiv.style.width = '20vw';
    colorDiv.style.height = '100vh';
    colorDiv.style.display = 'flex';
    colorDiv.style.backgroundColor = currentColor;
    document.body.appendChild(colorDiv);
    
    const rgb = document.createElement('h1');
    rgb.classList.add('rgb');
    rgb.textContent = currentColor;
    colorDiv.appendChild(rgb);
}

//console.log(window)