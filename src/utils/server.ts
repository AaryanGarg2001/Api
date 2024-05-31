import fastify, { FastifyInstance } from "fastify";
import { logger } from "./logger";

export async function buildServer() {

    const app= fastify({
        logger:logger
    });


    



    return app;
}