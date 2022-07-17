import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init () {
    Sentry.init({
        dsn: "https://d2245646c59f4653ac7844c643e48075@o987748.ingest.sentry.io/6578919",
        integrations: [new BrowserTracing()],
    
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log (error) {
    Sentry.captureException(error)
}


const logService = {
    init,
    log
}

export default logService