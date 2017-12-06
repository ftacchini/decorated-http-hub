import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpPutBuilder, HttpRouteInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpPut =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpPutBuilder>(
    HttpPutBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);