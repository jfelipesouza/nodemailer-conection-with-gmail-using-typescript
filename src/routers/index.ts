import { Request, Router, Response } from 'express'


import { enviarEmail } from '../utils/enviarEmail'
import { Member } from '../@types/members'
import { selectThemes } from '../utils/escolhaAleatoria'
import { getNextWednesday } from '../utils/date'



const router = Router()
const port = process.env.PORT || 3001

router.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    status: 'Application is Running',
    port
  })
})


router.post("/sendMail",async (req:Request,res:Response)=>{

  const {members,themes} = req.body as {members:Member[],themes:string[]}

  const selectedThemes = selectThemes(themes,members)
  const nextWednesday = getNextWednesday();

 

  selectedThemes.forEach(async (member)=>
    {
      const data = {
        date:nextWednesday,
        email:"j.felipe@academico.ufs.br",
        name:member.name,
        theme:member.theme,
        allMembers:selectedThemes
      }
      
      await enviarEmail(data)

    });

  return res.status(200).send({
    message:"Teste",
  
  })
})


export { router }