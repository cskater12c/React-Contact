import React, { Component } from "react";

class ContactItem extends Component {
  
    state = {
      contacts: [
        {
          name: "Chris Smith",
          phone: "123-456-7890",
          email: "Cskater12c@yahoo.com",
          skills: "Mecanic,Tech"
        },
        {
          name: "Chris Smith",
          phone: "123-456-7890",
          email: "Cskater12c@yahoo.com",
          skills: "Mecanic,Tech"
        },
        {
          name: "Chris Smith",
          phone: "123-456-7890",
          email: "Cskater12c@yahoo.com",
          skills: "Mechanic,Tech"
        }
      ]
    };
     contacts = this.state.contacts.map(function(data) {
        return (
        <tr>
          <td>{data.name}</td>
          <td>{data.phone}</td>
          <td>{data.email}</td>
          <td>{data.skills}</td>
        </tr>
    )
    });
  

  render() {
    return (
      <div>
           {this.contacts}
           </div>
    )
  }
} 


export default ContactItem;
