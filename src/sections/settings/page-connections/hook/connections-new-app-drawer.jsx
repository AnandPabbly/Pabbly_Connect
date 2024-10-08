// import React, { Fragment, useState } from 'react';

// import {
//   Box,
//   Tab,
//   Link,
//   Tabs,
//   Drawer,
//   Avatar,
//   Button,
//   useTheme,
//   Typography,
//   IconButton,
//   useMediaQuery,
//   Backdrop as MuiBackdrop,
// } from '@mui/material';

// import { useBoolean } from 'src/hooks/use-boolean';

// import { Iconify } from 'src/components/iconify';

// import ActionSetup from './action-setup/action-setup';
// import ConnectionSetup from './connection-setup/connection-setup';

// // Hook to manage the popover state
// const usePopover = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const onOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const onClose = () => {
//     setAnchorEl(null);
//   };

//   return {
//     open: Boolean(anchorEl),
//     anchorEl,
//     onOpen,
//     onClose,
//   };
// };

// // Custom backdrop component
// const CustomBackdrop = (props) => (
//   <MuiBackdrop
//     {...props}
//     sx={{ backgroundColor: 'transparent' }} // Make the backdrop transparent
//   />
// );

// const ConfigurationDrawer = ({ open, onClose, publish, onChangePublish }) => {
//   const handleBackdropClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   const enableConnectionTab = () => {
//     setIsConnectionTabEnabled(true);
//     setActiveTab('two');
//   };

//   const formValidationDialog = useBoolean();

//   const formvalidationClick = () => formValidationDialog.onTrue();

//   const [isConnectionTabEnabled, setIsConnectionTabEnabled] = useState(false);
//   const [drawerWidth, setDrawerWidth] = useState(590); // Increased initial drawer width

//   const [activeTab, setActiveTab] = useState('one');
//   const popover = usePopover(); // Use popover hook

//   // Define snackbar state
//   const [shareSnackbarOpen, setShareSnackbarOpen] = useState(false);
//   const theme = useTheme(); // Use Material-UI theme

//   // Check for small screen
//   const isSmallScreen = useMediaQuery('(max-width:500px)');

//   // Handlers for Snackbar
//   const handleShareSnackbarClose = () => {
//     setShareSnackbarOpen(false);
//   };

//   const handleCopyTaskId = () => {
//     setShareSnackbarOpen(true); // Show snackbar when task ID is copied
//   };

//   const TABS = [
//     {
//       value: 'one',
//       icon: <Iconify icon="hugeicons:setup-01" width={24} />,
//       label: 'Connection',
//       form: <ActionSetup onEnableConnectionTab={enableConnectionTab} />,
//     },
//     {
//       value: 'two',
//       icon: <Iconify icon="icon-park-solid:circular-connection" width={24} />,
//       label: 'Connected App',
//       form: <ConnectionSetup />,
//     },
//   ];

//   // Handler to change active tab
//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <>
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={onClose}
//         PaperProps={{
//           sx: {
//             p: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             width: {
//               xs: '100%',
//               md: '966.44px',
//             },
//           },
//         }}
//         ModalProps={{
//           BackdropComponent: CustomBackdrop,
//         }}
//       >
//         <Box
//           display="flex"
//           sx={{
//             py: 2,
//             pr: 1,
//             pl: 2.5,
//             flexGrow: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             borderBottom: '1px dashed #919eab33',
//             borderBottomRightRadius: '0px',
//             borderBottomLeftRadius: '0px',
//             p: 3,
//             position: 'sticky',
//             top: 0,
//             zIndex: 1,
//           }}
//         >
//           <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
//             <Box sx={{ width: '100%' }}>
//               <Box display="flex" gap="16px">
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   <Avatar
//                     variant="rounded"
//                     src="/assets/icons/app logo/pabbly_icon.png"
//                     sx={{
//                       p: 1,
//                       width: 56,
//                       height: 56,
//                       bgcolor: 'background.neutral',
//                       border: '1px solid #D4E2FF',
//                     }}
//                   />
//                 </Box>
//                 <Box display="flex" flexDirection="column" gap="4px">
//                   <Box sx={{ display: 'auto' }}>
//                     <Box sx={{ gap: 1, alignItems: 'center', display: 'flex' }}>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           width: 'auto',
//                           whiteSpace: 'nowrap',
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                         }}
//                       >
//                         Add New Connection
//                       </Typography>
//                     </Box>
//                     <Box sx={{ gap: 1, alignItems: 'center', display: 'flex' }}>
//                       <Typography
//                         sx={{
//                           fontSize: '14px',
//                           color: '#637381',
//                           width: '100%',
//                           whiteSpace: 'nowrap',
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                         }}
//                       >
//                         You can authorize new connection from here.{' '}
//                         <Link
//                           href="https://www.pabbly.com/privacy-policy/#data-policy"
//                           target="_blank"
//                           sx={{
//                             fontSize: '14px',
//                             color: 'primary.main',
//                             cursor: 'pointer',
//                           }}
//                         >
//                           Learn more
//                         </Link>
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>

//             <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//               <IconButton onClick={onClose} sx={{ p: 1 }}>
//                 <Iconify icon="mingcute:close-line" />
//               </IconButton>
//             </Box>
//           </Box>
//         </Box>

//         <Box
//           justifyContent="space-between"
//           sx={{
//             display: 'block',
//             height: '100%',
//             p: '0px 24px 24px 24px',
//             overflow: 'auto',
//             maxHeight: 'auto',
//           }}
//         >
//           <Box onClick={handleBackdropClick} display="flex" flexDirection="column">
//             <Box display="flex" justifyContent="space-between" alignItems="center">
//               <Tabs
//                 value={activeTab}
//                 onChange={handleTabChange} // Added onChange handler
//                 sx={{ mt: '0px' }}
//               >
//                 {TABS.map((tab) => (
//                   <Tab
//                     key={tab.value}
//                     icon={tab.icon}
//                     label={tab.label}
//                     value={tab.value}
//                     disabled={tab.disabled}
//                   />
//                 ))}
//               </Tabs>
//             </Box>
//             {TABS.map((tab) =>
//               tab.value === activeTab ? <Fragment key={tab.value}>{tab.form}</Fragment> : null
//             )}
//           </Box>
//         </Box>
//         <Box
//           display="flex"
//           sx={{
//             gap: 2,
//             py: 2,
//             pr: 1,
//             pl: 2.5,
//             flexGrow: 1,
//             display: 'flex',
//             borderTop: '1px dashed #919eab33',
//             borderBottomRightRadius: '0px',
//             borderBottomLeftRadius: '0px',
//             p: 3,
//             position: 'sticky',
//             top: 0,
//             zIndex: 1,
//           }}
//         >
//           <Button onClick={formvalidationClick} variant="outlined" color="primary">
//             Cancel
//           </Button>
//           <Button variant="contained" color="primary">
//             Save
//           </Button>
//         </Box>
//       </Drawer>
//       {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
//     </>
//   );
// };

// export { ConfigurationDrawer };

// import React, { Fragment, useState } from 'react';

// import {
//   Box,
//   Tab,
//   Link,
//   Tabs,
//   Drawer,
//   Avatar,
//   Button,
//   useTheme,
//   Typography,
//   IconButton,
//   useMediaQuery,
//   Backdrop as MuiBackdrop,
// } from '@mui/material';

// import { useBoolean } from 'src/hooks/use-boolean';

// import { Iconify } from 'src/components/iconify';

// import ActionSetup from './action-setup/action-setup';
// import ConnectionSetup from './connection-setup/connection-setup';

// const usePopover = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const onOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const onClose = () => {
//     setAnchorEl(null);
//   };

//   return {
//     open: Boolean(anchorEl),
//     anchorEl,
//     onOpen,
//     onClose,
//   };
// };

// const CustomBackdrop = (props) => (
//   <MuiBackdrop
//     {...props}
//     sx={{ backgroundColor: 'transparent' }} // Make the backdrop transparent
//   />
// );

// const ConfigurationDrawer = ({ open, onClose, publish, onChangePublish }) => {
//   const handleBackdropClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   const enableConnectionTab = () => {
//     setIsConnectionTabEnabled(true);
//     setActiveTab('two');
//   };

//   const formValidationDialog = useBoolean();
//   const formvalidationClick = () => formValidationDialog.onTrue();

//   const [isConnectionTabEnabled, setIsConnectionTabEnabled] = useState(false);
//   const [drawerWidth, setDrawerWidth] = useState(590);
//   const [activeTab, setActiveTab] = useState('one');
//   const popover = usePopover();
//   const [shareSnackbarOpen, setShareSnackbarOpen] = useState(false);
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery('(max-width:500px)');

//   const handleShareSnackbarClose = () => {
//     setShareSnackbarOpen(false);
//   };

//   const handleCopyTaskId = () => {
//     setShareSnackbarOpen(true);
//   };

//   const [selectedApp, setSelectedApp] = useState(null); // State to store selected app details

//   // Function to handle app selection from ActionSetup
//   const handleSelectApp = (app) => {
//     setSelectedApp(app);
//   };

//   const TABS = [
//     {
//       value: 'one',
//       icon: <Iconify icon="hugeicons:setup-01" width={24} />,
//       label: 'Connection',
//       form: (
//         <ActionSetup onEnableConnectionTab={enableConnectionTab} onSelectApp={handleSelectApp} />
//       ),
//     },
//     {
//       value: 'two',
//       icon: <Iconify icon="icon-park-solid:circular-connection" width={24} />,
//       label: 'Connected App',
//       form: <ConnectionSetup />,
//     },
//   ];

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <>
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={onClose}
//         PaperProps={{
//           sx: {
//             p: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             width: {
//               xs: '100%',
//               md: '966.44px',
//             },
//           },
//         }}
//         ModalProps={{
//           BackdropComponent: CustomBackdrop,
//         }}
//       >
//         <Box
//           display="flex"
//           sx={{
//             py: 2,
//             pr: 1,
//             pl: 2.5,
//             flexGrow: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             borderBottom: '1px dashed #919eab33',
//             borderBottomRightRadius: '0px',
//             borderBottomLeftRadius: '0px',
//             p: 3,
//             position: 'sticky',
//             top: 0,
//             zIndex: 1,
//           }}
//         >
//           <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
//             <Box sx={{ width: '100%' }}>
//               <Box display="flex" gap="16px">
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   <Avatar
//                     variant="rounded"
//                     src={selectedApp?.icon || '/assets/icons/app logo/pabbly_icon.png'}
//                     sx={{
//                       p: 1,
//                       width: 56,
//                       height: 56,
//                       bgcolor: 'background.neutral',
//                       border: '1px solid #D4E2FF',
//                     }}
//                   />
//                 </Box>
//                 <Box display="flex" flexDirection="column" gap="4px">
//                   <Box sx={{ display: 'auto' }}>
//                     <Box sx={{ gap: 1, alignItems: 'center', display: 'flex' }}>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           width: 'auto',
//                           whiteSpace: 'nowrap',
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                         }}
//                       >
//                         {selectedApp?.name || 'Add New Connection'}
//                       </Typography>
//                     </Box>
//                     <Box sx={{ gap: 1, alignItems: 'center', display: 'flex' }}>
//                       <Typography
//                         sx={{
//                           fontSize: '14px',
//                           color: '#637381',
//                           width: '100%',
//                           whiteSpace: 'nowrap',
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                         }}
//                       >
//                         You can authorize new connection from here.{' '}
//                         <Link
//                           href="https://www.pabbly.com/privacy-policy/#data-policy"
//                           target="_blank"
//                           sx={{
//                             fontSize: '14px',
//                             color: 'primary.main',
//                             cursor: 'pointer',
//                           }}
//                         >
//                           Learn more
//                         </Link>
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//             <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//               <IconButton onClick={onClose} sx={{ p: 1 }}>
//                 <Iconify icon="mingcute:close-line" />
//               </IconButton>
//             </Box>
//           </Box>
//         </Box>

//         <Box
//           justifyContent="space-between"
//           sx={{
//             display: 'block',
//             height: '100%',
//             p: '0px 24px 24px 24px',
//             overflow: 'auto',
//             maxHeight: 'auto',
//           }}
//         >
//           <Box onClick={handleBackdropClick} display="flex" flexDirection="column">
//             <Tabs value={activeTab} onChange={handleTabChange} sx={{ mt: '0px' }}>
//               {TABS.map((tab) => (
//                 <Tab
//                   key={tab.value}
//                   icon={tab.icon}
//                   label={tab.label}
//                   value={tab.value}
//                   disabled={tab.disabled}
//                 />
//               ))}
//             </Tabs>
//             {TABS.map((tab) =>
//               tab.value === activeTab ? <Fragment key={tab.value}>{tab.form}</Fragment> : null
//             )}
//           </Box>
//         </Box>
//         <Box
//           display="flex"
//           sx={{
//             gap: 2,
//             py: 2,
//             pr: 1,
//             pl: 2.5,
//             flexGrow: 1,
//             display: 'flex',
//             borderTop: '1px dashed #919eab33',
//             borderBottomRightRadius: '0px',
//             borderBottomLeftRadius: '0px',
//             p: 3,
//             position: 'sticky',
//             top: 0,
//             zIndex: 1,
//           }}
//         >
//           <Button onClick={formvalidationClick} variant="outlined" color="primary">
//             Cancel
//           </Button>
//           <Button variant="contained" color="primary">
//             Save
//           </Button>
//         </Box>
//       </Drawer>
//       {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
//     </>
//   );
// };

// export { ConfigurationDrawer };

import React, { Fragment, useState } from 'react';

import {
  Box,
  Tab,
  Link,
  Tabs,
  Drawer,
  Avatar,
  Button,
  useTheme,
  Typography,
  IconButton,
  useMediaQuery,
  Backdrop as MuiBackdrop,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

import ActionSetup from './action-setup/action-setup';
import ConnectionSetup from './connection-setup/connection-setup';

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

const CustomBackdrop = (props) => (
  <MuiBackdrop {...props} sx={{ backgroundColor: 'transparent' }} />
);

const ConfigurationDrawer = ({ open, onClose, publish, onChangePublish }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const enableConnectionTab = () => {
    setIsConnectionTabEnabled(true);
    setActiveTab('two');
  };

  const formValidationDialog = useBoolean();
  const formvalidationClick = () => formValidationDialog.onTrue();

  const [isConnectionTabEnabled, setIsConnectionTabEnabled] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(590);
  const [activeTab, setActiveTab] = useState('one');
  const popover = usePopover();
  const [shareSnackbarOpen, setShareSnackbarOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:500px)');

  const handleShareSnackbarClose = () => {
    setShareSnackbarOpen(false);
  };

  const handleCopyTaskId = () => {
    setShareSnackbarOpen(true);
  };

  const [selectedApp, setSelectedApp] = useState(null); // State to store selected app details

  // Function to handle app selection from ActionSetup
  const handleSelectApp = (app) => {
    setSelectedApp(app);
  };

  // Modified onClose function to reset selectedApp to null
  const handleDrawerClose = () => {
    setSelectedApp(null); // Reset selectedApp when drawer closes
    onClose();
  };

  const TABS = [
    {
      value: 'one',
      icon: <Iconify icon="hugeicons:setup-01" width={24} />,
      label: 'Connection',
      form: (
        <ActionSetup onEnableConnectionTab={enableConnectionTab} onSelectApp={handleSelectApp} />
      ),
    },
    {
      value: 'two',
      icon: <Iconify icon="icon-park-solid:circular-connection" width={24} />,
      label: 'Connected App',
      form: <ConnectionSetup />,
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose} // Use modified onClose handler
        PaperProps={{
          sx: {
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            width: {
              xs: '100%',
              md: '966.44px',
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
              <Box display="flex" gap="16px">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src={selectedApp?.icon || '/assets/icons/app logo/pabbly_icon.png'}
                    sx={{
                      p: 1,
                      width: 56,
                      height: 56,
                      bgcolor: 'background.neutral',
                      border: '1px solid #D4E2FF',
                    }}
                  />
                </Box>
                <Box display="flex" flexDirection="column" gap="4px">
                  <Box sx={{ display: 'auto' }}>
                    <Box sx={{ gap: 1, alignItems: 'center', display: 'flex' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          width: 'auto',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {selectedApp?.name || 'Add New Connection'}
                      </Typography>
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
                        You can authorize new connection from here.{' '}
                        <Link
                          href="https://www.pabbly.com/privacy-policy/#data-policy"
                          target="_blank"
                          sx={{
                            fontSize: '14px',
                            color: 'primary.main',
                            cursor: 'pointer',
                          }}
                        >
                          Learn more
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <IconButton onClick={handleDrawerClose} sx={{ p: 1 }}>
                <Iconify icon="mingcute:close-line" />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box
          justifyContent="space-between"
          sx={{
            display: 'block',
            height: '100%',
            p: '0px 24px 24px 24px',
            overflow: 'auto',
            maxHeight: 'auto',
          }}
        >
          <Box onClick={handleBackdropClick} display="flex" flexDirection="column">
            <Tabs value={activeTab} onChange={handleTabChange} sx={{ mt: '0px' }}>
              {TABS.map((tab) => (
                <Tab
                  key={tab.value}
                  icon={tab.icon}
                  label={tab.label}
                  value={tab.value}
                  disabled={tab.disabled}
                />
              ))}
            </Tabs>
            {TABS.map((tab) =>
              tab.value === activeTab ? <Fragment key={tab.value}>{tab.form}</Fragment> : null
            )}
          </Box>
        </Box>
        <Box
          display="flex"
          sx={{
            gap: 2,
            py: 2,
            pr: 1,
            pl: 2.5,
            flexGrow: 1,
            display: 'flex',
            borderTop: '1px dashed #919eab33',
            borderBottomRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            p: 3,
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        >
          <Button onClick={formvalidationClick} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Drawer>
      {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
    </>
  );
};

export { ConfigurationDrawer };