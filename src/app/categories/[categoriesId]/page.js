import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <div className="my-5">
      <h1>
        Total <span className=" font-bold">{searchParams.category}</span> news:{" "}
        {data.length}
      </h1>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid item xs={6} key={news.id}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={news.thumbnail_url}
                    width={600}
                    height={600}
                    alt="topLogo"
                  />
                </CardMedia>
                <CardContent>
                  <p className=" bg-red-700 text-white w-32 p-1 my-3 rounded">
                    {news.category}
                  </p>
                  <Typography gutterBottom>{news.title}</Typography>
                  <Typography gutterBottom className="my-3">
                    By {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
