const Leads = require ("../models/typeClietes.js")
class Cadastro {
    static router(app){
        app.get("/", (req, res) => {
            res.json({ message: "Oi Express!" });
        });

        app.post("/cadastro", async (req,res)=>{
            const{name,email} = req.body
            
            const leads = {
                name,
                email,                
            }

            try {
                await Leads.create(leads)
                res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
            } catch (error) {
                res.status(500).json({ erro: error })
            }


        })
            



    }
}



module.exports = Cadastro
