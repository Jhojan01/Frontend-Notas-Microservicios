import { Typography } from "@material-tailwind/react";
import { MainLayout } from "../../Layouts/layouts";

function Home(){
    return(
        <MainLayout>
     <div style={{ display: "flex", justifyContent: "center", alignContent:'center', alignItems: "center", height: "100vh" , width:'100%'}}>
        <Typography variant="h1">BIENVENIDO</Typography>
      </div>        </MainLayout>
    )
}

export default Home;