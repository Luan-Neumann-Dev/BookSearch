import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your book of choice.
          </h2><br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum laboriosam amet, veniam esse hic eos ullam vitae velit unde dignissimos nihil aliquam ut quis labore officiis facere fugit consectetur?
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header