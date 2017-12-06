import { Handler } from 'ts-hub';
import { ControllerMiddlewareMetadataBuilder, CastParameterTypes } from "decorated-ts-hub";
import { injectable } from 'inversify';
import { HttpConstructorMiddlewareBuilder } from 'http-hub';
import "reflect-metadata";

export class MiddlewareInfo {
    middlewareConfig: number;
}

@injectable()
export class HttpMiddleware implements Handler<MiddlewareInfo> {
    
    @CastParameterTypes()
    public handleRequest(info: MiddlewareInfo, extraParam: string): any {
        console.log("middlewareBeingCalled");
    }
}

export const MiddlewareHandler = ControllerMiddlewareMetadataBuilder
                                    .instance
                                    .buildServerSpecificMiddleware<MiddlewareInfo>(
                                        HttpConstructorMiddlewareBuilder, 
                                        HttpMiddleware);