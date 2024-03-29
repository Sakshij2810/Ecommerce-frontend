import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import ProductCard from "../Home/ProductCard";
import { toast } from "react-toastify";
import Slider from "react-slider";
import MetaData from "../layout/MetaData";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const MIN = 0;
const MAX = 25000;

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [values, setValues] = useState([MIN, MAX]); //price
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const { loading, products, productsCount, resultPerPage, error } =
    useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const totalPages = Math.ceil(productsCount / resultPerPage);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== currentPage
    ) {
      setCurrentPage(selectedPage);
    }
  };

  const priceHandler = (newPrice) => {
    setValues(newPrice);
  };
  const ratingHandler = (newRating) => {
    setRatings(newRating);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors(error));
    }
    // Fetch products with price range filter
    dispatch(getProduct(keyword, currentPage, values, category));
  }, [dispatch, error, keyword, currentPage, values, category]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS --ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {/* price filter */}
          <div className="box">
            <h3>Price</h3>
            <div className={"values"}>
              ₹{values[0]} - ₹{values[1]}
            </div>
            <Slider
              className={"slider"}
              onChange={priceHandler}
              ariaLabelledby="auto"
              value={values}
              min={MIN}
              max={MAX}
            />
          </div>

          {/* catergory filter */}
          <div className="category">
            <h3>Categories</h3>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* ratings filter */}
          <div className="ratingBox">
            <fieldset>
              <legend>{ratings} - Ratings</legend>

              <Slider
                className={"slider"}
                onChange={ratingHandler}
                ariaLabelledby="auto"
                value={ratings}
                min={0}
                max={5}
              />
            </fieldset>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="paginationBox">
              <ul className="pagination">
                {currentPage > 1 && (
                  <>
                    <li
                      className="page-item"
                      onClick={() => selectPageHandler(1)}
                    >
                      <span className="page-link">First</span>
                    </li>
                    <li
                      className="page-item"
                      onClick={() => selectPageHandler(currentPage - 1)}
                    >
                      <span className="page-link">Prev</span>
                    </li>
                  </>
                )}

                {[...Array(totalPages)].map((_, i) => (
                  <li
                    className={
                      currentPage === i + 1 ? "pageItemActive" : "page-item"
                    }
                    key={i}
                    onClick={() => selectPageHandler(i + 1)}
                  >
                    <span
                      className={
                        currentPage === i + 1 ? "pageLinkActive" : "page-link"
                      }
                    >
                      {i + 1}
                    </span>
                  </li>
                ))}

                {currentPage < totalPages && (
                  <>
                    <li
                      className="page-item"
                      onClick={() => selectPageHandler(currentPage + 1)}
                    >
                      <span className="page-link">Next</span>
                    </li>
                    <li
                      className="page-item"
                      onClick={() => selectPageHandler(totalPages)}
                    >
                      <span className="page-link">Last</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
