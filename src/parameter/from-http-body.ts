import { HttpBodyParameterInformation, HttpBodyParameterBuilder } from 'http-hub';
import { ControllerMetadataBuilder, ControllerMetadataKeys } from "decorated-ts-hub";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const FromHttpBody = ControllerMetadataBuilder.instance.buildArgumentLevelMetadata<HttpBodyParameterInformation, HttpBodyParameterBuilder>(
    HttpBodyParameterBuilder, 
    [ControllerMetadataKeys.PARAMETER_BUILDER, HttpMetadataKeys.HTTP_PARAMETER_BUILDER]);