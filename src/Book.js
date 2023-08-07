import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const Book = ({book}) => {



  console.log(book.name);
  return (
    <Card sx={{ width: 250, margin: '16px',display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ width: '100%', height: 300, objectFit: 'cover' }}
        image={book.base64image}
        alt={book.name}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {book.name}
        </Typography>
    
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between' , flexDirection: 'column' }}>
        <Typography variant="body4" color="black" gutterBottom sx={{fontWeight:"bold", marginBottom: "1px"}}>
          Rs. {book.price}
        </Typography>
          <Button variant="contained" sx={{bgcolor: "green"}}>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Book;
