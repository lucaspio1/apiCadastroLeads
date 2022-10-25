class Cadastro {
    static router(app){
        app.get("/", (req, res) => {
            res.json({ message: "Oi Express!" });
        });
    }
    
}

module.exports = Cadastro
