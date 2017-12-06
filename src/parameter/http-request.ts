import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpRequestParameterBuilder } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const HttpRequest = ControllerMetadataBuilder.instance.buildArgumentLevelMetadata(
    HttpRequestParameterBuilder, 
    [ControllerMetadataKeys.PARAMETER_BUILDER, HttpMetadataKeys.HTTP_PARAMETER_BUILDER]);