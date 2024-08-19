import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Flights from './pages/Flights'; 
import AppLayout from "./layout/LayoutContainer";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <Router>
      <ConfigProvider
        theme={{
          token: {
            colorText: "rgb(75 0 151)",
            colorPrimary: "rgb(75 0 151)",
            borderRadius: 50,
          },
          components: {
            Radio: {
              buttonBg: "rgb(230 224 235)",
            },
          },
        }}
      >
        <AppLayout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/flights" element={<Flights />} />
          </Routes>
        </AppLayout>
      </ConfigProvider>
    </Router>
  );
};

export default App;
