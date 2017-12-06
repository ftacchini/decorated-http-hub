import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpAllBuilder, HttpRouteInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpAll =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpAllBuilder>(
    HttpAllBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);