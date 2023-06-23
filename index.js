const http = require("http");



const myServer =http.createServer((req, res)=> {
  const url = req.url;

  if (url === "/") {


    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body>");
    res.write('</br>')

    res.write("<h2>Node.js</h2>");
    res.write(
      "<div>Server-Side JavaScript: Traditionally, JavaScript was primarily used for client-side web development. However, Node.js allows developers to use JavaScript on the server-side as well. It provides an event-driven, non-blocking I/O model, which makes it highly scalable and efficient for handling concurrent requests. With Node.js, developers can build server applications, APIs, real-time applications, and even command-line tools using JavaScript.</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Asynchronous and Non-Blocking: One of the key features of Node.js is its asynchronous and non-blocking nature. It uses an event-driven architecture and employs callbacks, promises, or async/await to handle asynchronous operations efficiently. This means that Node.js can handle multiple concurrent requests without blocking the execution of other operations. It is particularly beneficial for handling I/O-bound tasks, such as file system operations, network requests, and database interactions..</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Node is sometimes referred to as a programming language or software development framework, but neither is true; it is strictly a JavaScript runtime.</div>"
    );
    res.write('</br>')
    res.write('</br>')
    res.write("<form method='POST' action='/about'>")
res.write("<button type='submit'>about</button>")
    res.write("</form>")
    res.write("</body>");
    res.write("</html>");
    return res.end()
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body>");
    res.write('</br>')
   
    res.write("<h2>How does Node.js work?</h2>");
    res.write(
      "<div>Node.js works by utilizing an event-driven, non-blocking I/O model. It uses the V8 JavaScript engine to execute JavaScript code on the server-side. When a Node.js server receives a request, it creates an event and passes it to the event loop. The event loop handles the requests asynchronously, allowing Node.js to handle multiple concurrent connections efficiently. It utilizes callbacks, promises, or async/await to manage asynchronous operations and employs modules and the npm package manager to facilitate code reusability and easy integration of external libraries.</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Node.js is event-driven and runs asynchronously. Code written for the Node environment does not follow the traditional model of receive, process, send, wait and receive found in other systems</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Node.js follows a single-threaded event loop architecture, where it processes requests in a non-blocking manner. It leverages the libuv library to handle I/O operations and delegate them to the operating system's underlying capabilities. This approach allows Node.js to handle a large number of concurrent connections without blocking the execution of other requests. Node.js also supports the creation of child processes to utilize multiple CPU cores. Additionally, it provides a built-in module system that allows developers to organize their code into reusable modules, enhancing code maintainability and scalability.</div>"
    );
    res.write("<form method='POST' action='/jsondata'>")
    res.write("<button type='submit'>JASON DATA</button>")
        res.write("</form>")
   
   
    res.write("</body>");
    res.write("</html>");
    return res.end()
  }

if(url==='/jsondata')
    res.write(JSON.stringify([
        {
            name: "saleem",
            age: "26",
            job: "devveloper"
        },
        {
          name: "basit",
          age: "26",
          job: "devveloper"
      },
      {
        name: "mudasir",
        age: "26",
        job: "devveloper"
    },
    {
      name: "adrash",
      age: "26",
      job: "devveloper"
  },
    ])
    )


  res.write("something went wrong")
  res.end()

}

)
myServer.listen(8000,()=>{
    console.log("active site");
})