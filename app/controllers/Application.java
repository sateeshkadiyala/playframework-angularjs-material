package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import play.*;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Result index() {
        return ok(index.render());
    }

    public Result about() {
        ObjectNode result = Json.newObject();
        result.put("message", "About Message from REST API Call.");
        return ok(result);
    }

    public Result contact() {
        ObjectNode result = Json.newObject();
        result.put("message", "Contact us.");
        return ok(result);
    }
}
