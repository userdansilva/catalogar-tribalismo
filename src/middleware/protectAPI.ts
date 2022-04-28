import { NextApiRequest, NextApiResponse } from 'next'

export const protectAPI = (
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void | NextApiResponse<any>>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (new URL(req.headers.referer as string).origin !== process.env.DOMAIN) {
      return res
        .status(403)
        .json({
          success: false,
          message: `Forbidden ${new URL(req.headers.referer as string).origin}`
        })
    }
    return handler(req, res)
  }
}
