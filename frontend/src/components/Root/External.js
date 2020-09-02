import gql from "graphql-tag";
import React, { Component, useState, useEffect } from "react";

import { Form, Input, Button, Select, message } from 'antd';

import Layout from '../Shared/Layout'
import LinqPalService from "#root/api/apiClient";
import {formatError} from '#root/api/formatError'


const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 16, span: 8 },
};

// import LinqPalService from "#root/api/apiClient";


const External = ({}) => {
  // let [users, setUsers] = useState([]);

  // async function fetchUsers() {
  //   let newUsers = await LinqPalService.fetchUsers();
  //   console.log(newUsers);
  //   setUsers(newUsers);
  // }

  // useEffect(() => {
  //   fetchUsers()
  // }, [])
  const [form] = Form.useForm();

  const onFinish = async values => {
    console.log(values);
    let user = null
    try {
      user = await LinqPalService.createUser(values);
    } catch(e) {
      let error = formatError(e)
      message.error(error.message)
    }

    if (user) {
      form.resetFields();
      message.success("User successfully created!")
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Layout>
    <h1>New User</h1>
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="first_name" label="First Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="last_name" label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="full_address" label="Full Address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="ssn" label="SSN" rules={[{ required: true, max: 9, min: 9 }]}>
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="submit" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Layout>
  )
};

export default External;
