import { QuietLogger } from '../quiet-logger';
import { OperationsRegistry, OperationsRegistryId } from './../operations-registry';
import { HttpVerbsController } from './http-verbs-controller';
import { HubContainer, HubBuilder, Hub, InversifyContainer } from "ts-hub";
import { HttpServer, DefaultHttpServerConfigurator, HttpRouteType, HttpVerb } from "http-hub";
import { DecoratedFrameworkBuilder, MetadataControllerLoader } from "decorated-ts-hub";
import * as Http from "http";
import "jasmine";

var port = 8080;
var controllerLoader = new MetadataControllerLoader(/(.*)http\-verbs\-controller\.js$/); 

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

describe("http routes", () => {

    let registry: OperationsRegistry;

    beforeAll(async (done) => {
        registry = container.get(OperationsRegistryId);
        var running = await httpApplication.run();
        done();
    })

    let expectations: { [index: string]: HttpRouteType[]} = {};
    expectations[HttpVerb.ALL] = [HttpVerb.GET, HttpVerb.HEAD, HttpVerb.DELETE, HttpVerb.PATCH, HttpVerb.POST, HttpVerb.PUT];
    expectations[HttpVerb.GET] = [HttpVerb.GET, HttpVerb.HEAD];
    expectations[HttpVerb.POST] = [HttpVerb.POST];
    expectations[HttpVerb.PATCH] = [HttpVerb.PATCH];
    expectations[HttpVerb.PUT] = [HttpVerb.PUT];
    expectations[HttpVerb.DELETE] = [HttpVerb.DELETE];
    expectations[HttpVerb.HEAD] = [HttpVerb.HEAD];
    
    for(let element in HttpVerb) {
    let verb: HttpRouteType = <HttpRouteType>HttpVerb[element];

        describe(`http ${verb}`, () => {

            it(`should responde to http ${verb}s only`, async (done) => {
                //arrange
                //act
                var result = await tryAllOperations(`${verb}Foo`);

                //assert
                expectResponseFromVerbs(expectations[verb]);
                done();
            });

            it("should responde to named endpoint", async (done) => {
                //arrange
                //act
                var result = await tryAllOperations(`${verb}FooWithName`);

                //assert
                expectResponseFromVerbs(expectations[verb]);
                done();
            });

            
        })
    }

    afterAll(async (done) => {
        await httpApplication.stop();
        done();
    })
    
    function tryAllOperations(endpoint: string): Promise<Http.IncomingMessage[]> {
        var calls = [performHttpCall(HttpVerb.GET, endpoint),
                     performHttpCall(HttpVerb.POST, endpoint),
                     performHttpCall(HttpVerb.DELETE, endpoint),
                     performHttpCall(HttpVerb.HEAD, endpoint),
                     performHttpCall(HttpVerb.PATCH, endpoint),
                     performHttpCall(HttpVerb.PUT, endpoint)]

        return Promise.all(calls);
    }

    function performHttpCall(method: HttpRouteType, endpoint: string): Promise<Http.IncomingMessage> {
        var options = {
            host: 'localhost',
            path: `/HttpVerbs/${endpoint}`,
            port: port,
            method: method
        };
        
        return new Promise((fulfill, reject) => {
            Http.request(options)
                .on('response', fulfill)
                .end();
        });
    }
    
    function expectResponseFromVerbs(verbs: HttpRouteType[]): void {
        expect(registry.registry.length).toEqual(verbs.length, "There where more operations accepted than expected");
        verbs.forEach((verb) => { 
            expect(registry.registry.some((op) => op === verb)).toBeTruthy(`The operation ${verb} was not processed`);
        })
        registry.clean();
    }
})
