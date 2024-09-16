import { Hono } from 'hono';
declare const routes: Hono<import("hono/types").BlankEnv, {
    "/": {
        $get: {
            input: {};
            output: {
                ok: boolean;
                message: string;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
} & {
    "/posts": {
        $post: {
            input: {
                json: {
                    id: number;
                    title: string;
                };
            };
            output: {
                ok: boolean;
                id: number;
                title: string;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
} & {
    "/posts": {
        $delete: {
            input: {};
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    };
}, "/">;
export default routes;
