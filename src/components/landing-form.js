import React from "react"
import { navigate } from "gatsby"
import { AreaSelector } from "./area-selector"

const LandingForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    navigate("/booking/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <AreaSelector />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{
            marginTop: "20px",
            backgroundColor: "#B06AB3",
            borderColor: "#B06AB3",
          }}
        >
          Check Availability
        </button>
      </div>
    </form>
  )
}

export default LandingForm
