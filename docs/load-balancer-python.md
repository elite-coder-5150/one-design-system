```python
class LoadBalancer:
    def __init__(self, servers):
        self.servers = servers
        self.current_server_index = 0

    def get_server(self):
        server = self.servers[self.current_server_index]
        self.current_server_index = (self.current_server_index + 1) % len(self.servers)
        return server

```



This `LoadBalancer` class has a constructor that takes an array of `servers` as its parameter. The `current_server_index` attribute is used to keep track of the next server to be used for incoming traffic.

The `get_server()` method is responsible for distributing traffic across the servers. It selects the next server in the array, and then updates the `current_server_index` to point to the next server in the list, wrapping around to the beginning of the array when it reaches the end.

To use the load balancer, you can create an instance of the `LoadBalancer` class, passing in an array of server objects, and then call the `get_server()` method for each incoming request to get the next server to handle the request. For example:

```python
servers = [
    {'name': 'server1', 'ip': '192.168.0.1', 'port': 8080},
    {'name': 'server2', 'ip': '192.168.0.2', 'port': 8080},
    {'name': 'server3', 'ip': '192.168.0.3', 'port': 8080},
]

balancer = LoadBalancer(servers)

def handle_request(request):
    server = balancer.get_server()
    print(f"Handling request {request} on server {server['name']} at {server['ip']}:{server['port']}")
    # process the request on the selected server

handle_request('request1')
handle_request('request2')
handle_request('request3')

```

This example creates an instance of the `LoadBalancer` class with an array of three server objects. The `handle_request()` function is called three times, each time selecting the next server in the list to handle the request.