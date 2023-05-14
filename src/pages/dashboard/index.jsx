import Navbar from "@/components/layout/navbar";
import Banner from "@/components/banner"; 
import Projects from "@/components/projects";
import { Box, Stack } from '@mui/material';
import { Grid, Paper } from '@mui/material';

const  Dashboard= () => {
    return ( 
        <>
            <Stack>
                <Navbar />
                <Banner />  
                <Projects />  
            </Stack>
        </>
    );
}
 
export default Dashboard;