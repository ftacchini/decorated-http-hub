import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpDeleteBuilder, HttpRouteInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpDelete =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpDeleteBuilder>(
    HttpDeleteBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);