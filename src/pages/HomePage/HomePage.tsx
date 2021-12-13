import { css } from "@emotion/css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { textAlign } from "@mui/system";
import React from "react";
import { Page } from "../../components/Page/Page";

const Sponsors: Array<{ image: string; name: string; link: string }> = [
  {
    name: "Netlify",
    image: "https://www.netlify.com/img/global/badges/netlify-color-accent.svg",
    link: "https://www.netlify.com",
  },
];

export function HomePage() {
  return (
    <>
      <Page title={null} description={null} 
        container={{
          maxWidth: "lg",
        }}
      box={{
        mt:"2rem"
      }}>
          <Typography variant="h1" component="h1" gutterBottom align="center">
            Fari Community
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            The Open TTRPG Community
          </Typography>
      </Page>
    </>
  );

  function renderSponsors() {
    return (
      <Box py="2rem" mb={"2rem"}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Sponsors
          </Typography>
          <Grid container spacing={4} justifyContent="flex-start">
            {Sponsors.map((sponsor, i) => {
              return (
                <Grid item key={i}>
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    <img
                      className={css({ width: "auto", height: "50px" })}
                      src={sponsor.image}
                      title={sponsor.name}
                    />
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default HomePage;
