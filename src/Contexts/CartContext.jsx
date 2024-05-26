import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProductList = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [sliderProduct, setSliderProduct] = useState([]);
  const [productData, setProductData] = useState([]);
  const getProductData = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setProductData(res.data));
  };
  const getHomeProductData = () => {
    axios
      .get("http://localhost:3000/HomeProduct")
      .then((res) => setSliderProduct(res.data));
  };
  useEffect(() => {
    getProductData();
    getHomeProductData();
  }, []);
  useEffect(() => {
    setProductData((prevdata) => [...prevdata, ...sliderProduct]);
  }, [sliderProduct]);
  const [tes, setTes] = useState(false);

  const [tr, setTr] = useState(true);
  const addToCart = (id, size, qtyItem) => {
    if (size === "") {
      setTr(false);
      return;
    }

    const product = productData.find((item) => item.id === id);
    const existingProduct = cartList.find(
      (item) => item.id === id && item.size === size
    );
    const otherProducts = cartList.filter(
      (item) => item.id !== id || item.size !== size
    );

    if (existingProduct) {
      setCartList([
        ...otherProducts,
        {
          ...existingProduct,
          quantity: existingProduct.quantity + Number(qtyItem),
        },
      ]);
    } else {
      // Add new product to cart
      setCartList([
        ...otherProducts,
        { ...product, quantity: Number(qtyItem), size },
      ]);
    }
    setTr(true);
    setTes(true);
  };
  /////////////////////////////

  const removeCartProduct = (id, size) => {
    setCartList(
      cartList.filter((item) => {
        return item.id !== id || item.size !== size;
      })
    );
  };
  const incrementQuantity = (id, e, size) => {
    const existProduct = cartList.find(
      (item) => item.id === id && item.size === size
    );
    if (existProduct) {
      const updatedCartList = cartList.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Number(e.target.textContent) }
          : item
      );
      setCartList(updatedCartList);
    }
  };
  // WishList
  const [wishList, setWishList] = useState([]);
  const addToWishList = (id, size) => {
    if (size === "") {
      setTr(false); // Assuming setTr is a state update function for some purpose
      return;
    }

    const selectedProduct = productData.find((item) => item.id === id);
    const existProduct = wishList.find(
      (item) => item.id === id && item.size === size
    );

    if (existProduct) {
      setWishList(
        wishList.filter((item) => !(item.id === id && item.size === size))
      );
    } else {
      setWishList((prev) => [
        ...prev,
        { ...selectedProduct, size: size, heartActive: true },
      ]);
    }
  };
  const isInWishList = (id, size) => {
    return wishList.some(
      (product) => product.id === id && product.size === size
    );
  };
  const removeWishElement = (id, size) => {
    setWishList((prev) =>
      prev.filter((item) => {
        return item.id !== id || item.size !== size;
      })
    );
  };

  // const handleSubmit = async (id,radioSize) => {
  //   try {
  //     const updatedProduct = {
  //       size: radioSize,
  //       // other fields to update if necessary
  //     };

  //     const response = await axios.put(
  //       `http://localhost:3000/posts/${id}`,
  //       updatedProduct
  //     );

  //     // Assuming the backend returns the updated product, you can update your state
  //     setCartList((prev) =>
  //       prev.map((item) =>
  //         item.id === id ? { ...item, size: radioSize } : item
  //       )
  //     );
  //     // setUpdateCartProduct(false); // Close the modal after update
  //   } catch (error) {
  //     console.error("Error updating product size:", error);
  //   }
  // };
  // useEffect(()=>{
  //   handleSubmit()
  // },[])
  const values = {
    addToCart,
    cartList,
    removeCartProduct,
    addToWishList,
    wishList,
    removeWishElement,
    tr,
    productData,
    incrementQuantity,
    isInWishList,
    setCartList
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
