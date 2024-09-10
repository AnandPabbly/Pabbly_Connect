import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Card,
  Alert,
  Drawer,
  styled,
  Button,
  Tooltip,
  MenuList,
  MenuItem,
  Accordion,
  Typography,
  IconButton,
  AlertTitle,
  AccordionSummary,
  AccordionDetails,
  Backdrop as MuiBackdrop,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { CustomPopover } from 'src/components/custom-popover';

import Accordian from '../Workflows/accordian';

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

const ConfigurationDrawer1 = ({ open, onClose }) => {
  const handleBackdropClick = (event) => {
    // Prevent clicks inside the drawer from closing it
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const CustomLink = styled(Link)({
    color: '#078DEE',
  });

  const [messageType, setMessageType] = useState('g');

  const handleRadioChange = (event) => {
    setMessageType(event.target.value);
  };

  // return (
  //   <>
  //     <Drawer
  //       anchor="right"
  //       open={open}
  //       onClose={onClose}
  //       PaperProps={{
  //         sx: {
  //           p: 2,
  //           display: 'flex',
  //           flexDirection: 'column',
  //           width: {
  //             xs: '100%',
  //             md: 'auto',
  //             lg: '1110px',
  //           }, // Adjust width as needed
  //         },
  //       }}
  //       ModalProps={{
  //         BackdropComponent: CustomBackdrop, // Use the custom backdrop
  //       }}
  //     >
  //       <Box sx={{ mt: 4 }}>
  //         <Card>
  //           <CardHeader
  //             subheader="Setup keywords that user can type to Opt-in & Opt-out from messaging campaign. "
  //             title="Opt-Out Response"
  //             sx={{ mb: 3 }}
  //           />
  //         </Card>
  //       </Box>
  //     </Drawer>
  //     {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
  //   </>
  // );
};

const ConfigurationDrawer2 = ({ open, onClose, publish, onChangePublish }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const popover = usePopover(); // Use popover hook

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
            }, // Adjust width as needed
          },
        }}
        ModalProps={{
          BackdropComponent: CustomBackdrop, // Use the custom backdrop
        }}
      >
        <Card
          justifyContent="space-between"
          sx={{
            display: 'fullwidth',
            borderBottom: '1px',
            borderBottomStyle: 'dashed',
            borderColor: '#919eab33',
            borderBottomRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            p: 3,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '1000px' }}>
              <Typography variant="h6" sx={{ fontWeight: '600', mb: 4 }}>
                Add Student in Uteach Course and Subscriber in Convertkit on Thrivecart Payment
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#637381', mb: 1 }}>
                {' '}
                Task History ID - IjU3NjYwNTZmMDYzNzA0MzA1MjZlNTUzNyI_3D_pc
              </Typography>
              <Typography sx={{ fontSize: '14px', color: '#637381', mb: 0 }}>
                {' '}
                Executed at Sep 09, 2024 13:17:04, (UTC+05:30) Asia/Kolkata
              </Typography>
            </Box>

            <Box>
              <IconButton onClick={onClose} sx={{ p: 1 }}>
                <Iconify icon="mingcute:close-line" />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons on small screens, side by side on larger screens
              gap: 2, // Adds spacing between the buttons
              mt: 2, // Top margin for the Box
            }}
          >
            {/* <Tooltip title="Click here to re-execute the workflow(s)." arrow placement="top">
              <Button
                sx={{
                  width: { xs: '100%', sm: 'auto' }, // Full width on mobile, auto width on larger screens
                  maxWidth: '145px', // Set a maximum width if needed
                }}
                startIcon={<Iconify icon="foundation:refresh" style={{ width: 18, height: 18 }} />}
                size="large"
                variant="contained"
                color="primary"
              >
                Re-execute
              </Button>
            </Tooltip> */}

            {/* Loading Button */}

            <Tooltip title="Click here to re-execute the workflow(s)." arrow placement="top">
              <Button
                endIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                onClick={popover.onOpen} // Open popover on click
                sx={{
                  textTransform: 'capitalize',
                  width: { xs: '100%', sm: 'auto' }, // Full width on mobile, auto width on larger screens
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
              open={popover.open} // Control open state from popover hook
              anchorEl={popover.anchorEl} // Anchor element for popover
              onClose={popover.onClose} // Close popover on action
              slotProps={{ arrow: { placement: 'top' } }} // Ensure proper arrow placement
            >
              <MenuList>
                {[
                  { value: 'published', label: 'Entire Workflow' },
                  { value: 'draft', label: 'Failed & Skipped Steps' },
                ].map((option) => (
                  <MenuItem
                    key={option.value}
                    selected={option.value === publish} // Highlight selected option
                    onClick={() => {
                      popover.onClose(); // Close popover on click
                      onChangePublish(option.value); // Update publish state
                    }}
                  >
                    {option.value === 'published' && <Iconify icon="eva:cloud-upload-fill" />}
                    {option.value === 'draft' && <Iconify icon="solar:file-text-bold" />}
                    {option.label}
                  </MenuItem>
                ))}
              </MenuList>
            </CustomPopover>

            <Tooltip title="Click here to view auto re-execution settings." arrow placement="top">
              <Button
                sx={{
                  width: { xs: '100%', sm: 'auto' }, // Full width on mobile, auto width on larger screens
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
        </Card>
        <Box sx={{ p: '24px 24px 0px 24px' }}>
          <Alert>
            <AlertTitle sx={{ textTransform: 'capitalize' }}> fdfbdfbdfb </AlertTitle>
            This is an check it out!
          </Alert>
        </Box>
        <Box
          justifyContent="space-between"
          sx={{
            display: 'fullwidth',
            p: 3,
          }}
        >
          <Accordion
            sx={{
              boxShadow: '0px 12px 124px -4px rgba(132, 136, 151, 0.24)',
              borderRadius: 2,
              border: '2px solid #D4E2FF',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
              alignItems: 'flex-start',
              color: 'primary.text',
              bgcolor: 'common.white',
              '&:hover': {
                border: '2px solid #078DEE',
              },
              transition: 'all 0.3s ease',
            }}

            // key={item.value}
            // disabled={index === 3}
            // expanded={controlled === item.value}
            // onChange={handleChangeControlled(item.value)}
          >
            <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
              <Accordian />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>dfddhgh</Typography>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion
            sx={{ backgroundColor: 'white' }}
            // key={accordion.value} disabled={index === 3}
          >
            <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
              <Typography variant="subtitle1">accoridan 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>accoridan 1</Typography>
            </AccordionDetails>
          </Accordion> */}
        </Box>
      </Drawer>
      {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
    </>
  );
};

export { ConfigurationDrawer1, ConfigurationDrawer2 };
