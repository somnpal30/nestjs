import {Token} from './Token';

export class LoginResponse {
    serviceRequestId: string;
    message: string;
    transactionId: string;
    txnStatus: string;
    serviceFlow: string;
    status: string;
    language: string;
    token: Token;
}
