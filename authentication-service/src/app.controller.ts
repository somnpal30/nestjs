import {Body, Controller, Get, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {LoginRequest} from './request/LoginRequest';
import {LoginResponse} from './response/LoginResponse';
import {Token} from './response/Token';

@Controller('ums/v3/user/auth')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/greet')
    getHello(): string {
        return this.appService.getHello();
    }

    @Post('/login')
    doLogin(@Body() loginRequest: LoginRequest): LoginResponse {
        console.log(loginRequest);
        let loginResp = new LoginResponse();

        loginResp.language ='en';
        loginResp.message ='OTP validation is required. Please enter OTP to continue';
        loginResp.serviceFlow = 'OTPLOGIN';
        loginResp.serviceRequestId ='f491f6b1-aa9b-43de-93b0-c85eda706a2c'
        loginResp.transactionId = 'XX161108.0404.A00011'
        loginResp.txnStatus ='Success'

        loginResp.token = new Token();
        loginResp.token.access_token='aaaa';
        loginResp.token.refresh_token='bbb'
        loginResp.token.expires_in=300

        return loginResp;
    }
}
