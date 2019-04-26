import React from 'react';
import Title from '../../Components/Title/title';
import ITitle from '../../Components/Title/ITitle';
import  observableCartStore  from '../Cart/observableCartStore'

const titles: ITitle[] = [{
     id: 1,
     description: 'Lorem Ipsum is simply dummy text.',
     format: 'print',
     image: 'http://placecorgi.com/200/200',
     name: 'Red Book',
     price: 20
    },
    {
     id: 2,
     description: 'Mel eu appetere quaestio suavitate.',
     format: 'print',
     image: 'http://placecorgi.com/200/200',
     name: 'Blue Book',
     price: 30
    },
    {
     id: 3,
     description: 'Pro ne prima admodum perfecto. Ei consul viderer duo.',
     format: 'online',
     image: 'http://placecorgi.com/200/200',
     name: 'Green Book',
     price: 40
    }];

class TitleList extends React.Component {
    addToCart(title: ITitle) {
        observableCartStore.cartTitles.push(title);
    }

    render() {
        return(
            <div className="main ui text container main-content">
                <h1 className="ui dividing centered header">Titles</h1>
                <div className="ui unstackable items title-list">
                    {
                        titles.map((t) => {
                            return(
                                <Title
                                id={t.id}
                                key={t.id}
                                name={t.name}
                                description={t.description}
                                format={t.format}
                                image={t.image}
                                price={t.price}
                                addToCart={this.addToCart}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TitleList;