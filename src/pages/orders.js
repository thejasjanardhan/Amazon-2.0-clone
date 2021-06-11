
import { useSession } from "next-auth/client";
import Header from "../components/Header";

const Orders = () => {
  const [session] = useSession();

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-2 border-yellow-400">
          Your orders
        </h1>

        {!session && <h2>Please sign in to see your orders</h2>}

        {session && <h2>Currenty you have no orders yet.</h2>}

        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
};

export default Orders;
