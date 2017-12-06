import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpPatchBuilder, HttpRouteInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpPatch =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpPatchBuilder>(
    HttpPatchBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);