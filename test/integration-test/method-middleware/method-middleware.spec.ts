import { QuietLogger } from '../quiet-logger';
import { OperationsRegistry, OperationsRegistryId } from './../operations-registry';
import { HubContainer, HubBuilder, Hub, InversifyContainer } from "ts-hub";
import { HttpServer, DefaultHttpServerConfigurator, HttpRouteType, HttpVerb } from "http-hub";
import { DecoratedFrameworkBuilder, MetadataControllerLoader } from "decorated-ts-hub";
import * as Http from "http";
import "jasmine";

var port = 8081;
var controllerLoader = new MetadataControllerLoader(/(.*)middleware\-controller\.js$/); 

var container = new InversifyContainer();
container.bind(OperationsRegistryId).toConstantValue(new OperationsRegistry());

var httpServer = HttpServer.bootstrap(port);

var framework = DecoratedFrameworkBuilder.instance
    .withContollerLoader(controllerLoader)
    .buildDecoratedFramework(container);

var httpApplication: Hub = HubBuilder.instance
    .withServerSupport(httpServer, new DefaultHttpServerConfigurator())
    .withLogger(new QuietLogger())
    .withContainer(container)
    .withFramework(framework)
    .buildHub();


describe("http method middleware", () => {

    
    let registry: OperationsRegistry;
    
    beforeAll(async (done) => {
        registry = container.get(OperationsRegistryId);
        var running = await httpApplication.run();
        done();
    })

    it("should receive information", () => {

    })

    it("should call function afterwards", () => {
            
    })

    it("should be sorted by priority", () => {
            
    })

    afterAll(async (done) => {
        await httpApplication.stop();
        done();
    })
})