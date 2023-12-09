import { createContext, useState } from 'react'
import {auth, provider} from './base'
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";

// Web3
import { useConnect, metamaskWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

const commentCrawdContext = createContext();
const metamaskConfig = metamaskWallet();

const CommentCrawdProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const [currentWalletAddress, setCurrentWalletAddress] = useState(null);

    const connect = useConnect();
    const currentConnectedWalletAddress = useAddress();

    const handleUserAuth = async () => {
        try{
            const userDataResult = await signInWithPopup(auth, provider);
            // const credential = TwitterAuthProvider.credentialFromResult(userDataResult);
            console.log(userDataResult.user.displayName);
            setCurrentUser(userDataResult.user.displayName);
        }catch(err){
            console.error(err);
        }
    }

    const handleWalletConnection = async () => {
        console.log(connect);
        console.log(metamaskConfig);
        console.log(metamaskConfig.isInstalled());
        if(!connect)
            alert('Metamask wallet not active!');
        const wallet = await connect(metamaskConfig);
        console.log("connected to ", wallet);
    };

    return (
        <commentCrawdContext.Provider value={{handleUserAuth, currentUser, currentConnectedWalletAddress, handleWalletConnection}}>
            {children}
        </commentCrawdContext.Provider>
    )
};


export { commentCrawdContext, CommentCrawdProvider };