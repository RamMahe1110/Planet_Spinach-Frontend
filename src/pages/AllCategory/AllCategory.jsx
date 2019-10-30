import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategoryList,
  setAllCatToNull
} from "./../../redux/Product/ProductActions";
import Loader from "./../../components/Loader/Loader";
import "./AllCategory.css";

class AllCategory extends Component {
  componentDidMount() {
    this.props.getAllCategoryList();
  }

  componentWillUnmount() {
    this.props.setAllCatToNull();
  }

  render() {
    const { allCatList } = this.props.ProductReducer;
    return (
      <div className="all-category">
        <div className="top-content-all-cat">
          <h2>
            Select from our wide range of
            <span className="highlighted"> healthy food categories</span>
          </h2>
        </div>
        {allCatList === null ? (
          <Loader />
        ) : (
          <div className="category-list">
            {allCatList.map(catItem => (
              <Link to={`/category/${catItem.catId}`} className="category-item">
                <h6 className="category-title">{catItem.catName}</h6>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ProductReducer: state.ProductReducer
});

export default connect(
  mapStateToProps,
  { getAllCategoryList, setAllCatToNull }
)(AllCategory);
