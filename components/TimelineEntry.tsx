'use client';
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface TimelineEntryProps {
  date: string;
  title: string;
  subtitle: string;
  text: string;
}

export default function TimelineEntry({ date, title, subtitle, text }: TimelineEntryProps) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0', flex: 0.2 }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
             <CalendarMonthIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
             {date}
        </Box>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Paper elevation={3} sx={{ p: 2, backgroundColor: 'background.paper' }}>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
            {subtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}