"use client";

import { contactType } from "@/app/types/compnentsTypes";

export default function DisplayForm(props: { contactData: contactType[] }) {
  console.log("props", props);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Customer Email</th>
              <th className="py-2 px-4 border-b">Payment Method</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {props.contactData.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{row.productName}</td>
                <td className="py-2 px-4 border-b">{row.quantity}</td>
                <td className="py-2 px-4 border-b">{row.price}</td>
                <td className="py-2 px-4 border-b">{row.customerName}</td>
                <td className="py-2 px-4 border-b">{row.customerEmail}</td>
                <td className="py-2 px-4 border-b">{row.paymentMethod}</td>
                <td className="py-2 px-4 border-b">{row.address}</td>
                <td className="py-2 px-4 border-b">{row.city}</td>
                <td className="py-2 px-4 border-b">{row.state}</td>
                <td className="py-2 px-4 border-b">{row.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
