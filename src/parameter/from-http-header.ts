import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpHeaderParameterBuilder, HttpNamedParameterInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const FromHttpHeader = ControllerMetadataBuilder.instance.buildArgumentLevelMetadata<HttpNamedParameterInformation, HttpHeaderParameterBuilder>(
    HttpHeaderParameterBuilder, 
    [ControllerMetadataKeys.PARAMETER_BUILDER, HttpMetadataKeys.HTTP_PARAMETER_BUILDER]);