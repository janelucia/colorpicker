let colorContainerElement = document.getElementById('background-color');

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
    //return result;
}

colorContainerElement.onclick = (e) => {
    const colorDiv = document.createElement('div');
    colorDiv.style.width = '20vw';
    colorDiv.style.height = '100vh';
    colorDiv.style.backgroundColor = 'red';

    document.body.appendChild(colorDiv);
    
    const rgb = document.createElement('h1');
    rgb.style.textAlign = 'center';
    rgb.textContent = 'rgb';
    colorDiv.appendChild(rgb);
}

//console.log(window)