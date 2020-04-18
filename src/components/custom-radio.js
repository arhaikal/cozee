import React from "react"
import { Button } from "@chakra-ui/core"

export const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props
  return (
    <Button
      ref={ref}
      variantColor="teal"
      variant={isChecked ? "solid" : "outline"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  )
})
