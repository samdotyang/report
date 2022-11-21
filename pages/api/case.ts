// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type CaseData = {
  status: number
}

const prisma = new PrismaClient();
async function fetch() {
    const result = await prisma.auto_execution_result.findMany({
        where: {
            create_time: {
                lte: new Date("2022-09-28"),
            }
        }
    });
    return result
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return fetch().then( result => {
        res.status(200).json(result);
    }).catch (error => {
        res.status(500).json({"message": error});
    })
    
}
