const statusCodes = {

100:{
message:"Continue",
description:"The server received the initial request and the client should continue sending the rest of it.",
example:"Used when uploading large files."
},

101:{
message:"Switching Protocols",
description:"The server is switching protocols as requested by the client.",
example:"Switching an HTTP connection to WebSocket."
},

200:{
message:"OK",
description:"The request was successful and the server returned the requested resource.",
example:"Opening a webpage successfully."
},

201:{
message:"Created",
description:"The request was successful and a new resource was created.",
example:"Creating a new user through an API."
},

202:{
message:"Accepted",
description:"The request has been accepted but processing is not complete yet.",
example:"Background processing jobs."
},

204:{
message:"No Content",
description:"The request succeeded but there is no content to return.",
example:"Deleting a resource successfully."
},

206:{
message:"Partial Content",
description:"Only part of the requested resource is returned.",
example:"Video streaming or downloading part of a file."
},

301:{
message:"Moved Permanently",
description:"The resource has permanently moved to a new URL.",
example:"Redirecting old website URLs to a new domain."
},

302:{
message:"Found",
description:"The resource is temporarily available at another URL.",
example:"Temporary redirect during maintenance."
},

303:{
message:"See Other",
description:"The response can be found at another URL.",
example:"Redirect after submitting a form."
},

304:{
message:"Not Modified",
description:"The resource has not changed since the last request.",
example:"Browser using cached version of a webpage."
},

307:{
message:"Temporary Redirect",
description:"The request should be repeated with another URL temporarily.",
example:"Temporary server routing."
},

308:{
message:"Permanent Redirect",
description:"The resource has permanently moved and future requests should use the new URL.",
example:"Permanent API endpoint migration."
},

400:{
message:"Bad Request",
description:"The server cannot process the request due to invalid input.",
example:"Sending malformed JSON in an API request."
},

401:{
message:"Unauthorized",
description:"Authentication is required to access the resource.",
example:"Trying to access an API without login."
},

403:{
message:"Forbidden",
description:"The server understood the request but refuses to authorize it.",
example:"Accessing an admin page without permission."
},

404:{
message:"Not Found",
description:"The server cannot find the requested resource.",
example:"Opening a URL that does not exist."
},

405:{
message:"Method Not Allowed",
description:"The request method is not supported for the resource.",
example:"Sending POST to an endpoint that only supports GET."
},

408:{
message:"Request Timeout",
description:"The server waited too long for the request.",
example:"Slow or dropped client connection."
},

409:{
message:"Conflict",
description:"The request conflicts with the current state of the resource.",
example:"Uploading duplicate data."
},

410:{
message:"Gone",
description:"The resource is permanently removed and no longer available.",
example:"Deleted webpage."
},

418:{
message:"I'm a Teapot",
description:"The server refuses to brew coffee because it is a teapot.",
example:"A humorous HTTP status code defined as an April Fools joke."
},

429:{
message:"Too Many Requests",
description:"The client sent too many requests in a short time.",
example:"API rate limiting."
},

500:{
message:"Internal Server Error",
description:"The server encountered an unexpected condition.",
example:"Server-side application crash."
},

501:{
message:"Not Implemented",
description:"The server does not support the functionality required.",
example:"Feature not implemented yet."
},

502:{
message:"Bad Gateway",
description:"The server received an invalid response from another server.",
example:"Proxy server failure."
},

503:{
message:"Service Unavailable",
description:"The server is temporarily unable to handle the request.",
example:"Server overloaded or under maintenance."
},

504:{
message:"Gateway Timeout",
description:"The server did not receive a response from an upstream server in time.",
example:"Slow external API service."
},

505:{
message:"HTTP Version Not Supported",
description:"The server does not support the HTTP protocol version used.",
example:"Client using unsupported HTTP version."
}

};

module.exports = statusCodes;