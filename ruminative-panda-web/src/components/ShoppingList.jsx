import React from 'react';

class ShoppingList extends React.Component {
    render() {
        return <div className="shopping-list">
            <h1>Shopping list for {this.props.name}</h1>
            <ul>
                <li>bananas</li>
                <li>eggs</li>
            </ul>
        </div>
    }
}

export {
    ShoppingList
}