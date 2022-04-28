import { NextApiRequest, NextApiResponse } from 'next'

export const protectAPI = (
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void | NextApiResponse<any>>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(new URL(req.headers.referer as string).origin)
    if (new URL(req.headers.referer as string).origin !== process.env.DOMAIN) {
      return res.status(403).json({ success: false, message: `Forbidden` })
    }
    return handler(req, res)
  }
}
