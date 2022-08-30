
import jwt from 'jsonwebtoken'

const secret_key = "Secret_key_for_Code_kamp_authentication"



export default async function login(req, res) {
    if (req.method == "POST") {
        try {
            if (req.body.name && req.body.password) {
                const user = {
                    name: req.body.name,
                    password: req.body.password
                }
                const token = jwt.sign({ user: user }, secret_key || '', { expiresIn: '7d' })
                res.status(200).send({ accessToken: token, user: req.body.name })
            }
            else {
                res.status(401).send({ error: "Something went wrong" })
            }

        } catch (error) {
            console.error(error)
        
        }

    }
}
    