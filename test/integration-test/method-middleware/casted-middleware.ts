import { OperationsRegistryId, OperationsRegistry } from './../operations-registry';
import { Handler } from 'ts-hub';
import { ControllerMiddlewareMetadataBuilder, CastParameterTypes } from "decorated-ts-hub";
import { injectable } from 'inversify';
import { HttpConstructorMiddlewareBuilder } from 'http-hub';
import "reflect-metadata";
import { inject } from 'inversify/dts/annotation/inject';

export class MiddlewareInfo {
    middlewareConfig: number;
}

@injectable()
export class CastedMiddleware implements Handler<MiddlewareInfo> {
    
    constructor(
        @inject(OperationsRegistryId) private operationsRegistry: OperationsRegistry) {
    }

    @CastParameterTypes()
    public handleRequest(info: MiddlewareInfo, extraParam: string): any {
        this.operationsRegistry.register("castedMiddlewareBeingCalled");
    }
}

export const CastedMiddlewareHandler = ControllerMiddlewareMetadataBuilder
                                    .instance
                                    .buildServerSpecificMiddleware<MiddlewareInfo>(
                                        HttpConstructorMiddlewareBuilder, 
                                        CastedMiddleware, 1);