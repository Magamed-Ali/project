import React from 'react';

function Button(props) {
    const add = 'Добавлено в корзину';
    const not_add='Добавить в корзину';
    let bta =()=> {
        if (props.bought){
            return add
        }else
        return not_add
    }
    return (
        <div className="card-button">
            <button disabled={props.bought} onClick={()=>{props.setDat(props.id)}} className={'btn'} >{bta()}</button>
        </div>
    );
}

export default Button;