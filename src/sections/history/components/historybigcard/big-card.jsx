import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import ModalVideo from 'react-modal-video';
import { useNavigate } from 'react-router';

import {
  Box,
  Card,
  List,
  // Button,
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

export default function HistoryBigCard({ sx, ...other }) {
  const videoId = 'GOJt-reqvJA'; // Repalace with your YouTube video ID
  const coverSrc = `${CONFIG.site.basePath}/assets/background/Task History Thumbnail.png`;
  const [isOpen, setOpen] = useState(false);

  const dialog = useBoolean();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate('/app/contact/addcontact');
  };
  return (
    <Box
      sx={{
        boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.2)',

        backgroundColor: 'common.white',
        mt: '32px',
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
        }}
      >
        <Typography variant="h6" sx={{ color: 'grey.800', mb: 1 }}>
        Task History Overview!
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
              primary="Track and review all task actions from your workflows over the past 15 days, excluding internal operations and triggers."
            />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    fontSize: '14px',
                    fontWeight: '500',
                    mb: 1,

                    '&::before': { content: '"•"', paddingRight: '0.5rem' },
                  },
                }}
                primary="View all tasks performed in your workflows, excluding triggers."
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    fontSize: '14px',
                    fontWeight: '500',
                    mb: 1,

                    '&::before': { content: '"•"', paddingRight: '0.5rem' },
                  },
                }}
                primary="Internal Pabbly apps like filters, routers, and formatters are not counted as tasks."
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    fontSize: '14px',
                    fontWeight: '500',
                    mb: 1,

                    '&::before': { content: '"•"', paddingRight: '0.5rem' },
                  },
                }}
                primary="Task history is only available for the past 15 days."
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    fontSize: '14px',
                    fontWeight: '500',
                    mb: 1,

                    '&::before': { content: '"•"', paddingRight: '0.5rem' },
                  },
                }}
                primary="Each action in your workflow is considered a task."
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    fontSize: '14px',
                    fontWeight: '500',
                    mb: 1,

                    '&::before': { content: '"•"', paddingRight: '0.5rem' },
                  },
                }}
                primary="Easily track your task usage and workflow performance."
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    fontSize: '14px',
                    fontWeight: '500',
                    mb: 1,

                    '&::before': { content: '"•"', paddingRight: '0.5rem' },
                  },
                }}
                primary="Tasks include app integrations and external service actions."
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText
                primaryTypographyProps={{
                  component: 'div',
                  sx: {
                    fontSize: '14px',
                    fontWeight: '500',
                    mb: 0,

                    '&::before': { content: '"•"', paddingRight: '0.5rem' },
                  },
                }}
                primary={
                  <>
                    Learn more about task management and tracking with a click.{' '}
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
