package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import play.*;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Result index() {
        ObjectNode result = Json.newObject();
        result.put("message", "CORS - Enabled.");
        return ok(result);
    }

}
