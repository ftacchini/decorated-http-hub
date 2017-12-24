import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpsControllerBuilder, HttpControllerInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const HttpsHandler = ControllerMetadataBuilder.instance.buildControllerLevelMetadata<HttpControllerInformation, HttpsControllerBuilder>(
    HttpsControllerBuilder, 
    [ControllerMetadataKeys.CONTROLLER_BUILDER, HttpMetadataKeys.HTTP_CONTROLLER_BUILDER]);