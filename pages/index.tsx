import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { Box, Button, styled, Typography } from "@mui/material";

const HomePage: NextPage = () => {
  const CustomBox = styled(Box) (({ theme }) => ({
      minHeight: '80vh',
      display: 'flex',
      justifyContent: 'center',
      
      // tamanhos
      gap: theme.spacing(2),
      paddingTop: theme.spacing(10),
      // cor de fundo
      backgroundColor: '#C5F6C3',
      [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
      }
  }));

  const BoxText = styled(Box) (({ theme }) => ({
      flex: '1',
      paddingLeft: theme.spacing(8),
      [theme.breakpoints.down('md')]: {
          flex: '2',
          textAlign: 'center',
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
      },
  }));

  return (
    <ShopLayout title={'Hydrobrain - Home'} pageDescription={'Hydrobrain'}>
        <Typography variant='h1' component='h1'>HYDROBRAIN</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Toda la informacion</Typography>

      
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#000000',
                }}
                >
                    Haremos que el consumo del agua sea más eficiente
                </Typography>

                <Typography
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#000000',
                }}
                >
                    Utilizando tecnicas de inteligencia artificial, podremos predecir el consumo de agua de tu hogar, y asi poder ahorrar en tu factura de agua.
                </Typography>

                <Box>
                    <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        buy now
                    </Button>
                    <Button 
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#000000',
                        backgroundColor: 'transparent',
                        borderColor: '#000000',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        explore
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
                display: 'flex',
                alignSelf: 'center',

                
            })}
            >

            </Box>

        </CustomBox>
        
    </ShopLayout>
  )
}

export default HomePage
