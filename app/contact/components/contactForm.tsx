"use client";
import { useState } from "react";
import * as yup from "yup";
import DisplayForm from "./displayForm";
import {
  onChangeEventType,
  contactType,
  contactDataType,
} from "@/app/types/compnentsTypes";

const schema = yup.object().shape({
  productName: yup.string().required("Product Name is required"),
  quantity: yup
    .number()
    .required("Quantity is required")
    .positive("Quantity must be positive"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive"),
  customerName: yup.string().required("Customer Name is required"),
  customerEmail: yup
    .string()
    .email("Invalid email")
    .required("Customer Email is required"),
  paymentMethod: yup.string().required("Payment Method is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("Zip Code is required"),
});

export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactType>({
    productName: "",
    quantity: 0,
    price: 0,
    customerName: "",
    customerEmail: "",
    paymentMethod: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [contactInfoList, setContactInfoList] = useState<contactType[]>([]);

  const [error, setError] = useState([]);

  const onChangeHandler = (event: onChangeEventType) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });

    console.log("contactInfo", contactInfo);
  };

  const onClickHandler = async () => {
    // try {
    //   const result = await schema.validate(contactInfo);
    //   console.log(result);
    // } catch (error) {
    //   debugger;
    //   setError(error);
    // }

    let contactList: contactType[] = [...contactInfoList, contactInfo];
    setContactInfoList(contactList);
    console.log(contactList);
    setContactInfo({
      productName: "",
      quantity: 0,
      price: 0,
      customerName: "",
      customerEmail: "",
      paymentMethod: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Sale Form</h1>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="product Name"
              className="block text-sm font-medium text-gray-600"
            >
              Product Name
            </label>
            <input
              value={contactInfo.productName}
              type="text"
              id="productName"
              name="productName"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-600"
            >
              Quantity
            </label>
            <input
              value={contactInfo.quantity}
              type="number"
              id="quantity"
              name="quantity"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price
            </label>
            <input
              value={contactInfo.price}
              type="number"
              id="price"
              name="price"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-600"
            >
              Customer Name
            </label>
            <input
              value={contactInfo.customerName}
              type="text"
              id="customerName"
              name="customerName"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="customerEmail"
              className="block text-sm font-medium text-gray-600"
            >
              Customer Email
            </label>
            <input
              value={contactInfo.customerEmail}
              type="email"
              id="customerEmail"
              name="customerEmail"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-600"
            >
              Payment Method
            </label>
            <input
              value={contactInfo.paymentMethod}
              type="text"
              id="paymentMethod"
              name="paymentMethod"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              value={contactInfo.address}
              type="text"
              id="address"
              name="address"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City
            </label>
            <input
              value={contactInfo.city}
              type="text"
              id="city"
              name="city"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State
            </label>
            <input
              value={contactInfo.state}
              type="text"
              id="state"
              name="state"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-600"
            >
              Zip Code
            </label>
            <input
              value={contactInfo.zipCode}
              type="text"
              id="zipCode"
              name="zipCode"
              onChange={onChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          {/* <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              onChange={onChangeHandler}
              value={contactInfo.message}
              id="message"
              name="message"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            ></textarea>
          </div> */}

          <div>
            <button
              onClick={onClickHandler}
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          <p >{error}</p>
        </div>
      </div>

      <DisplayForm contactData={contactInfoList} />
    </>
  );
}
