// import dayjs from 'dayjs';
// import { useTheme } from '@emotion/react';
// import React, { useRef, useState, useCallback } from 'react';

// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Popover from '@mui/material/Popover';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import { DateTimePicker } from '@mui/x-date-pickers';
// import InputAdornment from '@mui/material/InputAdornment';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { Tooltip, IconButton, Typography, Autocomplete, useMediaQuery } from '@mui/material';

// import { useBoolean } from 'src/hooks/use-boolean';

// import { Form } from 'src/components/hook-form';
// import { Iconify } from 'src/components/iconify';
// import { usePopover } from 'src/components/custom-popover';

// export function OrderTableToolbar({ filters, onResetPage, onClose, dateError, numSelected }) {
//   const [startDate, setStartDate] = useState(dayjs(new Date()));
//   const [endDate, setEndDate] = useState(dayjs(new Date()));
//   const theme = useTheme();
//   const isBelow900px = useMediaQuery(theme.breakpoints.down('md'));
//   const isBelow600px = useMediaQuery(theme.breakpoints.down('sm'));

//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const confirm = useBoolean();

//   const popover = usePopover();
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [selectedColumn, setSelectedColumn] = useState('');
//   const [operator, setOperator] = useState('contains');
//   const [filterValue, setFilterValue] = useState('');

//   const whatsapp_status = ['Active', 'Inactive'];
//   const columns = ['Active', 'Inactive'];
//   const workflows = [
//     'Add Student in Uteach Course and Subscriber in Convertkit on Thrivecart Payment',
//     'Create Invoice in QuickBooks after Stripe Payment',
//     'Update Customer in Hubspot on New Sale in Shopify',
//     'Send Slack Notification on New Deal in Pipedrive',
//     'Add Lead in Salesforce on New Google Form Submission',
//     'Subscriber in Convertkit on Thrivecart Payment',
//     'Invoice in QuickBooks after Stripe Payment',
//     'Customer in Hubspot on New Sale in Shopify',
//     'Send New Deal in Pipedrive',
//     'Salesforce on New Google Form Submission',
//   ];

//   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
//   const taskstatus = ['All Statuses', 'Success', 'Partial Failed', 'Failed'];
//   const executionstatus = ['All Executions', 'Normal Executions', 'Re-Executed'];
//   const workflowexecution = ['All', 'Executed', 'Pending'];

//   const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
//   const handlePopoverClose = () => setAnchorEl(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredWorkflows, setFilteredWorkflows] = useState(workflows);
//   const searchInputRef = useRef(null);

//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleFilterName = useCallback(
//     (event) => {
//       onResetPage();
//       filters.setState({ name: event.target.value });
//     },
//     [filters, onResetPage]
//   );

//   const handleFilterStartDate = useCallback(
//     (newValue) => {
//       onResetPage();
//       filters.setState({ startDate: newValue });
//     },
//     [filters, onResetPage]
//   );

//   const handleFilterEndDate = useCallback(
//     (newValue) => {
//       onResetPage();
//       filters.setState({ endDate: newValue });
//     },
//     [filters, onResetPage]
//   );

//   const handleFilterClick = (event) => {
//     setFilterAnchorEl(event.currentTarget);
//   };

//   const handleFilterClose = () => {
//     setFilterAnchorEl(null);
//   };

//   // In OrderTableToolbar.jsx
//   const [actionAnchorEl, setActionAnchorEl] = useState(null);

//   const handleActionClick = (event) => {
//     setActionAnchorEl(event.currentTarget);
//   };

//   const handleActionClose = () => {
//     setActionAnchorEl(null);
//   };

//   const handleDelete = () => {
//     // Handle delete action
//     handleActionClose();
//   };

//   const handleMove = () => {
//     // Handle move action
//     handleActionClose();
//   };

//   const handleChangeStatus = () => {
//     // Handle status change
//     handleActionClose();
//   };

//   const handleApplyFilter = () => {
//     console.log('Applying filter:', { column: selectedColumn, operator, value: filterValue });
//     filters.setState({ [selectedColumn.toLowerCase()]: filterValue });
//     onResetPage();
//     handleFilterClose();
//   };

//   const handleSearchChange = (event) => {
//     event.stopPropagation(); // Prevent the event from bubbling up
//     const term = event.target.value;
//     setSearchTerm(term);
//     const filtered = workflows.filter((workflow) =>
//       workflow.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredWorkflows(filtered);
//   };

//   const handleSearchClick = (event) => {
//     event.stopPropagation(); // Prevent the click from closing the dropdown
//   };

//   const buttonStyle = {
//     fontSize: '15px',
//     height: '48px',
//     textTransform: 'none',
//     padding: '0 16px',
//   };

//   return (
//     <>
//       <Stack
//         spacing={2}
//         alignItems="center"
//         direction={isBelow600px ? 'column' : 'row'}
//         sx={{ p: 2.5, width: '100%' }}
//       >
//         <Box sx={{ width: '100%' }}>
//           <TextField
//             fullWidth
//             value={filters.state.name}
//             onChange={handleFilterName} // Handle changes for search input
//             placeholder="Search task history..."
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Box>

//         <Box
//           sx={{
//             display: 'flex',
//             gap: 2,
//             flexDirection: 'row',
//             width: isBelow600px ? '100%' : 'auto',
//             justifyContent: 'flex-end',
//             alignItems: 'center', // Vertically center elements
//           }}
//         >
//           {numSelected > 0 && (
//             <>
//               <Tooltip
//                 title="Click here to modify workflows status, or to move and delete workflows."
//                 arrow
//                 placement="top"
//               >
//                 <Button
//                   endIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
//                   onClick={handleActionClick}
//                   color="primary"
//                   sx={{
//                     ...buttonStyle,
//                     width: isBelow600px ? '155px' : '155px',
//                   }}
//                 >
//                   Select Action
//                 </Button>
//               </Tooltip>

//               <SelectActionMen
//                 anchorEl={actionAnchorEl}
//                 onClose={handleActionClose}
//                 onDelete={handleDelete}
//                 onMove={handleMove}
//                 onChangeStatus={handleChangeStatus}
//               />
//             </>
//           )}
//           <Tooltip title="Filter workflows history." arrow placement="top">
//             <Button
//               sx={{
//                 ...buttonStyle,
//                 width: isBelow600px ? '104.34px' : '104.34px',
//               }}
//               startIcon={<Iconify icon="mdi:filter" />}
//               onClick={handleFilterClick}
//             >
//               Filters
//             </Button>
//           </Tooltip>
//           <Box>
//             <Tooltip title="Click here to refresh data." arrow placement="top">
//               <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
//                 <Iconify sx={{ width: '20px', height: '20px' }} icon="heroicons-outline:refresh" />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </Box>
//       </Stack>

//       {/*  Filter Task */}
//       <Popover
//         open={Boolean(filterAnchorEl)}
//         anchorEl={filterAnchorEl}
//         onClose={handleFilterClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//       >
//         <Box
//           sx={{
//             width: {
//               xs: '100%',
//               sm: '100%',
//               md: 650,
//             },
//             flexDirection: {
//               xs: 'column',
//               sm: 'column',
//               md: 'row',
//             },
//           }}
//         >
//           {/* Filter Header */}
//           <Box
//             sx={{
//               borderBottom: '1px dashed #919eab33',
//               p: 2,
//               display: 'flex',
//               height: '100%',
//               width: '100%',
//             }}
//           >
//             <Box sx={{ width: '100%' }}>
//               <Typography variant="h6" sx={{ fontWeight: '600' }}>
//                 Filter Task
//               </Typography>
//             </Box>
//             <Iconify
//               icon="uil:times"
//               onClick={handleFilterClose}
//               style={{
//                 width: 20,
//                 height: 20,
//                 cursor: 'pointer',
//                 color: '#637381',
//               }}
//             />
//           </Box>

//           {/* Filter Options */}
//           <Box
//             sx={{
//               p: '16px 16px 0px 16px',
//               gap: 2,
//               flexDirection: {
//                 xs: 'column',
//                 sm: 'column',
//                 md: 'row',
//               },
//             }}
//           >
//             {/* Date Range Section */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: {
//                   xs: 'column',
//                   sm: 'column',
//                   md: 'row',
//                 },
//                 gap: 2,
//                 mb: 2,
//               }}
//             >
//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
//                 <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Date Range</Typography>
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 sx={{
//                   mb: { xs: 2, sm: 2, md: 0 },
//                   width: { xs: '100%', sm: '100%', md: '390px' },
//                 }}
//               >
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Between"
//                   disabled
//                   size="small"
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
//                 <Form>
//                   <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DateTimePicker
//                       sx={{
//                         height: '30px',
//                         '& .MuiInputBase-input': {
//                           height: 'auto',
//                           padding: '8px 14px',
//                         },
//                       }}
//                       size="small"
//                       label="Date"
//                       value={startDate}
//                       minDate={dayjs('2017-01-01')}
//                       onChange={(newValue) => {
//                         setStartDate(newValue);
//                       }}
//                       slotProps={{
//                         textField: {
//                           fullWidth: true,
//                           sx: {
//                             '& .MuiOutlinedInput-input': {
//                               height: 'auto',
//                               padding: '8px 14px',
//                               fontSize: '14px',
//                             },
//                             '& .MuiInputLabel-root': {
//                               fontSize: '14px',
//                             },
//                           },
//                         },
//                       }}
//                     />
//                   </LocalizationProvider>
//                 </Form>
//               </FormControl>
//             </Box>

//             {/* Workflow Name */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: {
//                   xs: 'column',
//                   sm: 'column',
//                   md: 'row',
//                 },
//                 gap: 2,
//                 mb: 2,
//               }}
//             >
//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
//                 <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Workflow Name</Typography>
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 sx={{
//                   mb: { xs: 2, sm: 2, md: 0 },
//                   width: { xs: '100%', sm: '100%', md: '390px' },
//                 }}
//               >
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Equals to"
//                   disabled
//                   size="small"
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
//                 <Autocomplete
//                   sx={{
//                     '& .MuiInputBase-input': {
//                       fontSize: '14px',
//                     },
//                     '& .MuiInputLabel-root': {
//                       fontSize: '14px',
//                     },
//                   }}
//                   size="small"
//                   options={workflows}
//                   renderInput={(params) => <TextField {...params} label="Select" />}
//                   // sx={{ width: 300 }}
//                 />
//               </FormControl>
//             </Box>

//             {/* Task Status */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: {
//                   xs: 'column',
//                   sm: 'column',
//                   md: 'row',
//                 },
//                 gap: 2,
//                 mb: 2,
//               }}
//             >
//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
//                 <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Task Status</Typography>
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 sx={{
//                   mb: { xs: 2, sm: 2, md: 0 },
//                   width: { xs: '100%', sm: '100%', md: '390px' },
//                 }}
//               >
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Equals to"
//                   disabled
//                   size="small"
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
//                 <Autocomplete
//                   sx={{
//                     '& .MuiInputBase-input': {
//                       fontSize: '14px',
//                     },
//                     '& .MuiInputLabel-root': {
//                       fontSize: '14px',
//                     },
//                   }}
//                   size="small"
//                   options={taskstatus}
//                   renderInput={(params) => <TextField {...params} label="Select" />}
//                   // sx={{ width: 300 }}
//                 />
//               </FormControl>
//             </Box>

//             {/* Task History ID Section */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: {
//                   xs: 'column',
//                   sm: 'column',
//                   md: 'row',
//                 },
//                 gap: 2,
//                 mb: 2,
//               }}
//             >
//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
//                 <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
//                   Task History ID
//                 </Typography>
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 sx={{
//                   mb: { xs: 2, sm: 2, md: 0 },
//                   width: { xs: '100%', sm: '100%', md: '390px' },
//                 }}
//               >
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Equals to"
//                   disabled
//                   size="small"
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Enter Task History ID"
//                   size="small"
//                   sx={{
//                     '& .MuiInputBase-input': {
//                       fontSize: '14px',
//                     },
//                     '& .MuiInputLabel-root': {
//                       fontSize: '14px',
//                     },
//                   }}
//                 >
//                   j
//                 </TextField>
//               </FormControl>
//             </Box>

//             {/* Task Data Section */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: {
//                   xs: 'column',
//                   sm: 'column',
//                   md: 'row',
//                 },
//                 gap: 2,
//                 mb: 2,
//               }}
//             >
//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
//                 <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Task Data</Typography>
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 sx={{
//                   mb: { xs: 2, sm: 2, md: 0 },
//                   width: { xs: '100%', sm: '100%', md: '390px' },
//                 }}
//               >
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Equals to"
//                   disabled
//                   size="small"
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Enter Task Data"
//                   size="small"
//                   sx={{
//                     '& .MuiInputBase-input': {
//                       fontSize: '14px',
//                     },
//                     '& .MuiInputLabel-root': {
//                       fontSize: '14px',
//                     },
//                   }}
//                 >
//                   j
//                 </TextField>
//               </FormControl>
//             </Box>

//             {/* Execution Status */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: {
//                   xs: 'column',
//                   sm: 'column',
//                   md: 'row',
//                 },
//                 gap: 2,
//                 mb: 2,
//               }}
//             >
//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
//                 <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
//                   Execution Status
//                 </Typography>
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 sx={{
//                   mb: { xs: 2, sm: 2, md: 0 },
//                   width: { xs: '100%', sm: '100%', md: '390px' },
//                 }}
//               >
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Equals to"
//                   disabled
//                   size="small"
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
//                 <Autocomplete
//                   sx={{
//                     '& .MuiInputBase-input': {
//                       fontSize: '14px',
//                     },
//                     '& .MuiInputLabel-root': {
//                       fontSize: '14px',
//                     },
//                   }}
//                   size="small"
//                   options={executionstatus}
//                   renderInput={(params) => <TextField {...params} label="Select" />}
//                   // sx={{ width: 300 }}
//                 />
//               </FormControl>
//             </Box>

//             {/* Workflow Execution  */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: {
//                   xs: 'column',
//                   sm: 'column',
//                   md: 'row',
//                 },
//                 gap: 2,
//                 mb: 2,
//               }}
//             >
//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
//                 <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
//                   Workflow Execution
//                 </Typography>
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 sx={{
//                   mb: { xs: 2, sm: 2, md: 0 },
//                   width: { xs: '100%', sm: '100%', md: '390px' },
//                 }}
//               >
//                 <TextField
//                   id="select-currency-label-x"
//                   variant="outlined"
//                   fullWidth
//                   label="Equals to"
//                   disabled
//                   size="small"
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
//                 <Autocomplete
//                   sx={{
//                     '& .MuiInputBase-input': {
//                       fontSize: '14px',
//                     },
//                     '& .MuiInputLabel-root': {
//                       fontSize: '14px',
//                     },
//                   }}
//                   size="small"
//                   options={workflowexecution}
//                   renderInput={(params) => <TextField {...params} label="Select" />}
//                   // sx={{ width: 300 }}
//                 />
//               </FormControl>
//             </Box>
//           </Box>

//           {/* Filter Footer */}
//           <Box
//             sx={{
//               p: 2,
//               gap: 2,
//               display: 'flex',
//               justifyContent: 'flex-end',
//               borderTop: '1px dashed #919eab33',
//             }}
//           >
//             <Button variant="outlined" color="inherit" onClick={handleFilterClose}>
//               Cancel
//             </Button>
//             <Button variant="contained" color="primary" onClick={handleApplyFilter}>
//               Apply Filter
//             </Button>
//           </Box>
//         </Box>
//       </Popover>
//     </>
//   );
// }

// --------------------------------------------------

import dayjs from 'dayjs';
import { useTheme } from '@emotion/react';
import React, { useState, useCallback } from 'react';

import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  Box,
  Stack,
  Alert,
  Button,
  Popover,
  Tooltip,
  MenuItem,
  MenuList,
  Snackbar,
  Typography,
  IconButton,
  FormControl,
  Autocomplete,
  useMediaQuery,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { popover } from 'src/theme/core/components/popover';

import { Form } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';

export function OrderTableToolbar({
  filters,
  onResetPage,
  dateError,
  numSelected,
  publish,
  onChangePublish,
}) {
  const theme = useTheme();
  const isBelow600px = useMediaQuery(theme.breakpoints.down('sm'));
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [endDate, setEndDate] = useState(dayjs(new Date()));

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);
  const handleFilterName = useCallback(
    (event) => {
      onResetPage();
      filters.setState({ name: event.target.value });
    },
    [filters, onResetPage]
  );

  const [selectedColumn, setSelectedColumn] = useState('');
  const [operator, setOperator] = useState('contains');
  const [filterValue, setFilterValue] = useState('');

  const buttonStyle = {
    fontSize: '15px',
    height: '48px',
    textTransform: 'none',
    padding: '0 16px',
  };

  // Snackbar handler
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  // Snackbar states
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleWorkflowAction = (action) => {
    if (action === 'Entire') {
      setSnackbarMessage(
        'You have successfully re-executed the Entire Workflow for 1 Task History ID(s).'
      );
      setSnackbarSeverity('success');
    } else if (action === 'Inactive') {
      setSnackbarMessage(
        'You have successfully re-executed the Skipped & Failed Stups for 1 fask History ID(s)'
      );
      setSnackbarSeverity('success');
    }
    setSnackbarOpen(true);
  };

  const handleFilterClick = (event) => setFilterAnchorEl(event.currentTarget);
  const handleFilterClose = () => setFilterAnchorEl(null);
  const confirmDelete = useBoolean(); // For ConfirmDialog
  const moveFolderPopover = useBoolean(); // For MoveToFolderPopover

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onResetPage();
      filters.setState({ startDate: newValue });
    },
    [filters, onResetPage]
  );

  const handleApplyFilter = () => {
    console.log('Applying filter:', { column: selectedColumn, operator, value: filterValue });
    filters.setState({ [selectedColumn.toLowerCase()]: filterValue });
    onResetPage();
    handleFilterClose();
  };

  const whatsapp_status = ['Active', 'Inactive'];
  const columns = ['Active', 'Inactive'];
  const workflows = [
    'Add Student in Uteach Course and Subscriber in Convertkit on Thrivecart Payment',
    'Create Invoice in QuickBooks after Stripe Payment',
    'Update Customer in Hubspot on New Sale in Shopify',
    'Send Slack Notification on New Deal in Pipedrive',
    'Add Lead in Salesforce on New Google Form Submission',
    'Subscriber in Convertkit on Thrivecart Payment',
    'Invoice in QuickBooks after Stripe Payment',
    'Customer in Hubspot on New Sale in Shopify',
    'Send New Deal in Pipedrive',
    'Salesforce on New Google Form Submission',
  ];

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const taskstatus = ['All Statuses', 'Success', 'Partial Failed', 'Failed'];
  const executionstatus = ['All Executions', 'Normal Executions', 'Re-Executed'];
  const workflowexecution = ['All', 'Executed', 'Pending'];

  return (
    <>
      <Stack
        spacing={2}
        alignItems="center"
        direction={isBelow600px ? 'column' : 'row'}
        sx={{ p: 2.5, width: '100%' }}
      >
        <Box sx={{ width: '100%' }}>
          <TextField
            fullWidth
            value={filters.state.name}
            onChange={handleFilterName}
            placeholder="Search task history..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: 'row',
            width: isBelow600px ? '100%' : 'auto',
            justifyContent: 'flex-end',
            alignItems: 'center', // Vertically center elements
          }}
        >
          {numSelected > 0 && (
            <Tooltip title="Click here to re-execute the workflow(s)." arrow placement="top">
              <Button
                endIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                onClick={handlePopoverOpen}
                color="primary"
                sx={{
                  ...buttonStyle,
                  width: isBelow600px ? '140px' : '140px',
                }}
              >
                Re-execute
              </Button>
            </Tooltip>
          )}

          <Tooltip title="Filter workflows by status or folders." arrow placement="top">
            <Button
              sx={{
                ...buttonStyle,
                width: isBelow600px ? (numSelected > 0 ? '104.34px' : '104.34px') : '104.34px',
              }}
              startIcon={<Iconify icon="mdi:filter" />}
              onClick={handleFilterClick}
            >
              Filters
            </Button>
          </Tooltip>

          <Box>
            <Tooltip title="Click here to refresh data." arrow placement="top">
              <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
                <Iconify sx={{ width: '20px', height: '20px' }} icon="heroicons-outline:refresh" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Stack>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
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
              placement="left"
            >
              <MenuItem
                selected={option.value === publish}
                onClick={() => {
                  handlePopoverClose();
                  if (option.label === 'Active Workflow') {
                    handleWorkflowAction('Entire'); // Show snackbar for enabling workflow
                  } else if (option.label === 'Inactive Workflow') {
                    handleWorkflowAction('Inactive'); // Show snackbar for disabling workflow
                  } else {
                    onChangePublish(option.value);
                  }
                }}
              >
                {option.icon && (
                  <Iconify
                    icon={option.icon}
                    width={20}
                    height={20}
                    sx={{ mr: 2, color: 'inherit' }}
                  />
                )}
                {option.label}
              </MenuItem>
            </Tooltip>
          ))}
        </MenuList>
      </Popover>

      {/*  Filter Task */}
      <Popover
        open={Boolean(filterAnchorEl)}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: 650,
            },
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
            },
          }}
        >
          {/* Filter Header */}
          <Box
            sx={{
              borderBottom: '1px dashed #919eab33',
              p: 2,
              display: 'flex',
              height: '100%',
              width: '100%',
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: '600' }}>
                Filter Task
              </Typography>
            </Box>
            <Iconify
              icon="uil:times"
              onClick={handleFilterClose}
              style={{
                width: 20,
                height: 20,
                cursor: 'pointer',
                color: '#637381',
              }}
            />
          </Box>

          {/* Filter Options */}
          <Box
            sx={{
              p: '16px 16px 0px 16px',
              gap: 2,
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
              },
            }}
          >
            {/* Date Range Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column', // Stack vertically on mobile
                  sm: 'column', // Stack vertically on tablet
                  md: 'row', // Arrange in row on desktop
                },
                gap: 2,
                mb: 2,
              }}
            >
              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Date Range</Typography>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  mb: { xs: 2, sm: 2, md: 0 },
                  width: { xs: '100%', sm: '100%', md: '390px' }, // Responsive width
                }}
              >
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Between"
                  disabled
                  size="small"
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
                <Form>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      sx={{
                        height: '30px',
                        '& .MuiInputBase-input': {
                          height: 'auto',
                          padding: '8px 14px',
                        },
                      }}
                      size="small"
                      label="Date"
                      value={startDate}
                      minDate={dayjs('2017-01-01')}
                      onChange={(newValue) => {
                        setStartDate(newValue);
                      }}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          sx: {
                            '& .MuiOutlinedInput-input': {
                              height: 'auto',
                              padding: '8px 14px',
                              fontSize: '14px',
                            },
                            '& .MuiInputLabel-root': {
                              fontSize: '14px',
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Form>
              </FormControl>
            </Box>
            {/* Workflow Name */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                },
                gap: 2,
                mb: 2,
              }}
            >
              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Workflow Name</Typography>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  mb: { xs: 2, sm: 2, md: 0 },
                  width: { xs: '100%', sm: '100%', md: '390px' },
                }}
              >
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Equals to"
                  disabled
                  size="small"
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
                <Autocomplete
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                  size="small"
                  options={workflows}
                  renderInput={(params) => <TextField {...params} label="Select" />}
                  // sx={{ width: 300 }}
                />
              </FormControl>
            </Box>

            {/* Task Status */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                },
                gap: 2,
                mb: 2,
              }}
            >
              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Task Status</Typography>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  mb: { xs: 2, sm: 2, md: 0 },
                  width: { xs: '100%', sm: '100%', md: '390px' },
                }}
              >
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Equals to"
                  disabled
                  size="small"
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
                <Autocomplete
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                  size="small"
                  options={taskstatus}
                  renderInput={(params) => <TextField {...params} label="Select" />}
                  // sx={{ width: 300 }}
                />
              </FormControl>
            </Box>

            {/* Task History ID Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                },
                gap: 2,
                mb: 2,
              }}
            >
              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
                  Task History ID
                </Typography>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  mb: { xs: 2, sm: 2, md: 0 },
                  width: { xs: '100%', sm: '100%', md: '390px' },
                }}
              >
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Equals to"
                  disabled
                  size="small"
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Enter Task History ID"
                  size="small"
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                >
                  j
                </TextField>
              </FormControl>
            </Box>

            {/* Task Data Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                },
                gap: 2,
                mb: 2,
              }}
            >
              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>Task Data</Typography>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  mb: { xs: 2, sm: 2, md: 0 },
                  width: { xs: '100%', sm: '100%', md: '390px' },
                }}
              >
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Equals to"
                  disabled
                  size="small"
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Enter Task Data"
                  size="small"
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                >
                  j
                </TextField>
              </FormControl>
            </Box>

            {/* Execution Status */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                },
                gap: 2,
                mb: 2,
              }}
            >
              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
                  Execution Status
                </Typography>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  mb: { xs: 2, sm: 2, md: 0 },
                  width: { xs: '100%', sm: '100%', md: '390px' },
                }}
              >
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Equals to"
                  disabled
                  size="small"
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
                <Autocomplete
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                  size="small"
                  options={executionstatus}
                  renderInput={(params) => <TextField {...params} label="Select" />}
                  // sx={{ width: 300 }}
                />
              </FormControl>
            </Box>

            {/* Workflow Execution  */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                },
                gap: 2,
                mb: 2,
              }}
            >
              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 }, justifyContent: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
                  Workflow Execution
                </Typography>
              </FormControl>

              <FormControl
                fullWidth
                sx={{
                  mb: { xs: 2, sm: 2, md: 0 },
                  width: { xs: '100%', sm: '100%', md: '390px' },
                }}
              >
                <TextField
                  id="select-currency-label-x"
                  variant="outlined"
                  fullWidth
                  label="Equals to"
                  disabled
                  size="small"
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
                <Autocomplete
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '14px',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '14px',
                    },
                  }}
                  size="small"
                  options={workflowexecution}
                  renderInput={(params) => <TextField {...params} label="Select" />}
                  // sx={{ width: 300 }}
                />
              </FormControl>
            </Box>
          </Box>

          {/* Filter Footer */}
          <Box
            sx={{
              p: 2,
              gap: 2,
              display: 'flex',
              justifyContent: 'flex-end',
              borderTop: '1px dashed #919eab33',
            }}
          >
            <Button variant="outlined" color="inherit" onClick={handleFilterClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleApplyFilter}>
              Apply Filter
            </Button>
          </Box>
        </Box>
      </Popover>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        Z-index={100}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          boxShadow: '0px 8px 16px 0px rgba(145, 158, 171, 0.16)',
          mt: 7,
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            width: '100%',
            fontSize: '14px',
            fontWeight: 'bold',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
