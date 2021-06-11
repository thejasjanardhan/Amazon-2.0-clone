import { CheckCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Header from "../components/Header";

const Success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed
            </h1>
          </div>
          <p className="text-center">
            ನಮ್ಮೊಂದಿಗೆ ಶಾಪಿಂಗ್ ಮಾಡಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು...
          </p>
          <button className="button mt-10" onClick={() => router.push("/")}>
            Go to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
