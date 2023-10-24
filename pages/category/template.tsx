import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

const KidPage: NextPage = () => {

  return (
    <ShopLayout title={'Teslo-Shop - Template'} pageDescription={'Template para paginas'}>
        <Typography variant='h1' component='h1'>template</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Puede ser cualquier cosas</Typography>


    </ShopLayout>
  )
}

export default KidPage
