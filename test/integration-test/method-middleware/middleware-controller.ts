import { Activation } from './../activation';
import { ParamsMiddlewareHandler } from './params-middleware';
import { OperationsRegistry, OperationsRegistryId } from './../operations-registry';
import { inject, injectable } from 'inversify';
import { CastedMiddlewareHandler } from './casted-middleware';
import { HttpHandler, HttpAll } from '../../../src/index';

@HttpHandler()
@injectable()
export class HttpMiddlewareController {

    constructor(
        @inject(OperationsRegistryId) private operationsRegistry: OperationsRegistry) {
    }

    @HttpAll()
    @CastedMiddlewareHandler({ middlewareConfig: 1 })
    public castedMiddlewareMethod() {
        this.operationsRegistry.register(new Activation("castedMiddlewareMethodBeingCalled", []));
    }

    @HttpAll()
    @ParamsMiddlewareHandler({ middlewareConfig: 2 })
    public paramsMiddlewareMethod() {
        this.operationsRegistry.register(new Activation("paramsMiddlewareMethodBeingCalled", []));
    }

    @HttpAll()
    @CastedMiddlewareHandler({ middlewareConfig: 1 })
    @ParamsMiddlewareHandler({ middlewareConfig: 2 })
    public multipleMiddlewareMethod() {
        this.operationsRegistry.register(new Activation("multipleMiddlewareMethodBeingCalled", []));
    }
}