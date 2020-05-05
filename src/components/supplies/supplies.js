import React, { useContext, useState } from "react"
import { BookingContext } from "../../context/BookingContext"
import { Box, Spinner, PseudoBox } from "@chakra-ui/core"
import { addService, removeService } from "../../store/services/actions"

const Supplies = React.forwardRef(({ label }, ref) => {
  const [state, dispatch] = useContext(BookingContext)
  const [selectedButton, setSelectedButton] = useState()

  const addCleaningSupplies = e => {
    e.preventDefault()
    dispatch(
      addService(
        { service: { service_id: "cleaning_supplies" } },
        state,
        dispatch
      )
    )
    setSelectedButton("supplies")
  }

  const removeCleaningSupplies = e => {
    e.preventDefault()
    dispatch(removeService("cleaning_supplies", state, dispatch))
    setSelectedButton("no_supplies")
  }

  if (state.services.isLoading)
    return (
      <Box rounded="lg" className="card-big">
        <Spinner color="teal.400" size="xl" />
      </Box>
    )

  if (!state.services.data) return null

  const cleaningSupplies = state.services.data[1]
  const selected = key => selectedButton === key

  const border = selected ? "solid" : "outline"
  return (
    <>
      <PseudoBox
        variantColor="teal"
        variant="outline"
        key="no_supplies"
        as="button"
        fontWeight="semibold"
        display="flex"
        justifyContent="center"
        px={12}
        w="100%"
        py={4}
        mb={3}
        borderWidth="1px"
        borderColor="teal.500"
        color="teal.500"
        rounded="md"
        _hover={{ bg: "teal.50" }}
        _focus={{ boxShadow: "outline" }}
        onClick={removeCleaningSupplies}
      >
        I provide the cleaning supplies
      </PseudoBox>

      <PseudoBox
        variantColor="teal"
        variant={border}
        key="supplies"
        as="button"
        color="teal.200"
        fontWeight="semibold"
        borderWidth="1px"
        borderColor="teal.500"
        color="teal.500"
        rounded="md"
        w="100%"
        px={12}
        py={4}
        _hover={{ bg: "teal.50" }}
        _focus={{ boxShadow: "outline" }}
        onClick={addCleaningSupplies}
      >
        <Box mt="1" variantColor="teal.500" as="h5" lineHeight="tight">
          {cleaningSupplies.name}
        </Box>

        <Box>
          {cleaningSupplies.unit_price}
          {cleaningSupplies.currency_symbol}
        </Box>
      </PseudoBox>
    </>
  )
})

export default Supplies
