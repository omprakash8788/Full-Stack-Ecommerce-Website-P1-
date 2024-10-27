// import { createContext, useEffect, useState } from "react";
// // import { products } from "../assets/assets";
// import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'
// export const ShopContext=createContext();

// const ShopContextProvider=(props)=>{
//     const currency='$';
//     const delivery_fee=10;

//     const backendUrl= import.meta.env.VITE_BACKEND_URL;


//     const [search, setSearch]=useState("");
//     const [showSearch, setShowSearch]=useState(false);
//     const [cartItems, setCartItems]=useState({});
//     const [products, setProducts]=useState([]);
//     const [token, setToken]=useState([]);
//     const navigate = useNavigate();


//     const addToCart=async(itemId, size)=>{
//         if(!size){
//             toast.error("Select Product Size");
//             return;
//         }
//         // cartData
//         // let cartData=structuredClone(cartItems);
//         // let cartData = structuredClone(cartItems);
//         // // cartData[itemId]
//         // if(cartData[itemId]){
//         //     if(cartData[itemId][size]){
//         //         cartData[itemId][size] += 1;
//         //     }
//         //     else{
//         //         cartData[itemId][size] = 1;
//         //     }
//         // }
//         // else{
//         //     cartData[itemId]={};
//         //     cartData[itemId][size]=1
//         // }
//         // setCartItems(cartData)

//         let cartData = structuredClone(cartItems);
//         if (cartData[itemId]) {
//           if (cartData[itemId][size]) {
//             cartData[itemId][size] += 1;
//           } else {
//             cartData[itemId][size] = 1;
//           }
//         } else {
//           cartData[itemId] = {};
//           cartData[itemId][size] = 1;
//         }
    
//         setCartItems(cartData);


//         if(token){
//            try {
//         await axios.post(
//           backendUrl + "/api/cart/add",
//           { itemId, size },
//           { headers: { token } }
//         );
//       } catch (error) {
//                 console.log(error);
//                 toast.error(error.message)
                
                
//             }
//         }
//     }

//     const getCartCount = ()=>{
//         let totalCount=0;
//         for(const items in cartItems){
//             for(const item in cartItems[items]){
//                 try {
//                     if(cartItems[items][item]>0){
//                         totalCount += cartItems[items][item]
//                     }

                    
//                 } catch (error) {
//                     console.log(error);
                    
                    
//                 }
//             }
//         }
//         return totalCount;
//     }


//     const updateQuantity = async(itemId, size, quantity)=>{
//         // let cartData=structuredClone(cartItems);
//         // cartData[itemId][size]= quantity
//         // setCartItems(cartData)

//         let cartData = structuredClone(cartItems);

//         cartData[itemId][size] = quantity; 
    
//         setCartItems(cartData);
//         if(token){
//           try {
//             await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers:{token}})
            
//           } catch (error) {
//             console.log(error);
//             toast.error(error.message)
            
            
//           }
//         }
        

//     }

//     // Total Cart logic.
//     const getCartAmount=()=>{
//         let totalAmount =0;
//         for(const items in cartItems){
//             let itemInfo=products.find((product)=>product._id===items);
//             for(const item in cartItems[items]){
//                 try {
//                     if(cartItems[items][item]>0){
//                         totalAmount += itemInfo.price * cartItems[items][item]
//                     }
                    
//                 } catch (error) {
//                     console.log(error);
                    
                    
//                 }
//             }
//         }
//         return totalAmount
//     }

//   useEffect(()=>{
//     console.log(cartItems);
    

//   },[cartItems])

//   const getProductData = async()=>{
//     try {
//         const response = await axios.get(backendUrl + '/api/product/list')
//         //  console.log(response.data);
//         if(response.data.success){
//             setProducts(response.data.products)
//         }
//         else{
//             toast.error(response.data.message)
//         }
         
//     } catch (error) {
//         console.log(error);
//         toast.error(error.message)
        
        
//     }
//   }


//    // here we will add the logic so that whenever we will reload the web page then the cart data will be update from the database and reflect on UI side.
//    const getUserCart = async (token)=>{
//     try {
//       const response = await axios.post(backendUrl + "/api/cart/get",{}, {headers:{token}} )
//       // {} <-- here we dont send anything in the body,
//       // headers - {headers:{token}} <--- sending token in headers
//        if(response.data.success){
//         // if it is true, it means we have receive the cart data
//         // And we will store the cart data in the state variable
//         setCartItems(response.data.cartData)
//        }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
      
      
//     }
//     // After that run this function when our page is reload.

//   }

//   useEffect(()=>{
//     getProductData();
//   },[])

//   useEffect(()=>{
//     if(!token && localStorage.getItem("token")){
//         setToken(localStorage.getItem("token"))
//         getUserCart(localStorage.getItem("token"))
//     }

//   },[])



//     const value={
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         setCartItems,
//         cartItems,
//         addToCart,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         token,
//         setToken,
//         // getUserCart

//     }


//     return(
//         <ShopContext.Provider value={value}>
//           {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;




import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// 1. create
export const ShopContext = createContext();

//2 create context provider function
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  // For Login
  // So when we will authenticated then we will get the token and we will store them in this token state variable.
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  // 1. create function for get cart count
  const getCartCount = () => {
    let totalCount = 0;
    // this is for in loop
    // first for loop help us to extract the items
    for (const items in cartItems) {
      // add another for in loop
      // second for loop itrate the product size
      for (const item in cartItems[items]) {
        // after that use the try catch block
        try {
          // if condition  - here  "cartItems[items][item]>0" it means in the cart item we have the product with the particular size, in that case we will increase the count
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  // here we will create one update function using that clear the cart data or we can also modified the cart items
  const updateQuantity = async (itemId, size, quantity) => {
   
  //   cartData
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity; 

    setCartItems(cartData);

    // After that we will be add the Api in this update quantity, so that when we are add the cart page and update any quantity then that quantity will be updated in the database.
     if(token){
      // if the token is available it means we are loggigned
      try {
        // So, here we will call the Api
        await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers:{token}})
        // Body = {itemId, size, quantity} <--- In body we are providing itemId, size, quantity.
        // headers = {headers:{token}} <--- In headers we are providing token.
        // " await axios.post(backenUrl + '/api/cart/update', {itemId, size, quantity}, {headers:{token}})" -> So, whenever we call this Api , it will update the carts.
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
     }
  };

  //  Total cart amount logic
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getProductsData = async () => {
    try {
      // call the api
      const response = await axios.get(backendUrl + "/api/product/list");
     
      if (response.data.success) {
        setProducts(response.data.products);
      }
      // if condition is false
      else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // here we will add the logic so that whenever we will reload the web page then the cart data will be update from the database and reflect on UI side.
  const getUserCart = async (token)=>{
    try {
      const response = await axios.post(backendUrl + "/api/cart/get",{}, {headers:{token}} )
      // {} <-- here we dont send anything in the body,
      // headers - {headers:{token}} <--- sending token in headers
       if(response.data.success){
        // if it is true, it means we have receive the cart data
        // And we will store the cart data in the state variable
        setCartItems(response.data.cartData)
       }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
      
    }
    // After that run this function when our page is reload.

  }


  //  After that call the getProductsData  function
  useEffect(() => {
    getProductsData();
  }, []);

  // To prevent login page - so when we refreash web page , our token will not removed
  useEffect(() => {
   
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      
      getUserCart(localStorage.getItem("token"))
    }
  }, []);

  const value = {
    // when ever we will add any variable or state or function with in this value object we can access it any component using the context API
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    setCartItems
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

