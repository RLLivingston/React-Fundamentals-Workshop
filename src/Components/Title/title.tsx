import React from 'react';
import ITitle from './ITitle';

type TitleProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    format: string;
    image: string;
    addToCart: (title: ITitle) => void;
}

const Title = (props: TitleProps) => {
    return(
        <div className="item title-item">
            <div className="image">
                <img src={props.image} />
            </div>
            <div className="middle aligned content">
                <div className="description">
                    <a>{props.name}</a>
                    <p>{props.description}</p>
                    <p>Price: ${props.price}</p>
                    <p>Format: {props.format}</p>
                </div>
                <div>
                    <button onClick={() => props.addToCart({
                        format: props.format,
                        description: props.description,
                        price: props.price,
                        name: props.name,
                        image: props.image,
                        id: props.id
                    })}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Title;