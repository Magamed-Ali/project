import React, {useState} from 'react';
import Card from "./Card";

function Content(props) {

    const newDatas = props.datas.map((item)=>{
        return(
            <Card
                id={item.id}
                name={item.name}
                price={item.price}
                bought={item.bought}
                rating={item.rating}
                image={item.image}
                newdat={props.newdat}
                setDat={props.setDat}
            />
        )

    })


    return (
        <div className="content">
            {newDatas}
        </div>

    )
};
export default Content;