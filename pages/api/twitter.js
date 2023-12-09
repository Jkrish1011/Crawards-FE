// pages/api/twitter.js

import axios from 'axios';

// this is the ID for @TwitterDev
const userId = "Christo21068478";
const url = `https://api.twitter.com/2/users/${userId}/tweets`;


export default async function handler(req, res) {
    try{
    const clientId = 'M1M5R3BMVy13QmpScXkzTUt5OE46MTpjaQ'; // Your Client ID
    const redirectUri = encodeURIComponent('https://www.example.com');
    const scope = encodeURIComponent('tweet.read users.read offline.access');
    const state = 'state'; // Replace with your state
    const codeChallenge = 'challenge'; // Replace with your code challenge
    const codeChallengeMethod = 'plain'; // Code challenge method

    const authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallengeMethod}`;
    
    return "";
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
}

// export default async function handler(req, res) {
    
//   const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAKuarQEAAAAALNNkPst0rg%2Bh6h39JbIzs1%2FDloA%3D2be163MetU2NPSSlvIS8AQtoujT7SfKAepzFdz4i9cNDl606sm'; // Your Twitter API Bearer Token
//   const userId = 'Christo21068478'; // Your User ID
//   const tweetFields = 'created_at,public_metrics';
//   const maxResults = 5;

//   try {
//     const response = await axios.get(`https://api.twitter.com/2/users/${userId}/tweets`, {
//       headers: {
//         'Authorization': `Bearer ${bearerToken}`
//       },
//       params: {
//         'tweet.fields': tweetFields,
//         'max_results': maxResults
//       }
//     });

//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error fetching tweets:', error);
//     res.status(error.status || 500).json({ message: error.message });
//   }
// }
