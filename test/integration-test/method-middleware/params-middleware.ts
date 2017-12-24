import { Activation } from './../activation';
import { OperationsRegistryId, OperationsRegistry } from './../operations-registry';
import { Handler } from 'ts-hub';
import { ControllerMiddlewareMetadataBuilder, CastParameterTypes } from "decorated-ts-hub";
import { injectable, inject } from 'inversify';
import { HttpConstructorMiddlewareBuilder } from 'http-hub';
import "reflect-metadata";
import { HttpRequest } from '../../../src/index';
import { Request } from 'express-serve-static-core';

export class MiddlewareParamsInfo {
    middlewareConfig: number;
}

@injectable()
export class ParamsMiddleware implements Handler<MiddlewareParamsInfo> {
    
    
    constructor(
        @inject(OperationsRegistryId) private operationsRegistry: OperationsRegistry) {
    }

    public handleRequest(
        info: MiddlewareParamsInfo,
        @HttpRequest() request: Request): any {
        this.operationsRegistry.register(new Activation("paramsMiddlewareBeingCalled", [info, request.method]));
    }
}

export const ParamsMiddlewareHandler = ControllerMiddlewareMetadataBuilder
                                    .instance
                                    .buildServerSpecificMiddleware<MiddlewareParamsInfo>(
                                        HttpConstructorMiddlewareBuilder, 
                                        ParamsMiddleware, 2);