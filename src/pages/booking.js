import React, { useState, useContext } from "react"
import BookingForm from "../components/booking-form"
import "bootstrap/dist/css/bootstrap.min.css"
import { BookingSummary } from "../components/booking-summary"
import { Heading, Text, Box, Grid, Link } from "@chakra-ui/core"
import { BookingContext } from "../context/BookingContext"

const IndexPage = () => {
  const [menuState, setMenuState] = useState(false)
  const menuClass = menuState ? "menu-open" : "menu-closed"
  const [state] = useContext(BookingContext)

  return (
    <>
      <Box
        className="navbar"
        gridArea="mobile-summary"
        display={{ md: "none", base: "block" }}
        position="fixed"
      >
        <Link
          className={`${menuClass} nav-link`}
          onClick={() => {
            setMenuState(!menuState)
          }}
        >
          <Heading className="logo">€ {state.booking.total_cost}</Heading>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </Link>
        <Box
          className={`${
            menuState ? "mobile-summary-open" : "mobile-summary-closed"
          } `}
        >
          <BookingSummary />
        </Box>
      </Box>
      <Grid
        m={{ base: "80px 0px", lg: "100px 200px", md: "80px 20px" }}
        templateAreas={{
          md: "'title .' 'form summary'",
          base: "'mobile-summary mobile-summary' 'title .' 'form form'",
        }}
        gap={6}
        templateColumns="2fr 1fr"
      >
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} gridArea="title">
          <Heading as="h3" size="lg">
            Cleaning made simple!
          </Heading>
          <Text fontSize="xl">Happy to be home</Text>
        </Box>
        <Box gridArea="form">
          <BookingForm />
        </Box>
        <Box gridArea="summary" display={{ md: "block", base: "none" }}>
          <BookingSummary />
        </Box>
      </Grid>
    </>
  )
}

export default IndexPage
