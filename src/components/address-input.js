import React, { useState, useContext } from "react"
import { BookingContext } from "../context/BookingContext"
import { getAddress } from "../store/address/actions"
import {
  AlertIcon,
  Alert,
  AlertDescription,
  Button,
  Input,
  Grid,
  FormControl,
} from "@chakra-ui/core"

export const AddressInput = React.forwardRef(({ label }, ref) => {
  const [address, setAddress] = useState("")
  const [state, dispatch] = useContext(BookingContext)
  const handleSubmit = e => {
    e.preventDefault()

    dispatch(
      getAddress(
        {
          address_query: `${address}`,
        },
        state,
        dispatch
      )
    )
  }

  const AddressNotFound = () => {
    if (state.address.error) {
      return (
        <Alert status="error" mt={4}>
          <AlertIcon />
          <AlertDescription>
            We could not find your address, please make sure that you wrote it
            correctly
          </AlertDescription>
        </Alert>
      )
    }
    return null
  }

  return (
    <>
      <Grid templateColumns={{ base: "1fr", md: "4fr 1fr" }} gap={4}>
        <FormControl>
          <Input
            onChange={e => setAddress(e.target.value)}
            type="text"
            name={label}
            ref={ref}
            placeholder="Kesklinn 1, Tallinn"
            focusBorderColor="teal.400"
            defaultValue={
              state.address.data && state.address.data.formatted_address
            }
          />
        </FormControl>
      </Grid>
      <Button
        type="submit"
        variantColor="teal"
        size="md"
        disabled={!address}
        width="150px"
        onClick={handleSubmit}
        mt={4}
      >
        Validate Address
      </Button>

      <AddressNotFound />
    </>
  )
})
