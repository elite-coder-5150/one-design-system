To run a MongoDB database using Javascript, you can use the MongoDB Node.js driver, which is the official MongoDB driver for Node.js. Here is the basic steps youi can follow to query a mongodb database using javascript.

1.   **Install the MongoDB Node.js driver package** - You can do by running the following command in your terminal

```shell
npm install mongodb --save
```



2.   connect to the MongoDB server. To connect to the mongoldb server, you need to create a mongo client instance and use its connect method to connect to the server. For Instance, to connect to a local MongoDB server, you canuse the following code:

```javascript
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Use the db object to query the database
  // ...
  
  // Close the client when you're done
  client.close();
});

```

In the above code example, I created a mongo client instance and used its connect method to connect to the local mongodb server. I also specifeid the name of the database I want to connect to. and printed a message to the console to confirm that we've connected to the server.

3.   **Query the Database** - Once you've connected to the mongodb server, you can use the db object to query the database. For instance, to query a collection called users and find all documents that match a certain criteria, you can use the following code:

```javascript
const collection = db.collection('users');

collection.find({
    age: { gte: 18}
}).toArray((err, docs) => {
    console.log("found the following users");
    console.log(docs);
})
```

In the example of the above code, I used the collection method to get a referece to the users collection and the find method to find al documents that have an age property greater than or equal to 18. We also used the toArray method to convert the result to an array and printed the result to the console.

4.   **Close the connection** -When you're done quering the database, youk should close the connection to the mongodb server to free up resources. You cando this by calling the close() methodon the MongoClient instance



```javascript
client.close()
```

