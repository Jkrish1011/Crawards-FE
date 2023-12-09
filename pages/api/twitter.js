// pages/api/twitter.js

import axios from 'axios';

// this is the ID for @TwitterDev
const userId = "Christo21068478";
const url = `https://api.twitter.com/2/users/${userId}/tweets`;

// The code below sets the bearer token from your environment variables
const bearerToken = `AAAAAAAAAAAAAAAAAAAAAKuarQEAAAAALNNkPst0rg%2Bh6h39JbIzs1%2FDloA%3D2be163MetU2NPSSlvIS8AQtoujT7SfKAepzFdz4i9cNDl606sm`;

export default async function handler(req, res) {
    let userTweets = [];
    let params = {
        "max_results": 100,
        "tweet.fields": "created_at",
        "expansions": "author_id"
    };

    const options = {
        headers: {
            "User-Agent": "v2UserTweetsJS",
            "Authorization": `Bearer ${bearerToken}`
        }
    };

    let hasNextPage = true;
    let nextToken = null;
    let userName;
    console.log("Retrieving Tweets...");

    while (hasNextPage) {
        let resp = await getPage(params, options, nextToken);
        if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
            userName = resp.includes.users[0].username;
            if (resp.data) {
                userTweets.push.apply(userTweets, resp.data);
            }
            if (resp.meta.next_token) {
                nextToken = resp.meta.next_token;
            } else {
                hasNextPage = false;
            }
        } else {
            hasNextPage = false;
        }
    }

    console.dir(userTweets, {
        depth: null
    });
    console.log(`Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`);
};

const getPage = async (params, options, nextToken) => {
    if (nextToken) {
        params.pagination_token = nextToken;
    }

    try {
        const resp = await axios.get(url, {
            params: params,
            headers: options.headers
        });

        if (resp.status !== 200) {
            console.log(`${resp.status} ${resp.statusText}:\n${resp.data}`);
            return;
        }
        return resp.data;
    } catch (err) {
        throw new Error(`Request failed: ${err}`);
    }
};


// export default async function handler(req, res) {
//     const endpointURL = "https://api.twitter.com/2/tweets";
//     const token = `AAAAAAAAAAAAAAAAAAAAAKuarQEAAAAALNNkPst0rg%2Bh6h39JbIzs1%2FDloA%3D2be163MetU2NPSSlvIS8AQtoujT7SfKAepzFdz4i9cNDl606sm`;
//     const params = {
//         ids: "1278747501642657792,1255542774432063488", // Edit Tweet IDs to look up
//         "tweet.fields": "lang,author_id", // Edit optional query parameters here
//         "user.fields": "created_at" // Edit optional query parameters here
//     };

//     try {
//         const response = await axios.get(endpointURL, {
//             params: params,
//             headers: {
//                 "User-Agent": "v2TweetLookupJS",
//                 "Authorization": `Bearer ${token}`
//             }
//         });
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         console.error('Error making request:', error);
//         throw error;
//     }
// }

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
