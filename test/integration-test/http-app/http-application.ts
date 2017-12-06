import { HubContainer, HubBuilder, Hub, InversifyContainer } from "ts-hub";
import { HttpServer, DefaultHttpServerConfigurator } from "http-hub";
import { DecoratedFramework } from "decorated-ts-hub";

var container = new InversifyContainer();
var httpServer = HttpServer.bootstrap();
var framework = DecoratedFramework.bootstrap(container);

export var HttpApplication: Hub = HubBuilder.instance
    .withServerSupport(httpServer, new DefaultHttpServerConfigurator())
    .withContainer(container)
    .withFramework(framework)
    .buildHub();