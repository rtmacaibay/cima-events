import * as React from "react"

import { CardHeader, CardMedia, Grid } from "@mui/material"
import Paper from '@mui/material/Paper'
import { styled } from "@mui/material/styles"
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import { red } from '@mui/material/colors'
import IconButton from "@mui/material"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '2em'
}));

const BasicCardItem = () => {
    return (
        <Item>
            <Card variant='outlined' sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="event">R</Avatar>
                    }
                    title="Creamies HACKATHON"
                    subheader="March 26, 2023"
                />
                <CardMedia
                    component="img"
                    height="135"
                />
            </Card>
        </Item>
    );
};

const IndexPage = () => (
    <Layout>
        <Grid container justifyContent="left" spacing={2}>
            <Grid item xs="auto">
                <BasicCardItem />
            </Grid>
            <Grid item xs="auto">
                <BasicCardItem />
            </Grid>
            <Grid item xs="auto">
                <BasicCardItem />
            </Grid>
            <Grid item xs="auto">
                <BasicCardItem />
            </Grid>
            <Grid item xs="auto">
                <BasicCardItem />
            </Grid>
            <Grid item xs="auto">
                <BasicCardItem />
            </Grid>
            <Grid item xs="auto">
                <BasicCardItem />
            </Grid>
            <Grid item xs="auto">
                <BasicCardItem />
            </Grid>
        </Grid>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
