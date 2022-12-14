import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Table from "../../../components/UI/Table/Table";
import Search from "../../../components/SearchBox/Search";
import Pagination from "../../../components/UI/Pagination/Pagination";
import Button from "../../../components/UI/Button/Button";
import { Link } from "react-router-dom";
import "./ViewOrder.css";

class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.buttonAction = React.createRef();
  }

  columns = [
    {
      key: "select",
      content: (order) => <input type="checkbox" className="checkbox" />,
    },
    // {
    //   path: "id",
    //   label: "Order_Id ",
    //   content: (order) => (
    //     <Link to={`customer/${customer.id}`}>{customer.first_name}</Link>
    //   ),
    // },
    { path: "id", label: "OrderId" },
    { path: "gross_price", label: "Total price" },
    { path: "approved_by", label: "Approved by" },
    { path: "first_name", label: "Customer Name" },
    { path: "name", label: "Status" },
    {
      key: "action",
      content: (customer) => (
        <section className="drop-down-wrap">
          <button className="drop-down-btn">
            Action <FontAwesomeIcon icon="fa-solid fa-caret-down" />
          </button>
          <div className="drop-down-content">
            <ul>
              <li>
                <Link
                  className="btn btn-sm btn-ghost"
                  to={`/order/${customer.id}`}
                >
                  Edit
                </Link>
              </li>
              <li>
                <button onClick={() => this.props.raiseProperty(customer)}>
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
        <div className="container-list">
          <h1>Order List</h1>
          <hr />
          <header>
            <div>
              <Search
                searchValue={this.props.searchQuery}
                onChange={this.props.onSearch}
              />
            </div>
            <div>
              <Button label="Import Excel" btn_class="btn-success-ghost" />
              <Button label="Export Excel" btn_class="btn-success-ghost" />
              <Link to="/add_order/new" className="btn btn-primary btn-sm">
                Add Order
              </Link>
            </div>
          </header>
          <Table
            items={paginateItems}
            columns={this.columns}
            sortColumns={this.props.sortColumns}
            onSort={this.props.onSort}
          />
          <div className="mt-4">
            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              itemsSize={itemsSize}
              onPageChange={this.props.onHandlePageChange}
            />
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default ViewOrder;
