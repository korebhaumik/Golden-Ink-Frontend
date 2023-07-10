import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login_new";
import Signup from "./pages/Signup";
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";
import { StoreProvider } from "./context/Store.context";
import { CartProvider } from "./context/Cart.context";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/Auth.context";
import { ImageProvider } from "./context/Image.context";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Protected from "./components/Protected";
type Props = {};

export default function App({}: Props) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Toaster />
        <AuthProvider>
          <ImageProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route path="" element={<Home />} />
                  <Route path="/hello" element={<>Hello World</>} />
                  <Route
                    path="/orders"
                    element={
                      // <Protected>
                        <Orders />
                      // </Protected>
                    }
                  />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/store"
                    element={
                      <StoreProvider>
                        <Store />
                      </StoreProvider>
                    }
                  />
                  <Route
                    path="/checkout"
                    element={
                      <Protected>
                        <Checkout />
                      </Protected>
                    }
                  />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </CartProvider>
          </ImageProvider>
        </AuthProvider>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
