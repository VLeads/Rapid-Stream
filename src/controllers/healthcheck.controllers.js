import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

/* healthcheck is just test api, which we give to loadbalancers or server to call after every given time period (eg. 5min or 1min) to call 
and check if our api is working fine and giving response. It's just to test everything is working fine and no need to worry about, that's why its name is healthcheck
*/
const healthcheck = asyncHandler( async (req, res) => {
    return res.status(200).json(new ApiResponse(200, "OK", "Health check passed"))
})

export {healthcheck}