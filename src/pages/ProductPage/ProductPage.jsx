import { React, useEffect, useState } from "react";
import { setLoading } from "../../store/loading/loadingSlice";
import { useDispatch } from "react-redux";
import api from "../../api/api";
import CardProduct from "../../components/products/cardProduct/cardProduct";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";

export function ProductPage() {
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const dispatch = useDispatch();

  const getProductsFromApi = async () => {
    let res = await api("getProducts");
    if (res.success) {
      setProductList(res.data.data);
    }
  };

  const getCategoriesFromApi = async () => {
    let res = await api("getCategories");
    if (res.success) {
      setCategoryList(res.data.data);
      setCurrentCategoryId(res.data.data[0]._id);
    }
  };

  const getDataFromApi = async () => {
    dispatch(setLoading(true));
    await getProductsFromApi();
    await getCategoriesFromApi();
    dispatch(setLoading(false));
  };

  const handleCurrentCategory = (value) => {
    setCurrentCategoryId(value);
  };

  const filteredProducts = productList.filter((item) =>
    item.categories.some((category) => category._id == currentCategoryId)
  );

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <main className="vh-100">
      <div className="d-flex h-100">
        <CategorySidebar
          categories={categoryList}
          handleCurrentCategory={handleCurrentCategory}
          currentCategoryId={currentCategoryId}
        />
        <div className="container mt-5">
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-md-6 col-lg-3" key={product._id}>
                <CardProduct
                  id={product._id}
                  thumb_src={product.imageUrls}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  position="left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
