import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        {
            console.log(cartItems)
        }
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropDown);