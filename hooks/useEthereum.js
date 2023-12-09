import React, { useState } from 'react';
import { useWeb3 } from '@3rdweb/hooks'

const useEthereum = () => {
    const {address, chainId} = useWeb3();
    if(address){
        return (
            <div>
                <p>Address: {address}</p>
                <p>ChainId: {chainId}</p>
            </div>
        )
    }else{
        return(
            <div>
                <button onClick={() => connectWallet("injected")}>ConnectWallet</button>
            </div>
        )
    }
}

export default useEthereum