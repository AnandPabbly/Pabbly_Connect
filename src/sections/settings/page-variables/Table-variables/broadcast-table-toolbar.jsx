import dayjs from 'dayjs';
import { useTheme } from '@emotion/react';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { IconButton, useMediaQuery } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export function OrderTableToolbar({ filters, onResetPage, dateError }) {
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const confirm = useBoolean();

  const popover = usePopover();
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [operator, setOperator] = useState('contains');
  const [filterValue, setFilterValue] = useState('');

  const whatsapp_status = ['Active', 'Inactive']; // Add your actual column names here
  const columns = ['Active', 'Inactive']; // Add your actual column names here

  const handleFilterName = useCallback(
    (event) => {
      onResetPage();
      filters.setState({ name: event.target.value });
    },
    [filters, onResetPage]
  );

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onResetPage();
      filters.setState({ startDate: newValue });
    },
    [filters, onResetPage]
  );

  const handleFilterEndDate = useCallback(
    (newValue) => {
      onResetPage();
      filters.setState({ endDate: newValue });
    },
    [filters, onResetPage]
  );

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleApplyFilter = () => {
    console.log('Applying filter:', { column: selectedColumn, operator, value: filterValue });
    filters.setState({ [selectedColumn.toLowerCase()]: filterValue });
    onResetPage();
    handleFilterClose();
  };

  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: 'flex-end', md: 'center' }}
        direction={{ xs: 'column', md: 'row' }}
        sx={{ p: 2.5, pr: { xs: 2.5, md: 1 } }}
      >
        <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={startDate}
              minDate={dayjs('2017-01-01')}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              slotProps={{ textField: { fullWidth: false } }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              value={endDate}
              minDate={dayjs('2017-01-01')}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              slotProps={{ textField: { fullWidth: false } }}
            />
          </LocalizationProvider>
          <TextField
            sx={{ mr: '5px', width: '50%' }}
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
          <Button
            sx={{ ml: '5px' }}
            size="large"
            variant=""
            startIcon={<Iconify icon="mdi:filter" />}
            onClick={handleFilterClick}
          >
            Filters
          </Button>
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify sx={{ width: '20px', height: '20px' }} icon="heroicons-outline:refresh" />
          </IconButton>
        </Stack>
      </Stack>
      {/* <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
            sx={{ color: 'primary' }}
          >
            <Iconify icon="line-md:uploading-loop" />
            Export
          </MenuItem>
        </MenuList>
      </CustomPopover> */}
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
            p: 2,
            width: {
              xs: '300px', // 100% width on extra-small screens
              sm: '100%', // 100% width on small screens
              md: 800, // 800px width on medium screens and above
            },
            display: 'flex',
            flexDirection: {
              xs: 'column', // column direction on extra-small screens
              sm: 'column', // column direction on small screens
              md: 'row', // row direction on medium screens and above
            },
            gap: 2,
          }}
        >
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            {/* <InputLabel>Date Range</InputLabel> */}
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Date Range"
            >
              {whatsapp_status.map((whatsapp_statuss) => (
                <MenuItem key={whatsapp_statuss} value={whatsapp_statuss}>
                  {whatsapp_statuss}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Between"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Select Date Range"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Box
          sx={{
            p: 2,
            width: {
              xs: '300px', // 100% width on extra-small screens
              sm: '100%', // 100% width on small screens
              md: 800, // 800px width on medium screens and above
            },
            display: 'flex',
            flexDirection: {
              xs: 'column', // column direction on extra-small screens
              sm: 'column', // column direction on small screens
              md: 'row', // row direction on medium screens and above
            },
            gap: 2,
          }}
        >
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            {/* <InputLabel>Date Range</InputLabel> */}
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Workflow Name"
            >
              {whatsapp_status.map((whatsapp_statuss) => (
                <MenuItem key={whatsapp_statuss} value={whatsapp_statuss}>
                  {whatsapp_statuss}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Equals to"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Select Workflows"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Box
          sx={{
            p: 2,
            width: {
              xs: '300px', // 100% width on extra-small screens
              sm: '100%', // 100% width on small screens
              md: 800, // 800px width on medium screens and above
            },
            display: 'flex',
            flexDirection: {
              xs: 'column', // column direction on extra-small screens
              sm: 'column', // column direction on small screens
              md: 'row', // row direction on medium screens and above
            },
            gap: 2,
          }}
        >
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            {/* <InputLabel>Date Range</InputLabel> */}
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Task Status"
            >
              {whatsapp_status.map((whatsapp_statuss) => (
                <MenuItem key={whatsapp_statuss} value={whatsapp_statuss}>
                  {whatsapp_statuss}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Equals to"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="All Statuses"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Box
          sx={{
            p: 2,
            width: {
              xs: '300px', // 100% width on extra-small screens
              sm: '100%', // 100% width on small screens
              md: 800, // 800px width on medium screens and above
            },
            display: 'flex',
            flexDirection: {
              xs: 'column', // column direction on extra-small screens
              sm: 'column', // column direction on small screens
              md: 'row', // row direction on medium screens and above
            },
            gap: 2,
          }}
        >
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            {/* <InputLabel>Date Range</InputLabel> */}
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Task History ID	"
            >
              {whatsapp_status.map((whatsapp_statuss) => (
                <MenuItem key={whatsapp_statuss} value={whatsapp_statuss}>
                  {whatsapp_statuss}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Equals to"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Enter Task History ID"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Box
          sx={{
            p: 2,
            width: {
              xs: '300px', // 100% width on extra-small screens
              sm: '100%', // 100% width on small screens
              md: 800, // 800px width on medium screens and above
            },
            display: 'flex',
            flexDirection: {
              xs: 'column', // column direction on extra-small screens
              sm: 'column', // column direction on small screens
              md: 'row', // row direction on medium screens and above
            },
            gap: 2,
          }}
        >
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            {/* <InputLabel>Date Range</InputLabel> */}
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Task Data"
            >
              {whatsapp_status.map((whatsapp_statuss) => (
                <MenuItem key={whatsapp_statuss} value={whatsapp_statuss}>
                  {whatsapp_statuss}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Equals to"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Enter Task Data"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Box
          sx={{
            p: 2,
            width: {
              xs: '300px', // 100% width on extra-small screens
              sm: '100%', // 100% width on small screens
              md: 800, // 800px width on medium screens and above
            },
            display: 'flex',
            flexDirection: {
              xs: 'column', // column direction on extra-small screens
              sm: 'column', // column direction on small screens
              md: 'row', // row direction on medium screens and above
            },
            gap: 2,
          }}
        >
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            {/* <InputLabel>Date Range</InputLabel> */}
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Execution Status"
            >
              {whatsapp_status.map((whatsapp_statuss) => (
                <MenuItem key={whatsapp_statuss} value={whatsapp_statuss}>
                  {whatsapp_statuss}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Equals to"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField id="select-currency-label-x" variant="outlined" select fullWidth label="All">
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Box
          sx={{
            p: 2,
            width: {
              xs: '300px', // 100% width on extra-small screens
              sm: '100%', // 100% width on small screens
              md: 800, // 800px width on medium screens and above
            },
            display: 'flex',
            flexDirection: {
              xs: 'column', // column direction on extra-small screens
              sm: 'column', // column direction on small screens
              md: 'row', // row direction on medium screens and above
            },
            gap: 2,
          }}
        >
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            {/* <InputLabel>Date Range</InputLabel> */}
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Workflow Execution"
            >
              {whatsapp_status.map((whatsapp_statuss) => (
                <MenuItem key={whatsapp_statuss} value={whatsapp_statuss}>
                  {whatsapp_statuss}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField
              id="select-currency-label-x"
              variant="outlined"
              select
              fullWidth
              label="Equals to"
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ mb: { xs: 2, sm: 2, md: 0 } }}>
            <TextField id="select-currency-label-x" variant="outlined" select fullWidth label="All">
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  {column}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>
      </Popover>
    </>
  );
}