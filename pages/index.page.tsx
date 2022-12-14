import type { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import Head from "next/head";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import BodyCard from "dh-marvel/components/layouts/body/card/body-card";
import UsePagination from "dh-marvel/components/layouts/body/pagination/body-pagination";

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const Index: NextPage = () => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [comics, setComics] = useState<Comic[]>();

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  };

  useEffect(() => {
    (async () => {
      const data = await getComics((page - 1) * 12, 12)
        .then(res => {
          setTotal(Number((res.data.total / 12).toFixed()));
          return res.data.results.map(({ title, id, thumbnail }: Comic) => {
            return { title, id, thumbnail };
          });
        })
      setComics(data);
    })()
  }, [page]);

  return (
    <>
      <Head>
        <title>DH | Marvel Comics - Next App</title>
        <meta name="description" content="Project generated by create next app for Certified Tech Developer checkpoint." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title="Comics">
        <Box sx={{ flexGrow: 1, paddingBottom: 3 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {comics?.map((c) => (
              <Grid item xs={2} sm={4} md={4} key={c.id}>
                <BodyCard id={c.id} img={c.thumbnail.path + "." + c.thumbnail.extension} title={c.title} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <UsePagination count={total} page={page} handleChange={handleChange} />
      </BodySingle>
    </>
  );
};

export default Index;


//<BodyCard id={c.id} img={c.thumbnail.path + "." + c.thumbnail.extension} title={c.title} />

/*
<Stack spacing={2}>
  <Typography>Page: {page}</Typography>
  <Pagination count={10} page={page} onChange={handleChange} />
</Stack>
*/