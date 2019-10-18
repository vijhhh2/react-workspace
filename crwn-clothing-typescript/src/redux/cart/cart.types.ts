export interface ICartState {
    hidden: boolean;
} 

export const TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN';

export interface IToggleCartDropDownAction {
    type: typeof TOGGLE_CART_DROPDOWN;
}

export type CartActions = IToggleCartDropDownAction; 