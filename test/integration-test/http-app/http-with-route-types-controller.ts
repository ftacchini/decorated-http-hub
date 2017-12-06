import { MiddlewareHandler } from './http-middleware';
import { injectable } from 'inversify';
import { HttpGet, HttpPost, HttpHandler, HttpHead, HttpPatch, HttpDelete, HttpPut, HttpAll,  } from "../../../src";
import "reflect-metadata";

@HttpHandler()
@injectable()
export class HttpWithRouteTypesController {

    constructor(){}
    
    @HttpAll()
    public getAll(){
    }

    @HttpDelete()
    public getDelete(){
    }

    @HttpGet()
    public getFoo(){
    }
    
    @HttpHead()
    public getHead(){
    }
    
    @HttpPatch()
    public postPatch(){
    }
    
    @HttpPost()
    public postFoo(){
    }
    
    @HttpPut()
    public postPut(){
    }
}