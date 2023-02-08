/* estlint-disable  */
/**
 * this code was generated by chat gbt
 */
// const axios = require('axios')

// async function getTweet (query, count) {
// 	const headers = {
// 		Authorization: 'Bearer YOUR_BEARER_TOKEN',
// 		'Content-Type': 'application/json'
// 	};
// 	const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=${count}`;
	
// 	const response = await axios.get(url, {headers});
// 	const tweets = response.data.data
	
// 	return tweets.map(tweet => tweet.text)
// }

// const query = '#javascript'
// const count = 10

// getTweets(query, count)
// 	.then(tweets => console.log(tweets))
// 	.catch(error => console.log(error))
import Notify from './notify.js';
import { Chat } from './chat.js';
class App {
    init() {
        this.notify = Notify.init()
        this.chat = Chat.init()
    }
}

let t = new App();
t.init();