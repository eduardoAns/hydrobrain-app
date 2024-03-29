import { useContext, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

import { UiContext } from '../../context';

export const Navbar = () => {

    const { asPath, push } = useRouter();
    const { toggleSideMenu } = useContext( UiContext );

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const onSearchTerm = () => {
        if( searchTerm.trim().length === 0 ) return;
        push(`/search/${ searchTerm }`);
    }

    

    return (
        <AppBar 
            sx={{ background: '#C3F2FC', backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out'}}
        >
            <Toolbar>
                    <Link href='/' display='flex' alignItems='center'>
                        <Typography variant='h6'>Hydrobrain |</Typography>
                        <Typography sx={{ ml: 0.5 }}>App</Typography>
                    </Link>  

                <Box flex={ 1 } />

                <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
                    className="fadeIn">
                        <Link href='/template'>
                            <Button color={ asPath === '/template' ? 'primary':'info'}>Proyectos</Button>
                        </Link>
                        <Link href='/category/template'>
                            <Button color={ asPath === '/category/template' ? 'primary':'info'}>Sobre nosotros</Button>
                        </Link>
                </Box>


                <Box flex={ 1 } />
                
                

                {/* Pantallas pantallas grandes */}
                {
                    isSearchVisible 
                        ? (
                            <Input
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                className='fadeIn'
                                autoFocus
                                value={ searchTerm }
                                onChange={ (e) => setSearchTerm( e.target.value ) }
                                onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                                type='text'
                                placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={ () => setIsSearchVisible(false) }
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )
                    : 
                    (
                        <IconButton 
                            onClick={ () => setIsSearchVisible(true) }
                            className="fadeIn"
                            sx={{ display: { xs: 'none', sm: 'flex' } }}
                        >
                            <SearchOutlined />
                        </IconButton>
                    )
                }


                {/* Pantallas pequeñas */}
                <IconButton
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                    onClick={ toggleSideMenu }
                >
                    <SearchOutlined />
                </IconButton>

                <Button onClick={ toggleSideMenu }>
                    Menú
                </Button>

            </Toolbar>
        </AppBar>
    )
}
