import React, { useState } from 'react';

import {
  Box,
  Alert,
  Drawer,
  Button,
  Tooltip,
  MenuList,
  MenuItem,
  Snackbar,
  useTheme,
  Typography,
  IconButton,
  AlertTitle,
  useMediaQuery,
  Backdrop as MuiBackdrop,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { CustomPopover } from 'src/components/custom-popover';

import TriggerActionFlow from '../Workflows/trigger_action_flows';

// Hook to manage the popover state
const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const onOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return {
    open: Boolean(anchorEl),
    anchorEl,
    onOpen,
    onClose,
  };
};

// Custom backdrop component
const CustomBackdrop = (props) => (
  <MuiBackdrop
    {...props}
    sx={{ backgroundColor: 'transparent' }} // Make the backdrop transparent
  />
);

const ConfigurationDrawer2 = ({ open, onClose, publish, onChangePublish }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const popover = usePopover(); // Use popover hook

  // Define snackbar state
  const [shareSnackbarOpen, setShareSnackbarOpen] = useState(false);
  const theme = useTheme(); // Use Material-UI theme

  // Check for small screen
  const isSmallScreen = useMediaQuery('(max-width:500px)');

  // Handlers for Snackbar
  const handleShareSnackbarClose = () => {
    setShareSnackbarOpen(false);
  };

  const handleCopyTaskId = () => {
    setShareSnackbarOpen(true); // Show snackbar when task ID is copied
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            width: {
              xs: '100%',
              md: 'auto',
            },
          },
        }}
        ModalProps={{
          BackdropComponent: CustomBackdrop,
        }}
      >
        <Box
          display="flex"
          sx={{
            py: 2,
            pr: 1,
            pl: 2.5,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px dashed #919eab33',
            borderBottomRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            p: 3,
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        >
          <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            <Box sx={{ width: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: '600', mb: 2, mr: 3 }}>
                Add Student in Uteach Course and Subscriber in Convertkit on Thrivecart Payment
              </Typography>

              <Box sx={{ display: 'auto' }}>
                <Box sx={{ gap: 1, alignItems: 'center', display: 'flex' }}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#637381',
                      width: 'auto',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Task History ID - IjU3NjYwNTZmMDYzNzA0MzA1MjZlNTUzNyI_3D_pc
                  </Typography>
                  <Tooltip
                    title="Copy Task History ID"
                    arrow
                    placement="top"
                    sx={{ fontSize: '16px' }}
                  >
                    <IconButton onClick={handleCopyTaskId}>
                      <Iconify width={18} icon="solar:copy-bold" sx={{ color: 'text.secondary' }} />
                    </IconButton>
                  </Tooltip>

                  {/* Snackbar Component */}
                  <Snackbar
                    open={shareSnackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleShareSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    sx={{
                      boxShadow: '0px 8px 16px 0px rgba(145, 158, 171, 0.16)',
                    }}
                  >
                    <Alert
                      onClose={handleShareSnackbarClose}
                      severity="success"
                      sx={{
                        width: '100%',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                      }}
                    >
                      Copied!
                    </Alert>
                  </Snackbar>
                </Box>

                <Box sx={{ gap: 1, alignItems: 'center', display: 'flex' }}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#637381',
                      width: '100%',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Executed at Aug 22, 2024 08:23:31, (UTC+05:30) Asia/Kolkata
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <IconButton onClick={onClose} sx={{ p: 1 }}>
                <Iconify icon="mingcute:close-line" />
              </IconButton>
            </Box>
          </Box>

          {isSmallScreen && (
            <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
              <IconButton onClick={onClose} sx={{ p: 1 }}>
                <Iconify icon="mingcute:close-line" />
              </IconButton>
            </Box>
          )}

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              mt: 2,
            }}
          >
            <Tooltip title="Click here to re-execute the workflow(s)." arrow placement="top">
              <Button
                endIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                onClick={popover.onOpen}
                sx={{
                  textTransform: 'capitalize',
                  width: { xs: '100%', sm: 'auto' },
                }}
                startIcon={<Iconify icon="foundation:refresh" style={{ width: 18, height: 18 }} />}
                size="large"
                variant="contained"
                color="primary"
              >
                Re-execute
              </Button>
            </Tooltip>

            <CustomPopover
              open={popover.open}
              anchorEl={popover.anchorEl}
              onClose={popover.onClose}
              slotProps={{ arrow: { placement: 'top' } }}
            >
              {/* <MenuList>
                {[
                  { value: 'published', label: 'Entire Workflow' },
                  { value: 'draft', label: 'Failed & Skipped Steps' },
                ].map((option) => (
                  <MenuItem
                    key={option.value}
                    selected={option.value === publish}
                    onClick={() => {
                      popover.onClose();
                      onChangePublish(option.value);
                    }}
                  >
                    {option.value === 'published' && <Iconify icon="mdi:workflow" />}
                    {option.value === 'draft' && <Iconify icon="eos-icons:action-chains" />}
                    {option.label}
                  </MenuItem>
                ))}
              </MenuList> */}

              <MenuList>
                {[
                  {
                    value: 'draft',
                    label: 'Entire Workflow',
                    icon: 'mdi:workflow',
                  },
                  {
                    value: 'published',
                    label: 'Failed & Skipped Steps',
                    icon: 'eos-icons:action-chains',
                  },
                ].map((option) => (
                  <Tooltip
                    key={option.value}
                    title={
                      option.label === 'Entire Workflow'
                        ? 'Click here to re-execute the entire workflow from the beginning.'
                        : option.label === 'Failed & Skipped Steps'
                          ? 'Click here to re-execute only the failed or skipped steps of the workflow.'
                          : ''
                    }
                    arrow
                    placement="right"
                  >
                    <MenuItem
                      selected={option.value === publish}
                      onClick={() => {
                        popover.onClose();
                        onChangePublish(option.value);
                      }}
                    >
                      {option.icon && (
                        <Iconify
                          icon={option.icon}
                          width={20}
                          height={20}
                          sx={{ mr: 0, color: 'inherit' }}
                        />
                      )}
                      {option.label}
                    </MenuItem>
                  </Tooltip>
                ))}
              </MenuList>
            </CustomPopover>

            <Tooltip title="Click here to view auto re-execution settings." arrow placement="top">
              <Button
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                }}
                startIcon={
                  <Iconify
                    icon="streamline:arrow-reload-horizontal-1-solid"
                    style={{ width: 18, height: 18 }}
                  />
                }
                size="large"
                variant="outlined"
                color="primary"
              >
                Auto Re-execution Settings
              </Button>
            </Tooltip>
          </Box>
        </Box>

        <Box
          justifyContent="space-between"
          sx={{
            display: 'block',
            height: '100%',
            p: 3,
            overflow: 'auto',
            maxHeight: 'auto',
          }}
        >
          <Alert sx={{ mb: 4 }} severity="error">
            <AlertTitle>Re-Execution!</AlertTitle>
            The auto re-execution of the failed step is scheduled to be done at Aug 22, 2024
            08:23:31. Click here to view previous re-executions
          </Alert>
          <TriggerActionFlow />
        </Box>
      </Drawer>
      {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
    </>
  );
};

export { ConfigurationDrawer2 };
