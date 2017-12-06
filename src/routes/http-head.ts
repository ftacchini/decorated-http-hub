import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpHeadBuilder, HttpRouteInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpHead =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpHeadBuilder>(
    HttpHeadBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);