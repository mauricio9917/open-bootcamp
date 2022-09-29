import React, {useState} from 'react';

const r = 100
const g = 100
const b = 100

const figureOut = {
    'weight': '255px',
    'height': '255px',
    'backgroundColor': (r,g,b)
}

const figureIn = {
    'weight': '255px',
    'height': '255px',
    'backgroundColor': () => {
        
        const background = document.getElementById("background");

        const getRandomNumber = (maxNum) => {
        return Math.floor(Math.random() * maxNum);
        };

        const getRandomColor = () => {
        const r = getRandomNumber(100);
        const g = getRandomNumber(100);
        const b = getRandomNumber(100);

        return `rgb(${r}, ${g}, ${b})`;
        };

        const setBackgroundColor = () => {
        const randomColor = getRandomColor();
        background.style.backgroundColor = randomColor;
        background.style.color = randomColor;
        };

        setBackgroundColor();

        setInterval(() => {
        setBackgroundColor();
        }, 1000);
    }
}

const InFigure = ({inAction, propStyle}) => {
    return (
        <div style={propStyle} onClick={inAction}></div>
    )
}

const OutFigure = ({outAction, propStyle}) => {
    return (
        <div style={propStyle} onClick={outAction}></div>
    )
}

const Cuadrado = () => {

    const [enter, setEnter] = useState(false)
    const [color, setColor] = useState([r,g,b])

    const inAction = () => {
        setEnter(true)
        setColor(figureIn)
    }

    const outAction = () => {
        setEnter(false)
        setColor(color)
    }

    let optionalHover

    if(enter){
        optionalHover = <InFigure propStyle={figureIn} inAction={inAction}></InFigure>
    } else {
        optionalHover = <OutFigure propStyle={figureOut} outAction={outAction}></OutFigure>
    }

    return (
        <div>
            {optionalHover}
        </div>
    );
}

export default Cuadrado;
