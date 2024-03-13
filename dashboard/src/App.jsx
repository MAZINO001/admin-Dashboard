/* eslint-disable no-unused-vars */
import { ColorModeContext, useMode } from "./Theme";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./Scenes/Global/TopBar";
import Dashboard from "./Scenes/Dashboard";
import Sidebar from "./Scenes/Global/SideBar";
import Team from "./Scenes/Team";
import Invoces from "./Scenes/invoces";
import Contacts from "./Scenes/contacts";
import Bar from "./Scenes/bar";
import Form from "./Scenes/form";
import Line from "./Scenes/line";
import Pie from "./Scenes/pie";
import FAQ from "./Scenes/faq";
import Geography from "./Scenes/geography";
import Calendar from "./Scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/invoces" element={<Invoces />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
