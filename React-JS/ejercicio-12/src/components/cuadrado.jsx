import React, {useState} from 'react';

const Cuadrado = () => {
    const [color, setColor] = useState('#00000')

    const [manageInterval, setManageInterval] = useState(0)
    const [doubleClick, setDoubleClick] = useState(0)

    const getColor = () => Math.floor(Math.random() * 256)

    const getHex = (red,green,blue) => {
        return (
            '#' + [red,green,blue].map((c) => {
                const hex = c.toString(16)
                return hex.lenght === 1 ? '0' + hex : hex
            })
            .join('')
        )
    }

    const generateHex = () => {
        const rgb = {
            r: getColor(),
            g: getColor(),
            b: getColor(),
        }
        return setColor(getHex(rgb.r, rgb.g, rgb.b))
    }

    const onChangeColor = () => {
        return setManageInterval(setInterval(generateHex, 700))
    }

    const onStopChangeColor = () => {
        return clearInterval(manageInterval)
    }

    const onClickChangeColor = () => {
        return clearInterval(manageInterval)
    }

    return (
        <div style={{ margin: 'auto' }}>
        <div
        id="square"
            onMouseOver={onChangeColor}
            onMouseLeave={onStopChangeColor}
            onDoubleClick={onClickChangeColor}
            style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}
        ></div>{' '}
        <p style={{ color: 'black' }}>Color: {color} </p>
    </div>
    )
}

// const r = 100
// const g = 100
// const b = 100

// const figureOut = {
//     'weight': '255px',
//     'height': '255px',
//     'backgroundColor': (r,g,b)
// }

// const figureIn = {
//     'weight': '255px',
//     'height': '255px',
//     'backgroundColor': () => {
        
//         const background = document.getElementById("background");

//         const getRandomNumber = (maxNum) => {
//         return Math.floor(Math.random() * maxNum);
//         };

//         const getRandomColor = () => {
//         const r = getRandomNumber(100);
//         const g = getRandomNumber(100);
//         const b = getRandomNumber(100);

//         return `rgb(${r}, ${g}, ${b})`;
//         };

//         const setBackgroundColor = () => {
//         const randomColor = getRandomColor();
//         background.style.backgroundColor = randomColor;
//         background.style.color = randomColor;
//         };

//         setBackgroundColor();

//         setInterval(() => {
//         setBackgroundColor();
//         }, 1000);
//     }
// }

// const InFigure = ({inAction, propStyle}) => {
//     return (
//         <div style={propStyle} onClick={inAction}></div>
//     )
// }

// const OutFigure = ({outAction, propStyle}) => {
//     return (
//         <div style={propStyle} onClick={outAction}></div>
//     )
// }

// const Cuadrado = () => {

//     const [enter, setEnter] = useState(false)
    

//     const inAction = () => {
//         setEnter(true)
//         setColor(figureIn)
//     }

//     const outAction = () => {
//         setEnter(false)
//         setColor(color)
//     }

//     let optionalHover

//     if(enter){
//         optionalHover = <InFigure propStyle={figureIn} inAction={inAction}></InFigure>
//     } else {
//         optionalHover = <OutFigure propStyle={figureOut} outAction={outAction}></OutFigure>
//     }

//     return (
//         <div>
//             {optionalHover}
//         </div>
//     );
// }

export default Cuadrado;
