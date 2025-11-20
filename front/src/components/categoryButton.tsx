import { categoriesProps } from '@/mockData/categories';
import { Box, Button, Typography } from '@mui/material';

export default function CategoryButton({
  categories,
}: {
  categories: categoriesProps[];
}) {
  return categories.map((categorie, index) => (
    <Button
      key={index}
      sx={{ display: 'flex', flexDirection: 'column', gap: '0.25em' }}
    >
      <Box
        component='img'
        src={categorie.img}
        alt='Icone da Categoria'
        sx={{
          width: '2em',
          height: '2em',
          borderRadius: '0.5em',
          boxShadow: '1px 1px 2px',
        }}
      />
      <Typography variant='body2' color='textSecondary' sx={{ fontSize: 12 }}>
        {categorie.name}
      </Typography>
    </Button>
  ));
}
