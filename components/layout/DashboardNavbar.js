import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// components
import Iconify from '../../components/iconify';
//

import AccountPopover from './AccountPopover';

import NotificationsPopover from './NotificationPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 287;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;
const APPBAR_WIDTH = 79;
const TASKBAR_WIDTH = 287;
const WINDOW_X = 287;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
  [theme.breakpoints.down('sm')]: {
    width: `calc(100% - ${APPBAR_WIDTH + 1}px)`,
  },
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${WINDOW_X + 1}px)`,
  },
  [theme.breakpoints.up('md')]: {
    width: `calc(100% - ${TASKBAR_WIDTH + 1}px)`,
  },
 
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

         <Typography variant='h3' className='text-black' sx={{ fontSize: {xs: 25, sm: 28, md: 30, lg: 35, xl: 35}}} >
            Dashboard
         </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
    
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
