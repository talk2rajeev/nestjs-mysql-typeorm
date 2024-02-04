import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Auth Middleware');
    next();
    // const {authorization} = req.headers;
    // console.log('Inside AuthMiddleware.. ');
    // if(authorization === 'validAuthToken') {
    //   next();
    // } else if(!authorization) {
    //   throw new HttpException('Authentication token not found !', HttpStatus.FORBIDDEN)
    // } else {
    //   throw new HttpException('Authentication failed !', HttpStatus.FORBIDDEN)
    // }

  }
}
