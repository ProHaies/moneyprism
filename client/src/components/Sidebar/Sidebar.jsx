import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import {  BiSearch } from "react-icons/bi";
import {  } from "react-icons/bi";
import { AiFillHeart,} from "react-icons/ai";
import { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
import SidebarMenu from "./SidebarMenu";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { Avatar } from "@material-ui/core";
import useStyles from './styles';

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const classes = useStyles()
 
  const routes = [
    {
      path:'/',
      name: "Home",
      icon: <FaHome />,
    },
    {
      path:'/posts/addPost',
      name: "Add A Fund",
      icon: <FaPlusCircle />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <MdMessage />,
    },
    {
      path: "/saved",
      name: "Saved",
      icon: <AiFillHeart />,
    },
  ];
  const logo = () => {
    navigate("/")
  }
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
    <div className="main">
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                  onClick={logo}
                >
                  MoneyPrism
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars className="bar" onClick={toggle} />
            </div>
          </div>
         {user? (<Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>) :(<button>123</button>) }
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>               
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
      </div>
    </>
  );
};

export default SideBar;