import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import ModalVideo from 'react-modal-video';
import { useNavigate } from 'react-router';

import {
  Box,
  Card,
  List,
  Button,
  Tooltip,
  ListItem,
  CardMedia,
  Typography,
  IconButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';

import { CreateWorkflow } from 'src/sections/dashbaord/hooks/create_workflow';

export default function BigCard({ sx, ...other }) {
  const videoId = 'CoIfgN0tfhE'; // Repalace with your YouTube video ID
  const coverSrc = `${CONFIG.site.basePath}/assets/background/pabbly_overview_card.png`;
  const [isOpen, setOpen] = useState(false);

  const dialog = useBoolean();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  
  return (
    <Box
      sx={{
        boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.2)',

        backgroundColor: 'common.white',
        // mt: '24px',
        pt: 5,
        pb: 5,
        pr: 3,
        gap: 5,
        borderRadius: 2,
        display: 'flex',
        height: { md: 1 },
        position: 'relative',
        pl: { xs: 3, md: 5 },
        alignItems: { xs: 'left', md: 'left' },
        justifyContent: { xs: 'left', md: 'left' },
        color: 'common.white',
        textAlign: { xs: 'left', md: 'left' },
        flexDirection: { xs: 'column', md: 'row' },

        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', md: 'flex-start' },
          width: {
            xs: '100%',    // Full width on extra small screens
            sm: '100%',    // Full width on small screens
            md: '563px',   // Fixed width on medium screens and up
          },
        }}
      >
        <Typography variant="h6" sx={{ color: 'grey.800', mb: 1 }}>
        No workflows found!
        </Typography>

        <List sx={{ color: 'grey.600' }}>
          <ListItem disablePadding sx={{ mb: '12px' }}>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: '500',
                  '&::before': { paddingRight: '0.5rem' },
                },
              }}
              primary="There may be no contacts in this contact list. You can create a workflow by following the steps below-There may be no contacts in this contact list. You can create a workflow by following the steps below-"
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: '500',
                  mb: 0.5,
                  '&::before': { content: '"•"', paddingRight: '0.5rem' },
                },
              }}
              primary={
                <>
                  <Typography fontSize={14} component="span" fontWeight="bold">
                    Step 1:
                  </Typography>{' '}
                  Click on the {`"Create Workflow"`} button available in the top right section.
                </>
              }
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: '500',
                  mb: 0.5,
                  '&::before': { content: '"•"', paddingRight: '0.5rem' },
                },
              }}
              primary={
                <>
                  <Typography fontSize={14} component="span" fontWeight="bold">
                    Step 2:
                  </Typography>{' '}
                  Now select apps you want to integrate into the trigger and action step.
                </>
              }
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: '500',
                  '&::before': { content: '"•"', paddingRight: '0.5rem' },
                },
              }}
              primary={
                <>
                  <Typography fontSize={14} component="span" fontWeight="bold">
                    Step 3:
                  </Typography>{' '}
                  Once the workflow is completed, save and enable it.{' '}
                  <Link style={{ color: '#078DEE' }} href="#" underline="always">
                    Learn more
                  </Link>
                </>
              }
            />
          </ListItem>

          {/* Add more list items as needed */}
        </List>
        {/* <Tooltip title="Start building a new automation workflow." arrow placement="top">
          <Button
            onClick={handleAddContact}
            sx={{ mt: isMobile ? 2 : 1 }}
            size="large"
            variant="outlined"
            color="primary"
            startIcon={
              <Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />
            }
          >
            Create Workflow
          </Button>
        </Tooltip> */}

        <Tooltip title="Start building a new automation workflow." arrow placement="top">
          <Button
            onClick={dialog.onTrue}
            sx={{ mt: { xs: 2, sm: 1 } }}
            startIcon={
              <Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />
            }
            size="large"
            variant="outlined"
            color="primary"
          >
            Create Workflow
          </Button>
        </Tooltip>

        <CreateWorkflow open={dialog.value} onClose={dialog.onFalse} />
      </Box>

      {/* {img && <Box sx={{ maxWidth: 260 }}>{img}</Box>} */}
      <Box
        sx={{
          marginRight: '16px', // Default margin-right for all screen sizes
          ...(isMobile && {
            marginRight: '0px', // Adjusted margin-right for screens matching 'sm' breakpoint and up
          }),
        }}
      >
        <Tooltip title="Click here to see Video Tutorial." arrow placement="top">
          <Card>
            <Box position="relative">
              <CardMedia
                component="img"
                src={coverSrc}
                title="Cover Image"
                sx={{
                  height: '100%',
                  width: '100%',
                  cursor: 'pointer',
                  objectFit: 'contain',
                }}
                onClick={() => setOpen(true)}
              />
              <IconButton
                aria-label="play"
                onClick={() => setOpen(true)}
                sx={{
                  padding: '0px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  // backgroundColor: '#078DEE',
                  color: '#078DEE',

                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      transform: 'translate(-50%, -50%) scale(1)',
                      boxShadow: '0 0 0 0 rgba(7, 141, 238, 0.7)',
                    },
                    '70%': {
                      transform: 'translate(-50%, -50%) scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(7, 141, 238, 0)',
                    },
                    '100%': {
                      transform: 'translate(-50%, -50%) scale(1)',
                      boxShadow: '0 0 0 0 rgba(7, 141, 238, 0)',
                    },
                  },
                }}
              >
                <Iconify icon="icon-park-solid:play" width={50} height={50} />
              </IconButton>
            </Box>
          </Card>
        </Tooltip>

        <ModalVideo
          channel="youtube"
          autoplay="true"
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
      </Box>
    </Box>
  );
}
