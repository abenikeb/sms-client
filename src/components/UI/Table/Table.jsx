import React, { Component } from "react";
import Button from "../Button/Button";

class Table extends Component {
  state = {};
  render() {
    return (
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Category</th>
              <th>Tel</th>
              <th>Teritory</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.props.customers.map((customer) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-6 h-6">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{customer.fullName}</div>
                    </div>
                  </div>
                </td>
                <td>{customer.category.name}</td>
                <td>{customer.tel}</td>
                <td>{customer.territory}</td>
                <td>{customer.city}</td>
                <td>
                  <Button label="Action" btn_class="btn-success-ghost" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;