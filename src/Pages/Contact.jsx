import React from 'react'

function Contact() {
  return (
    <div>
  <div className="container">
    <div className="row mt-5">
      <div className="col-lg-6 col-12 mt-5">
        <div className="contact-details ">
          <h1 className="fw-bold display-4 mb-4">Hello, what's on your mind?</h1>
          <p className="mb-5 text-secondary">Credibly administrate market positioning deliverables rather than clicks-and-mortar
            methodologies. Proactively formulate out-of-the-box technology with clicks-and-mortar testing
            procedures. Uniquely promote leveraged web-readiness for standards compliant value. Rapidiously
            pontificate cooperative mindshare via maintainable applications.</p>
          <button className=" border-0  rounded-pill text-white fw-bold mb-4 " style={{backgroundColor: '#eb4a36'}}>Schedule a call</button>
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <form action className="contact-from p-5">
          <div className="form-element  mb-4">
            <label htmlFor className="text-white mb-2">Name</label><br />
            <input type="text" className="bg-transparent border border-2 border-white w-100 rounded-pill p-2" />
          </div>
          <div className="form-element mb-4">
            <label htmlFor className="text-white mb-2">Email</label><br />
            <input type="email" className="bg-transparent border border-2 border-white w-100 rounded-pill p-2" />
          </div>
          <div className="form-element mb-4">
            <label htmlFor className="text-white mb-2">Message</label><br />
            <textarea name id className="bg-transparent border border-2 border-white w-100 rounded" style={{height: 150}} defaultValue={""} />
          </div>
          <div className="text-center">
            <button className=" border-0 bg-warning rounded-pill send mx-auto">Send  Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact