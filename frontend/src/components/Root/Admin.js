import gql from "graphql-tag";
import React, { Component, useState, useEffect } from "react";

import LinqPalService from "#root/api/apiClient";
import Layout from "../Shared/Layout"

import { Table } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    sorter: (a, b) => a.first_name.length - b.first_name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
    sorter: (a, b) => a.last_name.length - b.last_name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Address',
    dataIndex: 'full_address',
    key: 'full_address',
    sorter: (a, b) => a.full_address.length - b.full_address.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
];

const Admin = ({}) => {
  let [users, setUsers] = useState([]);

  async function fetchUsers() {
    setUsers(await LinqPalService.fetchUsers());
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Layout>
      <h1>Users</h1>
      {/* <Button >Hello World</Button> */}
      <Table columns={columns} dataSource={users} />
      {/* {users.length > 0 && users.map(u => (
        <div>
          <h3>{u.first_name}</h3>
          <h3>{u.last_name}</h3>
          <h3>{u.phone}</h3>
          <h3>{u.full_address}</h3>
          <hr/>
        </div>
      ))} */}
    </Layout>
  )
};

export default Admin;
