import React from 'react'

export default function Buttons(props, showPage) {
  return (
    <div>
      <button onClick={() => props.showPage("Home")}>Home</button>
      <button onClick={() => props.showPage("AboutUs")}>About Us</button>
      <button onClick={() => props.showPage("Gallery")}>Gallery</button>
      <button onClick={() => props.showPage("ContactUs")}>ContactUs</button>
    </div>
  )
}
