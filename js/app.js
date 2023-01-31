/* estlint-disable  */
const axios = require('axios')

const getTweets = async (query, count) => {
	const headers = {
		Authorization: 'Bearer YOUR_BEARER_TOKEN',
		'Content-Type': 'application/json'
	};
	const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=${count}`;
	
	const response = await axios.get(url, {headers});
	const tweets = resonse.data.data
	
	return tweets.map(tweet => tweet.text)
}

const query = '#javascript'
const count = 10

getTweet(query, count)
	.then(tweets => console.log(tweets))
	.catch(error => console.log(error))
