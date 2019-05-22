import React from 'react'

const ContactButton = props => (
  <div id="contactButton">
    <button type={props.type}>{props.value}</button>
    <style jsx>{`
      button {
        width: 320px;
        height: 40px;
        margin: 10px;
        padding: 10px;
        display: inline-block;
        text-decoration: none;
        background: white;
        color: black;
        border: solid 2px black;
        border-radius: 5px;
        transition: 0.4s;
      }
      button :hover {
        background: #2ca9e1;
        color: white;
        border: solid 2px white;
      }
    `}</style>
  </div>
)

export default ContactButton
