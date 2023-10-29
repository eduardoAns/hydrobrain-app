import { Typography } from "@mui/material";
import { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";

const TemplatePage: NextPage = () => {  
  
    return (
      <ShopLayout title={'Teslo-Shop - Template'} pageDescription={'Template para paginas'}>
          <Typography variant='h1' component='h1'>Template</Typography>
          <Typography variant='h2' sx={{ mb: 1 }}>Puede ser de todo</Typography>



      </ShopLayout>
    )
  }
  
  export default TemplatePage
