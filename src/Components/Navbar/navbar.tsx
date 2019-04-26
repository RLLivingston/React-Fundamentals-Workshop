import React from 'react';
import IObservableCartStore from '../../Containers/Cart/IObservableCartStore';
import { observer } from 'mobx-react';

@observer
class Navbar extends React.Component<{store: IObservableCartStore}> {
    render() {
        let cartCount = this.props.store.cartTitles.length;
        let showCart = () => {
            alert(JSON.stringify(this.props.store.cartTitles))
        }

        return(
            <div className="ui inverted borderless top fixed fluid menu">
                <a className="header item">Cronus</a>
                <div className="right menu">
                    <a className="item" onClick={showCart}>Cart ({cartCount})</a>
                    <div className="item">
                        <div className="ui small input">
                            <input placeholder="Search..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;