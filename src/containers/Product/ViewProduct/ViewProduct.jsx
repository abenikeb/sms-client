import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Table from "../../../components/UI/Table/Table";
import Search from "../../../components/SearchBox/Search";
import Pagination from "../../../components/UI/Pagination/Pagination";
import Button from "../../../components/UI/Button/Button";
import { Link } from "react-router-dom";
import "./ViewProduct.css";

class ViewProduct extends Component {
  columns = [
    {
      key: "select",
      content: (customer) => <input type="checkbox" className="checkbox" />,
    },
    {
      path: "product.product_sku",
      label: "SKU",
    },
    {
      path: "usersCategory",
      label: "CategoryName",
    },
    {
      path: "price",
      label: "Price",
    },
    {
      key: "action",
      content: (category) => (
        <section className="drop-down-wrap">
          <button className="drop-down-btn">
            Action <FontAwesomeIcon icon="fa-solid fa-caret-down" />
          </button>
          <div className="drop-down-content">
            <ul>
              <li>
                <Link
                  className="btn btn-sm btn-ghost"
                  to={`/add_category/${category.id}`}
                >
                  Edit
                </Link>
              </li>
              <li>
                <button onClick={() => this.props.raiseProperty(category)}>
                  View
                </button>
              </li>
            </ul>
          </div>
        </section>
      ),
    },
  ];

  render() {
    const { currentPage, pageSize, itemsSize, paginateItems } = this.props;

    return (
      <Auxiliary>
        <div className="container-category">
          <h1>Product List</h1>
          <hr />
          <header>
            <div>
              <Search
                searchValue={this.props.searchQuery}
                onChange={this.props.onSearch}
              />
            </div>
            <div>
              <Link to="/add_product/new" className="btn btn-primary btn-sm">
                Add Product
              </Link>
            </div>
          </header>
          <Table
            items={paginateItems}
            columns={this.columns}
            sortColumns={this.props.sortColumns}
            onSort={this.props.onSort}
          />
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            itemsSize={itemsSize}
            onPageChange={this.props.onHandlePageChange}
          />
        </div>
      </Auxiliary>
    );
  }
}

export default ViewProduct;
