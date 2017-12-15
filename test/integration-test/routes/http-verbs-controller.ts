import { HttpRequest } from './../../../src/parameter/http-request';
import { OperationsRegistryId, OperationsRegistry } from './../operations-registry';
import { injectable } from 'inversify';
import { HttpVerb, HttpRouteInformation } from "http-hub";
import { HttpGet, HttpPost, HttpHandler, HttpHead, HttpPatch, HttpDelete, HttpPut, HttpAll, } from "../../../src";
import { inject } from 'inversify';
import { Request } from 'express-serve-static-core';
import "reflect-metadata";

@HttpHandler()
@injectable()
export class HttpVerbsController {

    constructor(
        @inject(OperationsRegistryId) private operationsRegistry: OperationsRegistry) { }


    @HttpAll()
    public allFoo(@HttpRequest() request: Request) {
        this.operationsRegistry.register(request.method.toLowerCase());
    }
    
    @HttpAll({
        path: "allFooWithName"
    })
    public alFoo2( @HttpRequest() request: Request) {
        this.allFoo(request);
    }

    @HttpDelete()
    public deleteFoo() {
        this.operationsRegistry.register(HttpVerb.DELETE);
    }

    @HttpDelete({
        path: "deleteFooWithName"
    })
    public deleteFoo2() {
        this.deleteFoo();
    }

    @HttpGet()
    public getFoo(@HttpRequest() request: Request) {
        this.operationsRegistry.register(request.method.toLowerCase());
    }

    @HttpGet({
        path: "getFooWithName"
    })
    public getFoo2(@HttpRequest() request: Request) {
        this.getFoo(request);
    }

    @HttpHead()
    public headFoo(@HttpRequest() request: Request) {
        this.operationsRegistry.register(request.method.toLowerCase());
    }

    @HttpHead({
        path: "headFooWithName"
    })
    public headFoo2(@HttpRequest() request: Request) {
        this.headFoo(request);
    }

    @HttpPatch()
    public patchFoo() {
        this.operationsRegistry.register(HttpVerb.PATCH);
    }

    @HttpPatch({
        path: "patchFooWithName"
    })
    public patchFoo2() {
        this.operationsRegistry.register(HttpVerb.PATCH);
    }

    @HttpPost()
    public postFoo() {
        this.operationsRegistry.register(HttpVerb.POST);
    }

    @HttpPost({
        path: "postFooWithName"
    })
    public postFoo2() {
        this.operationsRegistry.register(HttpVerb.POST);
    }

    @HttpPut()
    public putFoo() {
        this.operationsRegistry.register(HttpVerb.PUT);
    }

    @HttpPut({
        path: "putFooWithName"
    })
    public putFoo2() {
        this.operationsRegistry.register(HttpVerb.PUT);
    }
}