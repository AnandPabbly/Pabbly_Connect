import React from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Logo } from 'src/components/logo';

import { HeaderSection } from './header-section';
import { Searchbar } from '../components/searchbar';
import { MenuButton } from '../components/menu-button';
import { PromotionalHeader } from './header-Promotional';
import { AccountDrawer } from '../components/account-drawer';

const StyledDivider = styled('span')(({ theme }) => ({
  width: 1,
  height: 10,
  flexShrink: 0,
  display: 'none',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  marginLeft: theme.spacing(2.5),
  marginRight: theme.spacing(2.5),
  backgroundColor: 'currentColor',
  color: theme.vars.palette.divider,
  '&::before, &::after': {
    top: -5,
    width: 3,
    height: 3,
    content: '""',
    flexShrink: 0,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: 'currentColor',
  },
  '&::after': { bottom: -5, top: 'auto' },
}));

export function HeaderBase({
  sx,
  data,
  slots,
  slotProps,
  onOpenNav,
  layoutQuery,

  slotsDisplay: {
    account = true,
    helpLink = true,
    purchase = true,
    searchbar = true,
    menuButton = true,
    localization = true,
  } = {},

  ...other
}) {
  const theme = useTheme();
  const location = useLocation();

  const isLoginPage = location.pathname === '/login'; // Adjust this path if your login route is different

  return (
    <>
      <PromotionalHeader />

      <HeaderSection
        sx={{
          // backgroundColor: 'common.white',
          backgroundColor: 'background.paper',

          borderBottom: '1px dashed',
          borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.3),
          ...sx,
        }}
        layoutQuery={layoutQuery}
        slots={{
          ...slots,
          leftAreaStart: slots?.leftAreaStart,
          leftArea: (
            <>
              {slots?.leftAreaStart}

              {menuButton && !isLoginPage && (
                <MenuButton
                  data-slot="menu-button"
                  onClick={onOpenNav}
                  sx={{
                    mr: 1,
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                  }}
                />
              )}

              {isLoginPage ? (
                <Logo data-slot="logo" />
              ) : (
                <>
                  <Box
                    alt="logo"
                    component="img"
                    // src={`${CONFIG.site.basePath}/assets/icons/navbar/Pabbly Connect Dark 2.0.svg`}
                    // src={`${CONFIG.site.basePath}/assets/icons/navbar/Pabbly Connect Light 2.0.svg`}
                    src={
                      theme.palette.mode === 'dark'
                        ? `${CONFIG.site.basePath}/assets/icons/navbar/Pabbly Connect Light 2.0.svg`
                        : `${CONFIG.site.basePath}/assets/icons/navbar/Pabbly Connect Dark 2.0.svg`
                    }
                    width={120}
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      zIndex: theme.zIndex.drawer + 1,
                    }}
                  />

                  <Logo
                    width={30}
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                    }}
                  />
                </>
              )}

              {!isLoginPage && <StyledDivider data-slot="divider" />}

              {slots?.leftAreaEnd}
            </>
          ),
          rightArea: (
            <>
              {slots?.rightAreaStart}

              <Box
                data-area="right"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 1, sm: 1.5 },
                }}
              >
                {helpLink && (
                  <Link
                    data-slot="help-link"
                    href={paths.faqs}
                    component={RouterLink}
                    color="inherit"
                    sx={{ typography: 'subtitle2' }}
                  >
                    Need help?
                  </Link>
                )}
                {searchbar && <Searchbar data-slot="searchbar" data={data?.nav} />}
                <Box sx={{ mr: { xs: 1, sm: 0 } }}>
                  <Tooltip title="Click here to purchase tasks." arrow placement="bottom">
                    <Button
                      // onClick={handleAdd} // Validation and navigation handled in handleAdd
                      href="https://www.pabbly.com/connect/inr/#pricing"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="error"
                      variant="contained"
                      size="small"
                    >
                      Upgrade
                    </Button>
                  </Tooltip>
                </Box>{' '}
                {account && (
                  // <Tooltip
                  //   title="Click here to see your account or manage your subscription."
                  //   arrow
                  //   placement="bottom"
                  // >
                  <span>
                    <AccountDrawer data-slot="account" data={data?.account} />
                  </span>
                  // </Tooltip>
                )}
                {purchase && (
                  <Button
                    data-slot="purchase"
                    variant="contained"
                    rel="noopener"
                    target="_blank"
                    href={paths.minimalStore}
                    sx={{
                      display: 'none',
                      [theme.breakpoints.up(layoutQuery)]: {
                        display: 'inline-flex',
                      },
                    }}
                  >
                    Purchase
                  </Button>
                )}
              </Box>

              {slots?.rightAreaEnd}
            </>
          ),
        }}
        slotProps={slotProps}
        {...other}
      />
    </>
  );
}
