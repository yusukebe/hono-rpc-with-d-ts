export declare const client: {
    posts: {
        ":postId": {
            comments: {
                ":commentId": import("hono/client").ClientRequest<{
                    $get: {
                        input: {
                            param: {
                                postId: string;
                            } & {
                                commentId: string;
                            };
                        };
                        output: {
                            id: number;
                            title: string;
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").StatusCode;
                    };
                }>;
            };
        };
    };
} & {
    posts: import("hono/client").ClientRequest<{
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
    } & {
        $delete: {
            input: {};
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    }>;
};
