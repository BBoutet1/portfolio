import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./css/style.css"

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home",
    backgroundClass: "HomeBackground"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
    this.setBakground(page)
  };

  //Conditional backgound image (only the home page)
  setBakground = page => {
    if (page !== "Home") {
      this.setState({
       backgroundClass: ""
      })
    }
    else {
      this.setState({
        backgroundClass: "HomeBackground"
      })
    }
  };
  
  

    renderPage = () => {
      if (this.state.currentPage === "Home") {
        return <Home />;
      } else if (this.state.currentPage === "About") {
        return <About />;
      } else if (this.state.currentPage === "Portfolio") {
        return <Portfolio />;
      } else {
        return <Contact />;
      }
    };



  render() {
    return (
      <div className={"wrapper " +this.state.backgroundClass}>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
