import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer className="container-fluid mt-5 py-3 bg-light">
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="mb-0">© 2023 Vikash. All rights reserved.</p>
                <Link href="/" className="btn btn-outline-primary"><i className="bi bi-question-circle-fill"></i> Support</Link>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer