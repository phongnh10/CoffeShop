import {Axios} from 'axios';
import AxiosInstance from './AxiosInstance';

// Hàm đăng ký tài khoản
const register = async data => {
  try {
    const {email, password, name} = data;
    const body = {
      email: email,
      password: password,
      name: name,
    };
    const response = await AxiosInstance().post('/user/register', body);
    if (response.status == true) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

// Hàm đăng nhập
const login = async data => {
  try {
    const {email, password} = data;
    const body = {email: email, password: password};
    const response = await AxiosInstance().post('/user/login', body);
    if (response.status == true) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

// Hàm lấy tất cả danh mục
const getCategories = async () => {
  try {
    const response = await AxiosInstance().get('/category');
    if (response.status == true) {
      return response.categories;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};

// Hàm lấy tất cả sản phẩm
const getProducts = async () => {
  try {
    const response = await AxiosInstance().get('/product/');
    if (response.status == true) {
      return response.products;
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};

// Hàm lấy sản phẩm theo ID danh mục
const getProductsByIdCategory = async categoryId => {
  try {
    const response = await AxiosInstance().get(
      `/product/byCategory?categoryId=${categoryId}`,
    );
    if (response.status == true) {
      return response.products;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};

// Lấy sản phẩm theo id
const getProduct = async idProduct => {
  try {
    const response = await AxiosInstance().get(
      `/product/getproduct?idProduct=${idProduct}`,
    );
    if (response.status == true) {
      return response.product;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};

//add Orderdetail
const addOrderDetail = async orderDatail => {
  try {
    const {quantity, totalPrice, size, idProduct, idUser} = orderDatail;
    const body = {
      quantity: quantity,
      totalPrice: totalPrice,
      size: size,
      idProduct: idProduct,
      idUser: idUser,
    };
    const response = await AxiosInstance().post(
      '/orderDetail/addOrderDetail',
      body,
    );
    if (response.status == true) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

//getFavorite by id
const getFavoriteUser = async idUser => {
  try {
    const response = await AxiosInstance().get(
      `favorite/getFavoritesByIdUser?idUser=${idUser}`,
    );
    if (response.status == true) {
      return response.favorites;
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};

/// addFavorite
const addFavorite = async favorite => {
  try {
    const {idUser, idProduct} = favorite;
    const body = {
      idUser: idUser,
      idProduct: idProduct,
    };
    const response = await AxiosInstance().post(`favorite/addFavorite`, body);
    if (response.status == true) return true;
  } catch (error) {
    console.log(error);
  }
  return false;
};
///delete favorite
const deleteFavorite = async idfavorite => {
  try {
    const response = await AxiosInstance().delete(
      `favorite/deleteFavorite/${idfavorite}`,
    );
    if (response.status == true) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};
const getOrderByUser = async (idUser, status) => {
  try {
    const response = await AxiosInstance().get(
      'orderDetail/getOrderDetailByIdUserAndStatus',
      {
        params: {idUser, status},
      },
    );
    if (response) {
      return response;
    } else {
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export {
  register,
  login,
  getCategories,
  getProductsByIdCategory,
  getProducts,
  getProduct,
  addOrderDetail,
  getFavoriteUser,
  addFavorite,
  deleteFavorite,
  getOrderByUser,
};
