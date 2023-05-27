import Navbar from "@/components/layout/navbar";
import Banner from "@/components/banner";
import Blogs from "@/components/blogs";
import Footer from "@/components/layout/footer";
import Projects from "@/components/projects";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const Dashboard = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack>
          <Navbar />
          {/* <Banner />
          <Projects />
          <Blogs />
          <Footer /> */}
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
