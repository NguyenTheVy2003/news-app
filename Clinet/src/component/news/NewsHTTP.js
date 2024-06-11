import AxiosInstance from '../../helper/AxiosInstance';

export const getNews = async () => {
  try {
    const axiosInstance = AxiosInstance();
    const url = `/products`;
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getNewsDetail = async id => {
  try {
    ///articles/64766509ae564a0014d70ad2/detail
    const axiosInstance = AxiosInstance();
    const url = `/products/${id}`;
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchNews = async keyword => {
  try {
    ///articles/search?title=vestibulum
    const axiosInstance = AxiosInstance();
    const url = `/products/search/name?keyword=${keyword}`;
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const uploadImage = async formData => {
  try {
    const axiosInstance = AxiosInstance(`multipart/form-data`);
    const url = `/upload-file`;
    const response = await axiosInstance.post(url, formData);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
