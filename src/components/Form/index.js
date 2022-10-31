import React, { useState } from 'react'

const Form = () => {

  const [submit, setSubmit] = useState({"full_name": '', "user_name": '', "email": '', "password": '' })

  const handleSubmit= () => {
    
  }
  return (
    <div>
      
    </div>
  )
}

export default Form

    // full_name = db.Column(db.String(50), nullable=False)
    // user_name = db.Column(db.String(20), nullable=False)
    // email = db.Column(db.String(50), nullable=False)
    // password = db.Column(db.String(20), nullable=False)
