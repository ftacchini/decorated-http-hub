import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import { HttpResponseParameterBuilder } from "http-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const HttpResponse = ControllerMetadataBuilder.instance.buildArgumentLevelMetadata(
    HttpResponseParameterBuilder, 
    [ControllerMetadataKeys.PARAMETER_BUILDER, HttpMetadataKeys.HTTP_PARAMETER_BUILDER]);