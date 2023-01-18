import { Request, Response, NextFunction } from "express";


//create images and resize them 
export const creat = async (req: Request, res: Response, next: NextFunction) => {
    res.send('done');
}