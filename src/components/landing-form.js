import React from "react"
import { navigate } from "gatsby"
import { AreaSelector } from "./area-selector"
import { Flex } from "@chakra-ui/core";

const LandingForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    navigate("/booking/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex align="center" justify="center">
        <Flex align="center" justify="center" w={200}>
          <AreaSelector />
        </Flex>

        <Flex align="center" justify="center">
          <button
            type="submit"
            className="btn btn-primary btn-block bg-teal-500 border-teal-500 hover:bg-teal-400 hover:border-teal-400 "
            style={{
              marginLeft: '20px'
            }}
          >
            Check Availability
        </button>
        </Flex>
      </Flex>
    </form>
  )
}

export default LandingForm
