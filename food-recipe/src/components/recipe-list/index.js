import { Card, CardContent, CardMedia, CardActionArea, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 centered-text" >
           List of Recipes :  
        </h2>
        <Link href={"/"}>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}> Click Here to Go Home </div>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={recipe.image}
                        alt={recipe.name}
                      />
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {recipe.name}
                        </Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                          <Typography variant="body2" color="text.secondary">
                            Rating: {recipe.rating}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {recipe.cuisine}
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
