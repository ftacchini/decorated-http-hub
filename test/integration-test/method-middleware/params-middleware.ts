import { OperationsRegistryId, OperationsRegistry } from './../operations-registry';
import { Handler } from 'ts-hub';
import { ControllerMiddlewareMetadataBuilder, CastParameterTypes } from "decorated-ts-hub";
import { injectable } from 'inversify';
import { HttpConstructorMiddlewareBuilder } from 'http-hub';
import "reflect-metadata";
import { HttpRequest } from '../../../src/index';
import { inject } from 'inversify/dts/annotation/inject';

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
        @HttpRequest() request: string): any {
        this.operationsRegistry.register("paramsMiddlewareBeingCalled");
    }
}

export const ParamsMiddlewareHandler = ControllerMiddlewareMetadataBuilder
                                    .instance
                                    .buildServerSpecificMiddleware<MiddlewareParamsInfo>(
                                        HttpConstructorMiddlewareBuilder, 
                                        ParamsMiddleware, 2);