import PaymentOptions from "../components/payment/payment-options";
import PaymentSteps from "../components/payment/payment-steps";
const Payment = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh] pt-3">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-center font-bold text-4xl mb-7">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
};
export default Payment;
