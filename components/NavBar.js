import React, { useState, useContext } from 'react'
import { commentCrawdContext } from '../context/Firebase/BaseContext';
import Link from 'next/link'

const styles = {
  wrapper:`text-black`,
  content:`flex items-center space-x-5 justify-between p-5 max-w-7xl mx-auto`,
  logoContainer: ``,
  logo: `w-44 object-contain cursor-pointer`,
  ourStory: ``,
  bannerNav: `hidden md:inline-flex items-center space-x-5`,
  whiteText: ``,
  getStartedButton: `bg-[#5A23A0] text-white py-1 px-4 rounded-full cursor-pointer`,
  innerNav: `flex flex-col ml-4 p-5 space-y-5`,
};


function NavLink({ to, children}) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen, currentUser, currentConnectedWalletAddress}) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md bg-gradient-to-b from-transparent to-white bg-[rgb(214,219,220)]`}>
        <div className="flex items-center justify-center filter drop-shadow-md h-20"> {/*logo container*/}
            <span className="text-xl font-semibold">
              <Link href="/">
                <img 
                    className={styles.logo}
                    src={``}
                    alt=""
                />
              </Link>
            </span>
        </div>
        <div className="">
            {
              currentUser && currentConnectedWalletAddress? 
                (
                  <div className={styles.innerNav}>
                    <a href={`/`}>
                      <span className="text-xl font-medium my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Our Story</span>
                    </a>
                  </div>
                )
                : 
                (
                  <div className={styles.innerNav}>
                    <a href={`/`}>
                      <span className="text-xl font-medium my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Our Story</span>
                    </a>
                    <span className="text-xl font-medium my-4 bg-[#5A23A0] text-white py-1 px-4 rounded-full cursor-pointer text-center" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Use browser to connect wallet</span>
                  </div>
                )
            }
        </div>  
    </div>
  )
}

const Navbar = () => {
  
  const {currentUser, handleUserAuth, currentConnectedWalletAddress, handleWalletConnection} = useContext(commentCrawdContext);
  const [open, setOpen] = useState(false)
  

  return (
    <div className={styles.wrapper}>
        <MobileNav open={open} setOpen={setOpen} currentUser={currentUser} currentConnectedWalletAddress={currentConnectedWalletAddress} />
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <img 
                  className={styles.logo}
                  src={``}
                  alt=""
              />
            </Link>
            
          </div>
          <div>
            <div className="z-50 flex relative w-6 h-6 flex-col justify-between items-center md:hidden" onClick={() => {setOpen(!open)}}>
                {/* hamburger button */}
                <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </div>
          {
            currentUser && currentConnectedWalletAddress ? 
            (
              <div className={styles.bannerNav}>
                <div className={styles.ourStory}>
                  <div className={styles.whiteText}>Our Story</div>
                </div>
                {/* <div className={styles.whiteText}>Membership</div> */}
                <div className={styles.getStartedButton}>Wallet Connected</div>
                
              </div>
            )
            : 
            (
              <div className={styles.bannerNav}>
                <div className={styles.ourStory}>
                  <div className={styles.whiteText}>Our Story</div>
                </div>
                {/* <div className={styles.whiteText}>Membership</div> */}
                {/* <div className={styles.whiteText} onClick={handleUserAuth}>Sign In</div> */}
                <div className={styles.getStartedButton} onClick={handleWalletConnection}>Connect Wallet</div>
              </div>
            )
          }
          
        </div>
    </div>
  )
}

export default Navbar