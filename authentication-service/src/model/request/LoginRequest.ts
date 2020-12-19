export class LoginRequest {
    bearerCode: string;
    language: string;
    workspaceId: string;
    identifierType: string;
    identifierValue: string;
    authenticationValue: string;
    isTokenRequired: string;
    deviceInfo: DeviceInfo;
}
