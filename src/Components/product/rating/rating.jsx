import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  0.6: 'Useless',
  0.7: 'Useless',
  0.8: 'Useless',
  0.9: 'Useless',
  1: 'Useless+',
  1.2: 'Useless+',
  1.3: 'Useless+',
  1.4: 'Useless+',
  1.5: 'Poor',
  1.6: 'Poor',
  1.7: 'Poor',
  1.8: 'Poor',
  1.9: 'Poor',
  2: 'Poor+',
  2.1: 'Poor+',
  2.2: 'Poor+',
  2.3: 'Poor+',
  2.4: 'Poor+',
  2.5: 'Ok',
  2.6: 'Ok',
  2.7: 'Ok',
  2.8: 'Ok',
  2.9: 'Ok',
  3: 'Ok+',
  3.1: 'Ok+',
  3.2: 'Ok+',
  3.3: 'Ok+',
  3.4: 'Ok+',
  3.5: 'Good',
  3.6: 'Good',
  3.7: 'Good',
  3.8: 'Good',
  3.9: 'Good',
  4: 'Good+',
  4.1: 'Good+',
  4.2: 'Good+',
  4.3: 'Good+',
  4.4: 'Good+',
  4.5: 'Excellent',
  4.6: 'Excellent',
  4.7: 'Excellent',
  4.8: 'Excellent',
  4.9: 'Excellent',
  5: 'Excellent+',
};

export default function TextRating(props) {
  const value = props.rate;   

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
