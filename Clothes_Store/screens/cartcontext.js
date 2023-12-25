import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// khoi tao, dinh nghia cac thao tac trong gio hang 
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const LOAD_CART_FROM_STORAGE = 'LOAD_CART_FROM_STORAGE';

// Reducer la ham xu ly cac thao tac
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //tim vi tri cua san pham trong items[] thong qua id
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
        //neu san pham ton tai thi soluong +1
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          items: updatedItems,
        };
      } else { //neu chua ton tai thi cap nhat items[] voi so luong = 1   
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      //loai bo san pham co id trung voi action payload khoi mang item[]
      const filteredItems = state.items.filter((item) => item.id !== action.payload);

      return {
        ...state,
        items: filteredItems,
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };

      //tai gio hang tu bo nho asyn storage 
    case LOAD_CART_FROM_STORAGE:
      return {
        ...state,
        items: action.payload, //
      }; 

    default:
      return state;
  }
};

// Trang thai ban dau cua gio
const initialState = {
  items: [],
};

// tao doi tuong context de giu trang thai
export const CartContext = createContext();

// Create context provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const cartItems = await AsyncStorage.getItem('cartItems');
        if (cartItems) {
          dispatch({
            type: LOAD_CART_FROM_STORAGE,
            payload: JSON.parse(cartItems),
          });
        }
      } catch (error) {
        console.error('Error loading cart from AsyncStorage:', error);
      }
    };

    loadCartFromStorage();
  }, [dispatch]);

  const addToCart = async (item) => {
    try {
      const updatedItems = [...state.items, item];
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedItems));
      dispatch({
        type: ADD_TO_CART,
        payload: item,
      });
    } catch (error) {
      console.error('Error adding item to cart and saving to AsyncStorage:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const filteredItems = state.items.filter((item) => item.id !== itemId);
      await AsyncStorage.setItem('cartItems', JSON.stringify(filteredItems));
      dispatch({
        type: REMOVE_FROM_CART,
        payload: itemId,
      });
    } catch (error) {
      console.error('Error removing item from cart and saving to AsyncStorage:', error);
    }
  };

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
      dispatch({
        type: CLEAR_CART,
      });
    } catch (error) {
      console.error('Error clearing cart from AsyncStorage:', error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        dispatch,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
