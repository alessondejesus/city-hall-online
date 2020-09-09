import { Request, Response, NextFunction } from 'express'

const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { authorization } = req.headers
        if (!authorization) {
            throw new Error('Token not found')
        }
        const [, token]: any = req.headers.authorization?.split('')
        if (!token) {
            throw new Error('Token not found')
        }
        next()
    } catch (error) {
        res.status(401).json({ error: error.message || 'unauthorized' })
    }
}

export { verifyToken }