"use client";

import OrderInformation from "../components/checkout/order-information";
import CartItems from "../components/checkout/cart-items";
import { useState } from "react";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { push } = useRouter();
  const { setCustomerInfo, customerInfo } = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: null,
    customerAddress: "",
  });

  const handlePayment = () => {
    if (
      !formData.customerName ||
      !formData.customerContact ||
      !formData.customerAddress
    ) {
      alert("Please fill in all fields");
      return;
    }

    setCustomerInfo(formData);
    push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-4">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-center font-bold text-4xl mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14 -mt-5">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={handlePayment} />
        </div>
      </div>
    </main>
  );
};
export default Checkout;
