import { useContext, useEffect } from 'react'
import Dashboard from '@/components/Dashboard';
import { commentCrawdContext } from '@/context/Firebase/BaseContext';
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Home() {
  
    const { handleUserAuth, currentUser } =  useContext(commentCrawdContext);

  useEffect(()=> {
    console.log(currentUser);
  }, [currentUser]);

    const styles = {
      parent: `flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100`,
      wrapper: `flex flex-col items-center justify-center w-full flex-1 px-20 text-center`,
      content: `bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl`,
      signInSection: `w-3/5 p-5`,
      signInContentSection: `w-2/5 bg-[#7335c4] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12`,
      signInWelcome: `text-3xl font-bold mb-2`,
      signInSubWelcome: `border-2 w-10 border-white inline-block mb-2`,
      signInSubWelcomeInfo1: `mb-10`,
      signInSubWelcomeInfo2: `border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#7335c4]`,
      companyName: `text-left font-bold`,
      themecolor: `text-[#7335c4]`,
      signIn1: `py-32`,
      signInHeading: `text-3xl font-bold text-[#7335c4] mb-2`,
      signInHeading2: `border-2 border-[#7335c4] rounded-full px-12 py-2 inline-block font-semibold top-10 hover:cursor-pointer mt-3`,
      under: `border-2 w-10 border-[#7335c4] inline-block mb-2`,
      social: `flex justify-center my-2`,
      facebook: `text-sm `,
      linkFacebook: `border-2 border-gray-200 rounded-full p-3 mx-1`,
      loginSection: `flex flex-col items-center`,
      loginAdjust: `bg-gray-100 w-64 p-2 flex items-center mb-3`,
      inputField: `bg-gray-100 outline-none text-sm flex-1`,
    }
  return (
    <div>
      {
        currentUser? (
          <div>
            <Dashboard />
          </div>
        ): (
          <div className={styles.parent}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.signInSection}>
                <div className={styles.companyName}>
                  <span className={styles.themecolor}>CRAAAAWARD</span> Awards
                </div>
                <div className={styles.signIn1}>
                  <h2 className={styles.signInHeading}>Sign into Twitter</h2>
                  <div className={styles.under}></div>
                  <div className={styles.social}>
                    <Link href="#" className={styles.linkFacebook}>
                      <FaFacebookF className={styles.facebook}/>
                    </Link>
                    <Link href="#" className={styles.linkFacebook}>
                      <FaLinkedinIn className={styles.facebook}/>
                    </Link>
                    <Link href="#" className={styles.linkFacebook}>
                      <FaGoogle className={styles.facebook}/>
                    </Link>
                  </div>
                  <p className='text-gray-400 my-3'>or Use your email Account!</p>
                  <div className={styles.loginSection}>
                    <div className={styles.loginAdjust}>
                      <FaRegEnvelope className='text-gray-400 m-2' />
                      <input type='email' name='email' placeholder='email!' className={styles.inputField} />
                    </div>
                    <div className={styles.loginAdjust}>
                      <MdLockOutline className='text-gray-400 m-2' />
                      <input type='password' name='email' placeholder='Password' className={styles.inputField} />
                    </div>
                  </div>
                  <a className={styles.signInHeading2} onClick={handleUserAuth} href='#'>Sign In- Demo!</a>
                </div>
              </div>
              <div className={styles.signInContentSection}>
                <h2 className={styles.signInWelcome}>Hello Friend!</h2>
                <div className={styles.signInSubWelcome}></div>
                  <p className={styles.signInSubWelcomeInfo1}>Connect your twitter account and start journey with us.</p>
                  <a href="#" className={styles.signInSubWelcomeInfo2}>Sign Up!</a>
              </div>
            </div>
          </div>
        </div>
        )
      }
      </div>
  )
}
