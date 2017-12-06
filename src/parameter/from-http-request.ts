import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpEverywhereParameterBuilder, HttpNamedParameterInformation } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const FromHttpRequest = ControllerMetadataBuilder.instance.buildArgumentLevelMetadata<HttpNamedParameterInformation, HttpEverywhereParameterBuilder>(
    HttpEverywhereParameterBuilder, 
    [ControllerMetadataKeys.PARAMETER_BUILDER, HttpMetadataKeys.HTTP_PARAMETER_BUILDER]);