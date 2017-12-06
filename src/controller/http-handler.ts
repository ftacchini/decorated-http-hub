import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpControllerBuilder, HttpControllerInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const HttpHandler = ControllerMetadataBuilder.instance.buildControllerLevelMetadata<HttpControllerInformation, HttpControllerBuilder>(
    HttpControllerBuilder, 
    [ControllerMetadataKeys.CONTROLLER_BUILDER, HttpMetadataKeys.HTTP_CONTROLLER_BUILDER]);