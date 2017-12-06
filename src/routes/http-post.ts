import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpPostBuilder, HttpRouteInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpPost =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpPostBuilder>(
    HttpPostBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);