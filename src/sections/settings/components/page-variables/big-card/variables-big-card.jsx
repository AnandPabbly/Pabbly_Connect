import { useState } from 'react';
import { useTheme } from '@emotion/react';
import ModalVideo from 'react-modal-video';
import { useNavigate } from 'react-router';

import {
  Box,
  Card,
  List,
  // Button,
  Tooltip,
  CardMedia,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';

export default function VariablesBigCard({ sx, ...other }) {
  const videoId = 'qLjI9klSSmI'; // Repalace with your YouTube video ID
  const coverSrc = `${CONFIG.site.basePath}/assets/background/Variables Thumbnail.png`;
  const [isOpen, setOpen] = useState(false);

  const dialog = useBoolean();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate('/app/contact/addcontact');
  };

  // Define common styles
  const commonListStyle = {
    paddingLeft: '8px',
    // color: 'grey.600',
    '[data-mui-color-scheme="light"] &': {
      color: 'grey.600',
    },
    '[data-mui-color-scheme="dark"] &': {
      color: 'var(--palette-text-secondary)',
    },
    fontSize: '12px',
  };

  const commonListItemStyle = {
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    listStyleType: 'disc',
    listStylePosition: 'outside',
    color: 'grey.800',
  };

  return (
    <Box
      sx={{
        boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.2)',
        backgroundColor: 'background.paper',

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
          display: 'fixd',
          flex: '1 1 auto',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', md: 'flex-start' },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.common.white
                : theme.palette.text.primary,
            mb: 1,
          }}
        >
          Points To Remember!
        </Typography>

        <List sx={{ ...commonListStyle, mb: 0 }}>
          <ul style={commonListStyle}>
            {[
              'Custom variables are beneficial when you need to insert identical data into multiple workflows.',
              'Multiple custom variables can be created at the global account level scope.',
              'You can modify variable data for custom variables from within your workflows.',
              'Custom variables are applicable across all workflows in your Pabbly Connect account.',
              'Custom variables are usable within any action step in the assigned workflows.',
              'To utilize custom variables, click the copy button located behind the custom variable name.',
              <>
                System variables are available in every account, and their values cannot be altered.{' '}
                <a
                  href="https://forum.pabbly.com/threads/variables-in-pabbly-connect.17265/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#078DEE' }}
                >
                  Learn more
                </a>
              </>,
              'Adding a team member grants them permission to create, update, fetch, or delete your custom variables using Pabbly Connect Manager.',
            ].map((text, index) => (
              <li key={index} style={commonListItemStyle}>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </List>
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
