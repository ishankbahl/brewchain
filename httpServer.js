const http_port = 3000;

let BrewHTTP = function (){

    const app = new exress();

    app.use(bodyParser.json());

    app.get("/broadcast", (req, res) => {

        console.log("broadcasting " + req.query.message);
        node1.broadcastMessage(req.query.message);
        res.send();
    });

    // For testing purposes currently only uses localhost
    app.get("/addNode/:port", (req, res) => {
        console.log("adding localhost host: " + req.params.port);
        node1.addPeer('localhost', req.params.port);

        res.send();

    });

    app.get("/spawnBrew/:teammember", (req, res) => {

        let newBlock = node1.createBlock(req.params.teammember);
        console.log("block created");

        console.log(node1.getStats());

        res.send();

    });

    app.listen(http_port, () => {

        console.log(`http server up.. ${http_port}`);

    });

}

let httpserver = new BrewHTTP();